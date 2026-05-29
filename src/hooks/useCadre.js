import { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { getCadres } from '../services/cadreService';

export const useGetCadres = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [cadres, setCadres] = useState([]);
  const [meta, setMeta] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCadres = useCallback(
    async ({ page, limit, search, batch, status } = {}) => {
      try {
        setLoading(true);
        const result = await getCadres({
          page,
          limit,
          search,
          batch,
          status,
        });

        setCadres(result?.data ?? []);
        setMeta(result?.meta);
        setLoading(false);
      } catch (error) {
        setCadres([]);
        setMeta();
        const message = error?.message ?? 'Gagal mengambil data';
        enqueueSnackbar(message, { variant: 'error' });
      }
    },
    [enqueueSnackbar],
  );

  return {
    cadres,
    meta,
    loading,
    fetchCadres,
  };
};
