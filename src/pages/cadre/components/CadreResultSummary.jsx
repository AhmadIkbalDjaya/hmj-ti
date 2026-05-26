import { Stack, Typography } from '@mui/material';

export default function CadreResultSummary({
  loading = false,
  page = 1,
  totalData = 0,
  totalPage = 0,
}) {
  return (
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
  );
}
