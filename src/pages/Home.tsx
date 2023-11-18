import { Loading } from '../components/Loading';
import { useOnline } from '../hooks/useOnline';

export function Home() {
  const { isOnline } = useOnline();

  console.log(isOnline);

  return (
    <main className='min-h-screen bg-slate-800 text-white'>
      <h1>Home</h1>
      <h2>Hello, World!</h2>
      <Loading />
    </main>
  );
}
