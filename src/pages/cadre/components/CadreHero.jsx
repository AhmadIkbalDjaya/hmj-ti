import { Box, Typography } from '@mui/material';
import patternTop from '../../../assets/patternTop.png';
import patternBottom from '../../../assets/patternBottom.png';

export default function CadreHero() {
  return (
    <Box
      bgcolor="primary.main"
      height={{ xs: 280, md: 340 }}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      position="relative"
      overflow="hidden"
    >
      <Box
        component="img"
        src={patternTop}
        position="absolute"
        left={{ xs: -230, md: -120 }}
        top={0}
        height="100%"
        alt=""
      />
      <Box
        component="img"
        src={patternBottom}
        position="absolute"
        right={{ xs: -230, md: -120 }}
        bottom={0}
        height="100%"
        alt=""
      />
      <Typography
        position="relative"
        color="#fff"
        fontWeight={700}
        fontSize={{ xs: '2rem', md: '3rem' }}
      >
        Database Kader
      </Typography>
    </Box>
  );
}
