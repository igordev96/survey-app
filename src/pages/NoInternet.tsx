import { WifiSlash } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useOnline } from '../hooks/useOnline';
import { useNavigate } from 'react-router-dom';

export function NoInternet() {
  const { isOnline } = useOnline();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOnline) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  return (
    <main className='grid min-h-page place-items-center'>
      <div className='flex flex-col items-center gap-3 text-white'>
        <WifiSlash className='animate-bounce' size={144} weight='bold' />
        <h1 className='text-4xl font-semibold'>No internet</h1>
        <div className='mt-2'>
          <p>When the internet is back</p>
          <p>You'll be redirected to the Home page</p>
        </div>
      </div>
    </main>
  );
}
