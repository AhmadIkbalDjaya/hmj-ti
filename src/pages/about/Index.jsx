import { Box, Grid } from '@mui/material';
import './Index.css';
import { useIndex } from './hooks/useIndex';
import HeroSection from './components/HeroSection';
import GoalSection from './components/GoalSection';
import { DotPattern } from './components/DotPattern';
import { HeadTags } from '../../components/HeadTags';
import VisionMission from './components/VisionMission';
import OrganizationBoard from './components/OrganizationBoard/OrganizationBoard';

export default function AboutPage() {
  const { value } = useIndex();

  return (
    <>
      <HeadTags title="Tentang" />
      <HeroSection />
      <Box sx={{ bgcolor: '#F9FAFB' }}>
        <Box position="relative">
          <DotPattern />
          <Box position="relative" px={{ xs: 6, md: 20 }} zIndex={10}>
            <Grid
              container
              py={12}
              columnSpacing={2}
              rowSpacing={{ xs: 8, md: 18 }}
            >
              <GoalSection
                loading={value.loading}
                image={value.data?.data?.image1}
                goal={value.data?.data?.goal}
              />
              <VisionMission
                loading={value.loading}
                vision={value.data?.data?.vision}
                missions={value.data?.data?.missions}
                image={value.data?.data?.image1}
              />
            </Grid>
            <OrganizationBoard />
          </Box>
        </Box>
      </Box>
    </>
  );
}
