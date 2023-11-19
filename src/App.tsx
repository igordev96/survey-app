import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Details } from './pages/Details';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { QuestionsList } from './pages/QuestionsList';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/questions', Component: QuestionsList },
  { path: '/questions/:id', Component: Details },
]);

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
