import { useEffect } from 'react';
import { useGetAbout } from '../../../hooks/useAbout';

export const useIndex = () => {
  const { about, loading, fetchAbout } = useGetAbout();

  useEffect(() => {
    fetchAbout();
  }, []);

  return {
    value: { data: about, loading },
  };
};
