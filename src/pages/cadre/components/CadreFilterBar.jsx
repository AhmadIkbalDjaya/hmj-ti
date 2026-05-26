import {
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { STATUS_OPTIONS } from '../constants';

export default function CadreFilterBar({
  batch = '',
  batchOptions = [],
  hasActiveFilters = false,
  onChangeBatch = () => {},
  onChangeSearch = () => {},
  onChangeStatus = () => {},
  onResetFilters = () => {},
  searchInput = '',
  status = '',
}) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={1.5}
      alignItems={{ xs: 'stretch', md: 'center' }}
    >
      <TextField
        size="small"
        value={searchInput}
        onChange={(event) => onChangeSearch(event.target.value)}
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
            onChange={onChangeBatch}
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
            onChange={onChangeStatus}
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
              onClick={onResetFilters}
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
  );
}
