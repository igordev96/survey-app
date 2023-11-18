type LoadingProps = {
  size?: number;
  ballSize?: number;
};

export function Loading(props: LoadingProps) {
  const { size = 80, ballSize = 8 } = props;

  return (
    <div
      style={{
        height: size,
        width: size,
      }}
      className='flex animate-spin items-center justify-end bg-transparent'
    >
      <div
        style={{
          height: ballSize,
          width: ballSize,
        }}
        className='rounded-full bg-slate-200'
      />
    </div>
  );
}
