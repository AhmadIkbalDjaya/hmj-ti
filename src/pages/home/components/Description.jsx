import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import logo from '../../../assets/logo.svg';

export default function Description() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ xs: 0, md: '72px' }}
      pt={{ xs: '72px' }}
      gap={8}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box component="img" width="27.5%" pl={{ xs: 0, md: 13.5 }} src={logo} />
      <Box width={{ md: '50%' }} px={{ xs: 4 }} textAlign="justify">
        <Typography
          color="primary.main"
          fontSize={{ xs: 18, md: 30 }}
          pt={{ xs: 0 }}
          width="75%"
          textAlign={{ xs: 'left' }}
          fontWeight={700}
        >
          Himpunan Mahasiswa Jurusan Teknik Informatika
        </Typography>
        <Typography
          fontWeight={500}
          pt={5}
          sx={{
            textIndent: 36,
            WebkitLineClamp: '3',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          color="text.main"
        >
          Himpunan Mahasiswa Jurusan Teknik Informatika (HMJ-TI) adalah organisasi yang mewakili
          mahasiswa yang belajar di jurusan Teknik Informatika di Universitas Islam Negeri Alauddin
          Makassar. HMJ-TI bertujuan untuk mempererat hubungan antara mahasiswa, memfasilitasi
          kegiatan akademik dan
        </Typography>
        <NavLink to="/tentang" style={{ textDecoration: 'none' }}>
          <Typography mt={1} fontWeight={600} color="primary.main">
            Lihat Selengkapnya
          </Typography>
        </NavLink>
      </Box>
    </Box>
  );
}
