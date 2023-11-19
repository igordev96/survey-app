import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  buttonStyle?: 'primary' | 'secondary';
};

const buttonStyles = {
  primary: 'bg-black hover:bg-gray-900',
  secondary: 'bg-blue-500 hover:bg-blue-800',
};

export function Button(props: ButtonProps) {
  const { title, className, buttonStyle = 'primary', ...rest } = props;

  const buttonClass = buttonStyles[buttonStyle];

  return (
    <button
      className={`rounded px-5 py-2 text-sm font-semibold text-white transition-colors ${buttonClass} ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
}
