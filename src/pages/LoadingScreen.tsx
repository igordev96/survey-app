import { Heartbeat } from '@phosphor-icons/react';
import { Loading } from '../components/Loading';
import { Button } from '../components/Button';

const mockIsLoading = false;

export function LoadingScreen() {
  return (
    <main className='mx-auto w-fit'>
      <div className='flex w-fit items-center gap-3 text-2xl'>
        <p>{mockIsLoading ? 'Checking the server health' : 'Server health'}</p>
        <Heartbeat className='animate-pulse text-red-600' weight='bold' size={36} />
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
