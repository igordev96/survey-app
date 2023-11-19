import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../components/Button';
import { ShareDialog } from '../components/ShareDialog';
import { useGetQuestion } from '../hooks/useGetQuestion';
import { useVote } from '../hooks/useVote';
import { Loading } from '../components/Loading';

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question, isError, isLoading } = useGetQuestion(id);
  const { mutate, isSuccess, isError: IsVoteNotSent } = useVote();

  const handleVote = async (vote: string) => {
    const newChoices = question!.choices.map((choice) => {
      if (choice.choice === vote) {
        return {
          ...choice,
          votes: choice.votes + 1,
        };
      }
      return choice;
    });
    const newData = {
      ...question!,
      choices: newChoices,
      id: +id!,
    };

    await mutate(newData);
  };

  const handleBackToList = () => {
    navigate('/questions');
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Vote sent successfully!', {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
    if (IsVoteNotSent) {
      toast.error('Vote was not sent, try again later!', {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
  }, [isSuccess, IsVoteNotSent]);

  if (isLoading) {
    return <Loading />;
  }
  if (!question || isError) {
    return (
      <p className='animate-bounce text-4xl font-semibold text-red-500'>
        This question does not exist!
      </p>
    );
  }
  return (
    <main>
      <div className='mb-4 flex flex-wrap items-center justify-center gap-3 sm:justify-between'>
        <Button
          onClick={handleBackToList}
          className='w-full sm:w-fit'
          title='Back to list'
        />
        <ShareDialog className='w-full sm:w-fit' />
      </div>
      <h1 className='mb-4 text-center text-2xl text-amber-400'>
        {question.question}
      </h1>
      <div className='-mx-8 h-80 overflow-hidden rounded-md sm:mx-auto sm:w-fit'>
        <img
          className='h-full w-full object-cover'
          src={question.image_url}
          alt=''
        />
      </div>
      <div className='mx-auto mt-8 grid max-w-[480px] grid-cols-2 grid-rows-2 gap-4'>
        {question.choices.map((choice) => (
          <Button
            key={choice.choice}
            title={choice.choice}
            subTitle={choice.votes}
            onClick={async () => {
              await handleVote(choice.choice);
            }}
            buttonStyle='tertiary'
          />
        ))}
      </div>
    </main>
  );
}
