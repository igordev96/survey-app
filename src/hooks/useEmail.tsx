import { useMutation } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';

export function useEmail() {
  return useMutation((shareItem: { email: string; url: string }) => {
    return blissApi.sendEmail(shareItem.email, shareItem.url);
  });
}
