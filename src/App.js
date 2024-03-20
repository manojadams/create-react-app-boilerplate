import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';
import ROUTES from './common/routers';

const router = createBrowserRouter(ROUTES, {
  basename: '/'
});

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Loader />} />
  );
}

export default App;
