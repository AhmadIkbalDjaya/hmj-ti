import patternTop from '../../../assets/patternTop.png';
import patternBottom from '../../../assets/patternBottom.png';
import { Box, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      bgcolor="primary.main"
      height={375}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      position="relative"
    >
      <Box
        component="img"
        src={patternTop}
        position="absolute"
        left={{ xs: -200, md: -100 }}
        top={0}
        height="100%"
      />
      <Box
        component="img"
        src={patternBottom}
        position="absolute"
        right={{ xs: -200, md: -100 }}
        bottom={0}
        height="100%"
      />
      <Typography
        position="absolute"
        color="#fff"
        fontWeight={600}
        fontSize={{ xs: '2rem', md: '3rem' }}
      >
        Berita & Kegiatan
      </Typography>
    </Box>
  );
}
