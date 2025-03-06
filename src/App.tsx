import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import images from 'utils/js/images';
import { useLayoutEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const preloadImages = (imageUrls: string | any[]) => {
    for (let i = 0; i < imageUrls.length; i += 1) {
      const image = new Image();
      image.src = imageUrls[i];
    }
  };
  useLayoutEffect(() => {
    preloadImages(images);
  }, []);

  return (
    <>
    <Analytics />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
