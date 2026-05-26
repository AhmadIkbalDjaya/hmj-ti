import { useCallback, useEffect, useMemo, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useGetCadres } from '../../../hooks/useCadre';
import { createBatchOptions, PAGE_LIMIT, STATUS_OPTIONS } from '../constants';

const isValidStatus = (status) =>
  STATUS_OPTIONS.some((item) => item.value === status);

const parsePage = (page) => {
  const parsedPage = Number.parseInt(page, 10);

  return Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
};

const parseCadreSearchParams = (params) => {
  const status = params.get('status') ?? '';

  return {
    page: parsePage(params.get('page')),
    search: (params.get('search') ?? '').trim(),
    batch: (params.get('batch') ?? '').trim(),
    status: isValidStatus(status) ? status : '',
  };
};

const buildCadreSearchParams = ({ page, search, batch, status }) => {
  const params = new URLSearchParams();
  const normalizedSearch = search.trim();
  const normalizedBatch = batch.trim();

  if (page > 1) {
    params.set('page', String(page));
  }

  if (normalizedSearch) {
    params.set('search', normalizedSearch);
  }

  if (normalizedBatch) {
    params.set('batch', normalizedBatch);
  }

  if (status) {
    params.set('status', status);
  }

  return params;
};

export const useIndex = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamString = searchParams.toString();
  const queryState = useMemo(
    () => parseCadreSearchParams(new URLSearchParams(searchParamString)),
    [searchParamString],
  );
  const { page, search, batch, status } = queryState;
  const [searchInput, setSearchInput] = useState(search);
  const { cadres, meta, loading, fetchCadres } = useGetCadres();
  const batchOptions = useMemo(() => createBatchOptions(), []);

  const updateSearchParams = useCallback(
    (nextState, options = {}) => {
      const nextParams = buildCadreSearchParams({
        page,
        search,
        batch,
        status,
        ...nextState,
      });

      if (nextParams.toString() !== searchParamString) {
        setSearchParams(nextParams, { replace: options.replace ?? false });
      }
    },
    [batch, page, search, searchParamString, setSearchParams, status],
  );

  useEffect(() => {
    const normalizedParams = buildCadreSearchParams(queryState);

    if (normalizedParams.toString() !== searchParamString) {
      setSearchParams(normalizedParams, { replace: true });
    }
  }, [page, search, batch, status, queryState, searchParamString, setSearchParams]);

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSearch = searchInput.trim();

      if (nextSearch !== search) {
        updateSearchParams({ page: 1, search: nextSearch }, { replace: true });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [search, searchInput, updateSearchParams]);

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
    updateSearchParams({ page: value });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleChangeBatch = (event) => {
    updateSearchParams({ page: 1, batch: event.target.value });
  };

  const handleChangeStatus = (event) => {
    updateSearchParams({ page: 1, status: event.target.value });
  };

  const handleResetFilters = () => {
    setSearchInput('');
    setSearchParams(new URLSearchParams());
  };

  return {
    value: {
      batch,
      batchOptions,
      cadres,
      hasActiveFilters: searchInput || batch || status || page !== 1,
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
