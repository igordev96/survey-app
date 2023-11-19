import { MagnifyingGlass } from '@phosphor-icons/react';
import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'> & {
  containerClassName?: string;
  handleClickMagnifyingGlass?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    containerClassName = '',
    className = '',
    handleClickMagnifyingGlass,
    type = 'text',
    ...rest
  } = props;

  return (
    <div
      className={`relative w-fit rounded bg-gray-500 py-1 ${containerClassName}`}
    >
      <input
        className={`ml-2 mr-10 bg-transparent outline-none placeholder:text-gray-300 ${className}`}
        type={type}
        ref={ref}
        {...rest}
      />
      <MagnifyingGlass
        onClick={handleClickMagnifyingGlass}
        className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'
        size={24}
      />
    </div>
  );
});
