import { Box, Typography } from '@mui/material';
import { HeadTags } from '../../components/headTags';
import patternBottom from '../../assets/patternBottom.png';
import patternTop from '../../assets/patternTop.png';
import dot from '../../assets/dot.svg';
import './Index.css';
import VisionMission from './components/VisionMission';
import OrganizationBoard from './components/OrganizationBoard';

export default function AboutPage() {
  const style = {
    title: {
      color: 'primary.main',
      fontWeight: 700,
      textAlign: 'start',
      fontSize: { xs: '2rem', md: '2rem' },
    },
    title2: {
      color: 'primary.main',
      fontSize: '1.2rem',
      textAlign: 'start',
      fontWeight: 600,
    },
    description: {
      color: 'text.main',
      textAlign: 'justify',
      fontWeight: 500,
      paddingTop: 2,
    },
  };

  return (
    <>
      <HeadTags title="Tentang" />
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
      <Box sx={{ bgcolor: '#F9FAFB' }}>
        <Box position="relative">
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            left={0}
            top={{ xs: '20rem', sm: '25rem', md: '30rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            left={0}
            top={{ xs: '155rem', sm: '150rem', md: '120rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            left={0}
            top={{ xs: '222.5rem', sm: '215rem', md: '190rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            left={0}
            top={{ xs: '285rem', sm: '280rem', md: '250rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            right={0}
            top={{ xs: '87.5rem', sm: '72.5rem', md: '40rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            right={0}
            top={{ xs: '130rem', sm: '125rem', md: '92.5rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            right={0}
            top={{ xs: '195rem', sm: '190rem', md: '155rem' }}
            zIndex={2}
          />
          <Box
            loading="lazy"
            component="img"
            src={dot}
            position="absolute"
            width={{ xs: '20%', md: '10%' }}
            right={0}
            top={{ xs: '255rem', sm: '250rem', md: '225rem' }}
            zIndex={2}
          />

          <Box position="relative" px={{ xs: 6, md: 20 }} zIndex={10}>
            <VisionMission style={style} />
            <OrganizationBoard style={style} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
