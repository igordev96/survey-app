import { Cloud } from '@phosphor-icons/react';

export function NotFound() {
  return (
    <main className='grid min-h-page place-items-center'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-9xl font-semibold text-white'>404</h1>
        <h2 className='flex items-center gap-3 text-3xl font-semibold text-white'>
          <Cloud size={40} weight='bold' />
          Page not found
          <Cloud size={40} weight='bold' />
        </h2>
      </div>
    </main>
  );
}
