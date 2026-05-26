import { Box, Grid, Skeleton, Stack, Typography } from '@mui/material';
import StatusChip from './StatusChip';

export default function CadreMobileList({ cadres = [], loading = false }) {
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
