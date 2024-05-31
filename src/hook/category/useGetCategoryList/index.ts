import axios, { type AxiosResponse } from 'axios';

import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query';

import { categoryKeys } from '../query.key';

import type { Nullable } from '~/type/util.type';
import type { CategoryList } from '~/type/category.type';

const callGetCategoryList = async (query: Nullable<string>): Promise<CategoryList> => {
  return axios.get<CategoryList, AxiosResponse<CategoryList>>('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete?search=' + (query ?? ''), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(r => r?.data ?? []).catch(() => []);
};

const useGetCategoryList = (
  query: Nullable<string>,
  options?: Omit<
    UseQueryOptions<CategoryList, unknown, CategoryList>,
    'queryKey' | 'queryFn'
  >,
): UseQueryResult<CategoryList, unknown> => {
  return useQuery<CategoryList, unknown, CategoryList>({
    queryKey: categoryKeys.list(query),
    queryFn: () => callGetCategoryList(query),
    ...options,
  });
};

export { useGetCategoryList };
