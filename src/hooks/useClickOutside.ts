import { useEffect } from 'react';

/** 설정한 컴포넌트 이외의 영역을 클릭할 경우 handler에 등록된 동작을 수행하는 훅  */
const useOnClickOutside = <T extends HTMLElement | null>(ref:React.RefObject<T | null>, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement) && event.button === 0) {
        handler();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, handler]);

  return ref;
};

export default useOnClickOutside;
