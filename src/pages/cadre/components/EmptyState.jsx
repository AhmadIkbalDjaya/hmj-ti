import { Box, Typography } from '@mui/material';

export default function EmptyState() {
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
