import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { PAGE_LIMIT } from '../constants';
import StatusChip from './StatusChip';

export default function CadreTable({ cadres = [], loading = false, page = 1 }) {
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

const tableHeadSx = {
  fontWeight: 700,
  color: '#454F5B',
  py: 1.5,
};

const tableCellSx = {
  py: 1.5,
  color: '#212B36',
};
