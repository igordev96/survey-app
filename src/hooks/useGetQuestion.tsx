import { useQuery } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';

export function useGetQuestion(id?: string | number) {
  return useQuery(['Question', id], () => blissApi.getQuestion(id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
}
