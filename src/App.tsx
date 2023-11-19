import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { QuestionsList } from './pages/QuestionsList';
import { Layout } from './pages/Layout';
import { NoInternet } from './pages/NoInternet';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '/home', Component: Home },
      { path: '/questions', Component: QuestionsList },
      { path: '/questions/:id', Component: Details },
    ],
  },
  { path: '/no-internet', Component: NoInternet },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}
