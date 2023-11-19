import { MagnifyingGlass, ShareFat, X } from '@phosphor-icons/react';
import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'> & {
  containerClassName?: string;
  handleDismiss?: () => void;
  isShare?: boolean;
  handleShare?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    containerClassName = '',
    className = '',
    type = 'text',
    handleDismiss,
    isShare = false,
    handleShare,
    ...rest
  } = props;

  return (
    <div
      className={`flex w-fit items-center gap-2 rounded ${
        isShare ? 'bg-slate-600 text-white' : 'bg-gray-500'
      } px-2 py-1 ${containerClassName}`}
    >
      {!isShare && <MagnifyingGlass size={24} />}
      <input
        className={`bg-transparent outline-none placeholder:text-gray-300 ${className}`}
        type={isShare ? 'email' : type}
        ref={ref}
        {...rest}
      />
      {!isShare ? (
        <X
          onClick={handleDismiss}
          className='cursor-pointer transition-colors hover:text-black'
          size={24}
        />
      ) : (
        <ShareFat
          onClick={handleShare}
          className='cursor-pointer text-white transition-colors hover:text-amber-500'
          size={24}
        />
      )}
    </div>
  );
});
