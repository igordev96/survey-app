import { useQuery } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';

export function useGetHealthStatus() {
  return useQuery('HealthStatus', () => blissApi.getHealthStatus());
}
