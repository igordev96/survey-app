import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  subTitle?: string | number;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary';
};

const buttonStyles = {
  primary: 'bg-black hover:bg-gray-900',
  secondary: 'bg-blue-500 hover:bg-blue-800',
  tertiary: 'bg-gray-500 hover:bg-amber-600',
};

export function Button(props: ButtonProps) {
  const {
    title,
    className,
    buttonStyle = 'primary',
    subTitle,
    ...rest
  } = props;

  const buttonClass = buttonStyles[buttonStyle];

  return (
    <button
      className={`flex flex-col items-center gap-1 rounded px-5 py-2 text-sm font-semibold text-white transition-colors ${buttonClass} ${className}`}
      {...rest}
    >
      <span>{title}</span>
      {!!subTitle && (
        <span className='text-xs font-normal text-black'>{subTitle}</span>
      )}
    </button>
  );
}
