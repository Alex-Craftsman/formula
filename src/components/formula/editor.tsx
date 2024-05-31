"use client";

import { CornerDownLeft, Mic, Paperclip } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Editable } from "~/components/formula/editable";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useState } from "react";
import type { Position } from "use-editable";
import { useCalculatedFormula } from "~/store/category";

import { evaluate } from "mathjs";

export default function Editor() {
  const { addFormula } = useCalculatedFormula();

  const [code, setCode] = useState<string>("3+5*2-(¦1‡name 1‡10¦+8/4)^2");

  const handleChangeValue = (value: string, _position?: Position) => {
    setCode(value);
  };

  return (
    <form
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      x-chunk="dashboard-03-chunk-1"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (code) {
          // replace tags with values
          const replacedCode = code
            .replace(/¦([^¦‡]+)‡([^¦‡]+)‡([^¦‡]+)¦/g, (_, __, ___, value) => {
              if (typeof value === "string") {
                return " " + value + " ";
              }

              return "";
            })
            .trim()
            .replaceAll("  ", " ")
            .replaceAll("\n", "")
            .replaceAll("\r", "");

          try {
            const result: unknown = evaluate(replacedCode);

            if(typeof result !== "number") {
              throw new Error("Invalid formula");
            }
            
            if (isNaN(result) || !isFinite(result)) {
              throw new Error("Invalid formula");
            }

            addFormula(code, result);
          } catch (error) {
            addFormula(code, null);
          }
        }
      }}
    >
      <Label htmlFor="message" className="sr-only">
        Formula
      </Label>
      <Editable
        id="message"
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        value={code}
        handleValueChange={handleChangeValue}
      />
      <div className="flex items-center p-3 pt-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" type="button" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Attach File</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" type="button" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Use Microphone</TooltipContent>
        </Tooltip>
        <Button type="submit" size="sm" className="ml-auto gap-1.5">
          Calculate
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
