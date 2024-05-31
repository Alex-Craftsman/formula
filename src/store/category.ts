import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Nullable } from '~/type/util.type'

export const useSearchQuery = create<{
  query: Nullable<string>
  setQuery: (query: Nullable<string>) => void
}>()((set) => ({
  query: null,
  setQuery: (query: Nullable<string>) => set(() => ({ query })),
}))

export const useCategoryOverrideValue = create<{
  values: Record<string, Nullable<string>>
  addValue: (key: string, value: string) => void
  removeValue: (key: string) => void
}>()(
  persist(
    (set, get) => ({
      values: {},
      addValue: (key: string, value: string) => set({
        values: {
          ...get().values,
          [key]: value,
        }
      }),
      removeValue: (key: string) => set({
        values: {
          ...get().values,
          [key]: null,
        }
      }),
    }),
    {
      name: 'category-value', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export const useCalculatedFormula = create<{
  formula: {
    code: string;
    result: Nullable<number>;
  }[]
  addFormula: (formula: string, result: Nullable<number>) => void
}>()((set) => ({
  formula: [],
  addFormula: (code: string, result: Nullable<number>) => set(
    (state) => (
      {
        formula: [
          { code, result },
          ...state.formula,
        ]
      }
    )),
}))
