import { useEffect, useRef, useState } from 'react';

/** 스크롤 방향을 감지하는 훅 */
const useScrollDirection = () => {
  const [direction, setDirection] = useState('');
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setDirection('down');
      } else if (currentScrollY < prevScrollY.current) {
        setDirection('up');
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return direction;
};

export default useScrollDirection;
