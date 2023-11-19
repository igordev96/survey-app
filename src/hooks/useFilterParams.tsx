import { RefObject, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useFilterParams(ref: RefObject<HTMLInputElement>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams = searchParams.get('filter') ?? '';

  const handleFilterParams = (newFilter: string) => {
    setSearchParams(
      (prev) => {
        prev.set('filter', newFilter);
        return prev;
      },
      {
        replace: true,
      },
    );
  };

  const handleClearParams = () => {
    setSearchParams(undefined, {
      replace: true,
    });
  };

  useEffect(() => {
    if (searchParams.get('filter') === '') {
      ref.current?.focus();
    }
  }, [ref, searchParams]);

  return {
    filterParams,
    handleFilterParams,
    handleClearParams,
  };
}
