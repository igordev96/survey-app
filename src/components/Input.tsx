import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'> & {
  containerClassName?: string;
  handleDismiss?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    containerClassName = '',
    className = '',
    type = 'text',
    handleDismiss,
    ...rest
  } = props;

  return (
    <div
      className={`flex w-fit items-center gap-2 rounded bg-gray-500 px-2 py-1 ${containerClassName}`}
    >
      <MagnifyingGlass size={24} />
      <input
        className={`bg-transparent outline-none placeholder:text-gray-300 ${className}`}
        type={type}
        ref={ref}
        {...rest}
      />
      <X
        onClick={handleDismiss}
        className='cursor-pointer transition-colors hover:text-black'
        size={24}
      />
    </div>
  );
});
