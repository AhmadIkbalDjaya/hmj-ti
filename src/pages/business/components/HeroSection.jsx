import { Box, Typography } from '@mui/material';
import patternTop from '../../../assets/patternTop.png';
import patternBottom from '../../../assets/patternBottom.png';

export default function HeroSection() {
  return (
    <Box
      bgcolor="primary.main"
      height={372.5}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
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
      <Box ml={0} color="#fff" textAlign="center">
        <Typography
          fontWeight={600}
          fontSize={{ xs: '2rem', md: '2rem' }}
          zIndex={9}
          position="relative"
        >
          Ekonomi Kreatif
        </Typography>
        <Typography fontSize="1rem" fontWeight={300}>
          Ekonomi kreatif, peluang tanpa batas.
        </Typography>
      </Box>
    </Box>
  );
}
