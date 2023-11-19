import { useQuery } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';

export function useGetQuestions(filterParams?: string) {
  return useQuery(
    ['Questions', filterParams],
    () => blissApi.getQuestions(filterParams),
    {
      refetchOnWindowFocus: false,
    },
  );
}
