import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';

const queryClient = new QueryClient();

const router = createBrowserRouter([{ path: '/', Component: Home }]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='mx-auto max-w-[1280px] text-white'>
        <Header />
        <div className='min-h-page px-8 py-10'>
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  );
}
