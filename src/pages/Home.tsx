import { LoadingScreen } from './LoadingScreen';

const isLoading = true;

export function Home() {
  return (
    <>
      {!isLoading ? (
        <main>
          <h1>Home</h1>
          <h2>Hello, World!</h2>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
