import { ChangeEvent, useRef } from 'react';
import { useFilterParams } from '../hooks/useFilterParams';
import { useGetQuestions } from '../hooks/useGetQuestions';
import { Input } from '../components/Input';
import { QuestionCard } from '../components/QuestionCard';
import { ShareDialog } from '../components/ShareDialog';
import { useDebounce } from '../hooks/useDebounce';

export function QuestionsList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { filterParams, handleFilterParams, handleClearParams } =
    useFilterParams(inputRef);
  const debouncedFilter = useDebounce(filterParams);
  const { data: questions } = useGetQuestions(debouncedFilter);

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
        {questions?.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
    </main>
  );
}
