import { useState } from 'react';
import { getAbout } from '../services/aboutService';

const defaultAbout = {
  goal: '',
  vision: '',
  missions: [],
  main_image: null,
  secondary_image: null,
};

const normalizeAbout = (data) => ({
  goal: data?.goal ?? '',
  vision: data?.vision ?? '',
  missions: data?.missions ?? [],
  main_image: data?.main_image ?? null,
  secondary_image: data?.secondary_image ?? null,
});

export const useGetAbout = () => {
  const [about, setAbout] = useState(defaultAbout);
  const [loading, setLoading] = useState(true);

  const fetchAbout = async () => {
    try {
      setLoading(true);
      const response = await getAbout();
      setAbout(normalizeAbout(response?.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { about, loading, fetchAbout };
};
