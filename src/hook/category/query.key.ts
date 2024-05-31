import type { Nullable } from "~/type/util.type";

export const categoryKeys = {
  all: ['category'] as const,
  listAll: () => [...categoryKeys.all, 'list'] as const,
  list: (query: Nullable<string>) => [...categoryKeys.listAll(), query] as const,
};
