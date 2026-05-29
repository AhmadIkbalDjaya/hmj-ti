import { useState } from 'react';
import { useSnackbar } from 'notistack';
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
  const { enqueueSnackbar } = useSnackbar();
  const [about, setAbout] = useState(defaultAbout);
  const [loading, setLoading] = useState(true);

  const fetchAbout = async () => {
    try {
      setLoading(true);
      const response = await getAbout();
      setAbout(normalizeAbout(response?.data));
      setLoading(false);
    } catch (error) {
      const message = error?.message ?? 'Gagal mengambil data';
      enqueueSnackbar(message, { variant: 'error' });
    }
  };

  return { about, loading, fetchAbout };
};
