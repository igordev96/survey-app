import { Question } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='mx-auto max-w-[1280px] border-b border-b-slate-700 px-12 py-4'>
      <Link
        to='/home'
        className='flex select-none items-center gap-1 font-semibold text-amber-400'
      >
        <p className='text-xl'>Survey App</p>
        <Question size={24} />
      </Link>
    </header>
  );
}
