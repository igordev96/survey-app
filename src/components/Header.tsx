import { Question } from '@phosphor-icons/react';

export function Header() {
  return (
    <header className='mx-auto max-w-[1280px] border-b border-b-slate-700 px-12 py-4'>
      <div className='flex select-none items-center gap-1 font-semibold text-amber-400'>
        <p className='text-xl'>Survey App</p>
        <Question size={24} />
      </div>
    </header>
  );
}
