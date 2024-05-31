"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useGetCategoryList } from "~/hook/category/useGetCategoryList";
import { useCategoryOverrideValue, useSearchQuery } from "~/store/category";
export default function CategoryHeaderList() {
  const { query } = useSearchQuery();

  const { data: categoryList } = useGetCategoryList(query);

  const { values, addValue } = useCategoryOverrideValue();

  const handleValueChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      addValue(key, e.target.value ?? null);
    };

  return (
    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
      {categoryList?.map((category, i) => (
        <fieldset
          key={category.id + "-" + i}
          className="grid gap-6 rounded-lg border p-4"
        >
          <legend className="-ml-1 px-1 text-sm font-medium">
            {category.category}
          </legend>
          <div className="grid gap-3">
            <Label htmlFor={`category-${category.id + "-" + i}`}>
              {category.name}
            </Label>
            <Input
              id={`category-${category.id + "-" + i}`}
              // type="number"
              placeholder="1"
              value={values[category.id] ?? category.value}
              onChange={handleValueChange(category.id)}
            />
          </div>
        </fieldset>
      ))}
    </form>
  );
}
