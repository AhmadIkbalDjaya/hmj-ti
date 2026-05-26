import { Chip } from '@mui/material';
import { getStatusOption } from '../constants';

export default function StatusChip({ status }) {
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
