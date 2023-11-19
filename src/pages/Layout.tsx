import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useOnline } from '../hooks/useOnline';
import { Header } from '../components/Header';

export function Layout() {
  const navigate = useNavigate();
  const { isOnline } = useOnline();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOnline) {
      navigate('/no-internet');
    } else if (pathname === '/') {
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
