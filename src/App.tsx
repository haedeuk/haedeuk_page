import { useLayoutEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from '@/Layout/DefaultLayout';
import Cost from '@/pages/Cost';
import Home from '@/pages/Home';
import images from '@/utils/ts/images';

const route = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cost',
        element: <Cost />,
      },
    ],
  },
]);

function App() {
  const preloadImages = (imageUrls: string[]) => {
    for (let i = 0; i < imageUrls.length; i += 1) {
      const image = new Image();
      image.src = imageUrls[i];
    }
  };

  useLayoutEffect(() => {
    preloadImages(images);
  }, []);

  return <RouterProvider router={route} />;
}

export default App;
