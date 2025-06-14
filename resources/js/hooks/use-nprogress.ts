import { useEffect } from 'react';
import { useNavigation } from 'react-router';
import NProgress from 'nprogress';

export const useNProgress = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'loading') {
      NProgress.start();
    } else {
      NProgress.done();
    }

    return () => {
      NProgress.done();
    };
  }, [navigation.state]);
}; 
