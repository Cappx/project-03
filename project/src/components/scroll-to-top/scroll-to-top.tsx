import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    let i = 1500;
    const int = setInterval(() => {
      window.scrollTo(0, i);
      i -= 150;
      if (i < 0) {clearInterval(int);}
    }, 1);
  }, [pathname]);

  return null;
};
