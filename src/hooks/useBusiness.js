import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { getBusinesses } from '../services/businessService';

export const useGetBusinesses = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [businesses, setBusinesses] = useState([]);
  const [meta, setMeta] = useState();
  const [loading, setLoading] = useState(true);

  const fetchBusinesses = async ({ page, limit, search } = {}) => {
    try {
      setLoading(true);
      const result = await getBusinesses({
        page,
        limit,
        search,
      });
      setBusinesses(result.data);
      setMeta(result.meta);
      setLoading(false);
    } catch (error) {
      const message = error?.message ?? 'Gagal mengambil data';
      enqueueSnackbar(message, { variant: 'error' });
    }
  };

  return {
    businesses,
    meta,
    loading,
    fetchBusinesses,
  };
};
