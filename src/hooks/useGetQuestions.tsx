import { useInfiniteQuery } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';

export function useGetQuestions(filterParams?: string) {
  return useInfiniteQuery(
    ['Questions', filterParams],
    ({ pageParam = 0 }) => blissApi.getQuestions(filterParams, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        // Since the api returns always 10 items, this will work
        // infinitely, but it would work fine in a functional API
        // To stop it, put lastPage.length <= 10
        if (lastPage.length < 10) {
          return undefined;
        }
        return allPages.length * 10;
      },
      refetchOnWindowFocus: false,
    },
  );
}
