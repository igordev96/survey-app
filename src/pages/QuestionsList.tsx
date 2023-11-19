import { ChangeEvent, useRef } from 'react';
import { Input } from '../components/Input';
import { QuestionCard } from '../components/QuestionCard';
import { useFilterParams } from '../hooks/useFilterParams';
import { mockData } from '../utils/data';
import { ShareDialog } from '../components/ShareDialog';

export function QuestionsList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { filterParams, handleFilterParams, handleClearParams } =
    useFilterParams(inputRef);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilterParams(e.currentTarget.value);
  };

  return (
    <main>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Questions List</h1>
        <ShareDialog />
      </div>
      <Input
        containerClassName='mt-4 w-full sm:w-fit'
        className='w-full sm:w-fit'
        placeholder='Search'
        value={filterParams}
        onChange={handleOnChange}
        handleDismiss={handleClearParams}
        ref={inputRef}
      />
      <div className='mt-12 flex flex-wrap items-center gap-10'>
        {mockData.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
    </main>
  );
}
