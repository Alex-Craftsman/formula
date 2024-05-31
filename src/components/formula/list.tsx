"use client";

import { Label } from "~/components/ui/label";
import { Editable } from "~/components/formula/editable";
import { useCalculatedFormula } from "~/store/category";
import { Badge } from "~/components/ui/badge";

export default function FormulaList() {
  const { formula } = useCalculatedFormula();

  return (
    <div className="flex-col">
      {formula.map(({ code, result }, index) => (
        <form
          key={"formula-" + index}
          className="relative mt-4 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          x-chunk="dashboard-03-chunk-1"
        >
          <Label htmlFor="message" className="sr-only">
            Formula
          </Label>
          <Editable
            id="message"
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            value={code}
            disabled={true}
          />
          <div className="flex items-center p-3 pt-0">
            <Badge
              className="ml-auto gap-1.5"
              variant={result ? 'secondary' : "destructive"}
            >
              {result ? result : "error"}
            </Badge>
          </div>
        </form>
      ))}
    </div>
  );
}
