import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Chip,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Pagination,
  Select,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import patternTop from '../../assets/patternTop.png';
import patternBottom from '../../assets/patternBottom.png';
import { HeadTags } from '../../components/HeadTags';
import { useGetCadres } from '../../hooks/useCadre';

const PAGE_LIMIT = 10;
const START_BATCH_YEAR = 2020;

const STATUS_OPTIONS = [
  { value: 'active', label: 'Aktif', color: '#11845B', background: '#DFF9EC' },
  {
    value: 'inactive',
    label: 'Tidak Aktif',
    color: '#637381',
    background: '#F4F6F8',
  },
  {
    value: 'transferred',
    label: 'Pindah',
    color: '#B76E00',
    background: '#FFF1D6',
  },
  {
    value: 'graduated',
    label: 'Lulus',
    color: '#375DFB',
    background: '#DBE7FF',
  },
];

const getStatusOption = (status) =>
  STATUS_OPTIONS.find((item) => item.value === status) ?? {
    value: status,
    label: status || '-',
    color: '#454F5B',
    background: '#F4F6F8',
  };

const createBatchOptions = () => {
  const currentYear = new Date().getFullYear();
  const optionCount = Math.max(currentYear - START_BATCH_YEAR + 1, 1);

  return Array.from({ length: optionCount }, (_, index) =>
    String(currentYear - index),
  );
};

export default function CadrePage() {
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

  const hasActiveFilters = searchInput || batch || status;
  const totalData = meta?.total ?? 0;
  const totalPage = meta?.total_page ?? 0;

  return (
    <>
      <HeadTags title="Database Kader" />
      <CadreHero />
      <Box bgcolor="#F9FAFB" minHeight="70vh">
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
          <Stack spacing={2.5}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              alignItems={{ xs: 'stretch', md: 'center' }}
            >
              <TextField
                size="small"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Cari nama kader"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
                inputProps={{ 'aria-label': 'Cari nama kader' }}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: '#fff',
                  },
                }}
              />
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                alignItems={{ xs: 'stretch', sm: 'center' }}
              >
                <FormControl size="small" sx={{ minWidth: { sm: 150 } }}>
                  <Select
                    value={batch}
                    onChange={handleChangeBatch}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filter angkatan' }}
                    sx={{ bgcolor: '#fff' }}
                  >
                    <MenuItem value="">Angkatan</MenuItem>
                    {batchOptions.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: { sm: 150 } }}>
                  <Select
                    value={status}
                    onChange={handleChangeStatus}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filter status' }}
                    sx={{ bgcolor: '#fff' }}
                  >
                    <MenuItem value="">Status</MenuItem>
                    {STATUS_OPTIONS.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Tooltip title="Reset filter">
                  <span>
                    <IconButton
                      aria-label="Reset filter"
                      onClick={handleResetFilters}
                      disabled={!hasActiveFilters}
                      sx={{
                        width: { xs: '100%', sm: 40 },
                        height: 40,
                        border: '1px solid #C4CDD5',
                        borderRadius: '4px',
                        bgcolor: '#fff',
                      }}
                    >
                      <RestartAltIcon fontSize="small" />
                    </IconButton>
                  </span>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={1}
            >
              <Typography fontSize={14} color="text.secondary">
                {loading ? 'Memuat data kader...' : `${totalData} kader`}
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                Halaman {totalPage === 0 ? 0 : page} dari {totalPage}
              </Typography>
            </Stack>

            {isMobile ? (
              <CadreMobileList cadres={cadres} loading={loading} />
            ) : (
              <CadreTable cadres={cadres} loading={loading} page={page} />
            )}

            {!loading && totalData === 0 && <EmptyState />}

            {totalPage > 1 && (
              <Box display="flex" justifyContent="center" pt={1}>
                <Pagination
                  count={totalPage}
                  page={page}
                  color="primary"
                  onChange={handleChangePage}
                />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

function CadreHero() {
  return (
    <Box
      bgcolor="primary.main"
      height={{ xs: 280, md: 340 }}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      position="relative"
      overflow="hidden"
    >
      <Box
        component="img"
        src={patternTop}
        position="absolute"
        left={{ xs: -230, md: -120 }}
        top={0}
        height="100%"
        alt=""
      />
      <Box
        component="img"
        src={patternBottom}
        position="absolute"
        right={{ xs: -230, md: -120 }}
        bottom={0}
        height="100%"
        alt=""
      />
      <Typography
        position="relative"
        color="#fff"
        fontWeight={700}
        fontSize={{ xs: '2rem', md: '3rem' }}
      >
        Database Kader
      </Typography>
    </Box>
  );
}

function CadreTable({ cadres = [], loading = false, page = 1 }) {
  return (
    <TableContainer
      sx={{
        border: '1px solid #DFE3E8',
        borderRadius: '8px',
        bgcolor: '#fff',
        overflowX: 'auto',
      }}
    >
      <Table sx={{ minWidth: 720, tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow sx={{ bgcolor: '#F4F6F8' }}>
            <TableCell width={76} align="center" sx={tableHeadSx}>
              No
            </TableCell>
            <TableCell sx={tableHeadSx}>Nama Kader</TableCell>
            <TableCell width={150} sx={tableHeadSx}>
              Angkatan
            </TableCell>
            <TableCell width={170} sx={tableHeadSx}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? Array.from({ length: PAGE_LIMIT }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    <Skeleton width={24} sx={{ mx: 'auto' }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width="70%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={64} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={92} height={30} />
                  </TableCell>
                </TableRow>
              ))
            : cadres.map((cadre, index) => (
                <TableRow key={cadre.id} hover>
                  <TableCell align="center" sx={tableCellSx}>
                    {(page - 1) * PAGE_LIMIT + index + 1}
                  </TableCell>
                  <TableCell sx={tableCellSx}>
                    <Typography
                      fontWeight={600}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      {cadre.name}
                    </Typography>
                  </TableCell>
                  <TableCell sx={tableCellSx}>{cadre.batch}</TableCell>
                  <TableCell sx={tableCellSx}>
                    <StatusChip status={cadre.status} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CadreMobileList({ cadres = [], loading = false }) {
  if (loading) {
    return (
      <Stack spacing={1.5}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #DFE3E8',
              borderRadius: '8px',
              bgcolor: '#fff',
              p: 2,
            }}
          >
            <Skeleton width="72%" />
            <Skeleton width="40%" />
            <Skeleton width={92} height={30} />
          </Box>
        ))}
      </Stack>
    );
  }

  return (
    <Grid container spacing={1.5}>
      {cadres.map((cadre) => (
        <Grid item xs={12} key={cadre.id}>
          <Box
            sx={{
              border: '1px solid #DFE3E8',
              borderRadius: '8px',
              bgcolor: '#fff',
              p: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography fontWeight={700} color="text.main">
                {cadre.name}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Typography fontSize={14} color="text.secondary">
                  Angkatan {cadre.batch}
                </Typography>
                <StatusChip status={cadre.status} />
              </Stack>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

function StatusChip({ status }) {
  const option = getStatusOption(status);

  return (
    <Chip
      label={option.label}
      size="small"
      sx={{
        bgcolor: option.background,
        color: option.color,
        fontWeight: 700,
        borderRadius: '6px',
        minWidth: 82,
      }}
    />
  );
}

function EmptyState() {
  return (
    <Box
      textAlign="center"
      py={7}
      px={2}
      border="1px solid #DFE3E8"
      borderRadius="8px"
      bgcolor="#fff"
    >
      <Typography fontWeight={700} color="text.main">
        Tidak ada kader yang ditemukan
      </Typography>
    </Box>
  );
}

const tableHeadSx = {
  fontWeight: 700,
  color: '#454F5B',
  py: 1.5,
};

const tableCellSx = {
  py: 1.5,
  color: '#212B36',
};
