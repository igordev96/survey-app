import { useInfiniteQuery } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';

export function useGetQuestions(filterParams?: string) {
  return useInfiniteQuery(
    ['Questions', filterParams],
    ({ pageParam = 10 }) => blissApi.getQuestions(filterParams, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        // Since the api returns always 10 items, i'll put less or
        // equal than 10, so the Load more button is disabled
        // without fetching the same data over and over again
        if (lastPage.length <= 10) {
          return undefined;
        }
        return allPages.length * 10;
      },
      refetchOnWindowFocus: false,
    },
  );
}
