import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heartbeat } from '@phosphor-icons/react';
import { useGetHealthStatus } from '../hooks/useGetHealthStatus';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';

export function Home() {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetHealthStatus();

  const handleTryAgain = () => {
    refetch();
  };

  useEffect(() => {
    if (data?.status === 'OK') {
      navigate('/questions');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main className='mx-auto w-fit'>
      <div className='flex w-fit items-center gap-3 text-2xl'>
        <p>{isLoading ? 'Checking the server health' : 'Server health'}</p>
        <Heartbeat
          className='animate-pulse text-red-600'
          weight='bold'
          size={36}
        />
      </div>
      {isLoading ? (
        <Loading className='mx-auto mt-14 w-fit' />
      ) : (
        <div className='mt-14'>
          <p>Server is not available</p>
          <Button title='Try again' onClick={handleTryAgain} />
        </div>
      )}
    </main>
  );
}
