import { ChangeEvent, useRef } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useFilterParams } from '../hooks/useFilterParams';
import { useGetQuestions } from '../hooks/useGetQuestions';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';
import { QuestionCard } from '../components/QuestionCard';
import { ShareDialog } from '../components/ShareDialog';

export function QuestionsList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { filterParams, handleFilterParams, handleClearParams } =
    useFilterParams(inputRef);
  const debouncedFilter = useDebounce(filterParams);
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useGetQuestions(debouncedFilter);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilterParams(e.currentTarget.value);
  };

  if (isLoading) {
    return <Loading />;
  }
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
      <div className='mt-12 grid auto-rows-auto gap-10  min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data?.pages?.map((page) =>
          page.map((question) => (
            <QuestionCard key={question.id} {...question} />
          )),
        )}
      </div>
      <Button
        onClick={handleLoadMore}
        disabled={!hasNextPage}
        className='mt-16'
        title='Load more'
      />
    </main>
  );
}
