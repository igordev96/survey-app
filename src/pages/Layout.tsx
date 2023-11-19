import { Header } from '../components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useOnline } from '../hooks/useOnline';
import { useEffect } from 'react';

export function Layout() {
  const { isOnline } = useOnline();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOnline) {
      navigate('/no-internet');
    } else {
      navigate('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  return (
    <div className='mx-auto max-w-[1280px] text-white'>
      <Header />
      <div className='min-h-page px-8 py-10'>
        <Outlet />
      </div>
    </div>
  );
}
