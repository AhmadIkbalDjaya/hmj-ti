import { useCallback, useState } from 'react';
import { getCadres } from '../services/cadreService';

export const useGetCadres = () => {
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
      } catch {
        setCadres([]);
        setMeta();
        setLoading(false);
      }
    },
    [],
  );

  return {
    cadres,
    meta,
    loading,
    fetchCadres,
  };
};
