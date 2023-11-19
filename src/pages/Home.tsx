import { Heartbeat } from '@phosphor-icons/react';
import { Loading } from '../components/Loading';
import { Button } from '../components/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const mockIsLoading = false;
const mockIsHealthy = true;

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (mockIsHealthy) {
      navigate('/questions');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='mx-auto w-fit'>
      <div className='flex w-fit items-center gap-3 text-2xl'>
        <p>{mockIsLoading ? 'Checking the server health' : 'Server health'}</p>
        <Heartbeat
          className='animate-pulse text-red-600'
          weight='bold'
          size={36}
        />
      </div>
      {mockIsLoading ? (
        <Loading className='mx-auto mt-14 w-fit' />
      ) : (
        <div className='mt-14'>
          <p>Server is not available</p>
          <Button title='Try again' />
        </div>
      )}
    </main>
  );
}
