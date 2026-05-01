import { Box, Typography } from '@mui/material';
import patternBottom from '../../../assets/patternBottom.png';
import patternTop from '../../../assets/patternTop.png';

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
        height="100%"
      />
      <Box
        component="img"
        src={patternBottom}
        position="absolute"
        right={{ xs: -200, md: -100 }}
        height="100%"
      />
      <Box>
        <Typography
          // position='absolute'
          color="#fff"
          fontWeight={600}
          fontSize={{ xs: '2rem', md: '3rem' }}
        >
          Tentang HMJ-TI
        </Typography>
        <Typography color="#fff" fontWeight={300}>
          #salamInformatikaJayaInformatika
        </Typography>
      </Box>
    </Box>
  );
}
