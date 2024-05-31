import * as React from "react";
import { useEditable, type Position } from "use-editable";

import { cn } from "~/lib/util";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useSearchQuery } from "~/store/category";
import type { Nullable } from "~/type/util.type";
import { useGetCategoryList } from "~/hook/category/useGetCategoryList";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { Category } from "~/type/category.type";

export type DivProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  handleValueChange?: (value: string, position?: Position) => void;
  disabled?: boolean;
};

const tagBracketDelimiter = "¦";
const splitDelimiter = "‡";

const tagRegex = /^¦.*‡.*‡.*¦$/;

const operandRegex = /([+\-*^()/])|(¦[^¦‡]+‡[^¦‡]+‡[^¦‡]+¦)/;

const Editable = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, value, disabled, handleValueChange, ...props }, ref) => {
    const editorRef = React.useRef(null);

    const [openedIndex, setOpenedIndex] =
      React.useState<Nullable<number>>(null);

    const { query, setQuery } = useSearchQuery();

    const { data: categoryList } = useGetCategoryList(query);

    const valueChangeWrapper = (currentValue: string, position: Position) => {
      const currentSplittedValue = position.content
        .trim()
        .split(operandRegex)
        .filter(Boolean);

      const index = currentSplittedValue.length - 1;

      const lastValue = currentSplittedValue[index];

      // is the last value a tag?
      if (lastValue?.startsWith(tagBracketDelimiter)) {
        // not doing anything
      } else {
        if ((lastValue?.length ?? 0) > 2) {
          setQuery(lastValue?.trim() ?? null);

          setOpenedIndex(index);
        } else {
          setQuery(null);

          setOpenedIndex(null);
        }
      }

      if (handleValueChange) {
        handleValueChange(currentValue, position);
      }
    };

    useEditable(editorRef, valueChangeWrapper, {
      disabled: disabled ?? false,
    });

    const valueSplitted = value.trim().split(operandRegex).filter(Boolean);

    const handleDeleteTagClick = (tagIndex: number) => {
      if (handleValueChange) {
        handleValueChange(
          valueSplitted.filter((_, i) => i !== tagIndex).join(""),
        );
      }
    };

    const handleAddTag = (category: Category, index: number) => {
      const tag = `${tagBracketDelimiter}${category.id}${splitDelimiter}${category.name}${splitDelimiter}${category.value}${tagBracketDelimiter}`;

      const newValue = valueSplitted
        .map((content, i) => {
          if (index === i) {
            return tag;
          }

          return content;
        })
        .join("");

      if (handleValueChange) {
        handleValueChange(newValue);
      }
    };

    const colorTag = (content: string, index: number) => {
      const contentWithoutBrackets = content.slice(1, -1);

      const contentArray = contentWithoutBrackets.split(splitDelimiter, 3);

      return (
        <Button type="button" variant="outline" size="sm">
          <span className="hidden">
            {tagBracketDelimiter}
            {contentArray[0]}
            {splitDelimiter}
          </span>
          <input
            disabled
            value=""
            placeholder={contentArray[1]}
            style={{
              width: `${contentArray[1]?.length}ch`,
            }}
            className="bg-transparent"
          />
          <span className="hidden">{contentArray[1]}</span>
          <span className="hidden">{splitDelimiter}</span>
          <span className="pl-3">{contentArray[2]}</span>
          <span className="hidden">{tagBracketDelimiter}</span>
          {disabled ? null : (
            <XIcon onClick={() => handleDeleteTagClick(index)} />
          )}
        </Button>
      );
    };

    return (
      <div
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      >
        <pre
          className={cn(
            "disabled:op acity-50 w-full bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed",
            className,
          )}
          style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
          ref={editorRef}
        >
          {valueSplitted.map((content, index) => {
            return (
              <React.Fragment key={index}>
                {tagRegex.test(content) ? (
                  colorTag(content, index)
                ) : (
                  <span>
                    <Popover open={openedIndex === index && (categoryList?.length ?? 0) > 0}>
                      <PopoverTrigger>{content}</PopoverTrigger>
                      <PopoverContent className="h-96 w-96 overflow-auto">
                        <Table>
                          <TableCaption>Found categories</TableCaption>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[100px]">
                                Category
                              </TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead className="text-right">
                                Amount
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {categoryList?.map((category, i) => (
                              <TableRow
                                key={category.id + "-" + i}
                                onClick={() => handleAddTag(category, index)}
                              >
                                <TableCell className="text-nowrap font-medium">
                                  {category.category}
                                </TableCell>
                                <TableCell className="text-nowrap">
                                  {category.name}
                                </TableCell>
                                <TableCell className="text-nowrap text-right">
                                  {category.value}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </PopoverContent>
                    </Popover>
                  </span>
                )}
              </React.Fragment>
            );
          })}{" "}
        </pre>
      </div>
    );
  },
);
Editable.displayName = "Editable";

export { Editable };
