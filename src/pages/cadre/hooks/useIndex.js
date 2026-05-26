import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useGetCadres } from '../../../hooks/useCadre';
import { createBatchOptions, PAGE_LIMIT } from '../constants';

export const useIndex = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [batch, setBatch] = useState('');
  const [status, setStatus] = useState('');
  const { cadres, meta, loading, fetchCadres } = useGetCadres();
  const batchOptions = useMemo(() => createBatchOptions(), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      setSearch(searchInput.trim());
    }, 350);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    fetchCadres({
      page,
      limit: PAGE_LIMIT,
      search: search || undefined,
      batch: batch || undefined,
      status: status || undefined,
    });
  }, [page, search, batch, status, fetchCadres]);

  const handleChangePage = (_event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleChangeBatch = (event) => {
    setPage(1);
    setBatch(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setPage(1);
    setStatus(event.target.value);
  };

  const handleResetFilters = () => {
    setPage(1);
    setSearchInput('');
    setSearch('');
    setBatch('');
    setStatus('');
  };

  return {
    value: {
      batch,
      batchOptions,
      cadres,
      hasActiveFilters: searchInput || batch || status,
      isMobile,
      loading,
      page,
      searchInput,
      status,
      totalData: meta?.total ?? 0,
      totalPage: meta?.total_page ?? 0,
    },
    func: {
      handleChangeBatch,
      handleChangePage,
      handleChangeStatus,
      handleResetFilters,
      setSearchInput,
    },
  };
};
