import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
};

export function Button(props: ButtonProps) {
  const { title, className, ...rest } = props;

  return (
    <button
      className={`rounded bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-gray-900 ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
}
