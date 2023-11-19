import { useMutation, useQueryClient } from 'react-query';
import { blissApi } from '../services/BlissAPI.service';
import { IQuestion } from '../interfaces/Question.interface';

export function useVote() {
  const queryClient = useQueryClient();

  return useMutation(
    (questionUpdated: IQuestion) => {
      return blissApi.updateQuestion(questionUpdated);
    },
    {
      onSuccess: (_, variables) => {
        queryClient.refetchQueries({
          queryKey: ['Question', variables.id.toString()],
          exact: true,
        });
      },
    },
  );
}
