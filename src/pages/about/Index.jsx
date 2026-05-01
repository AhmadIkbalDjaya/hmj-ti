import { Box } from '@mui/material';
import { HeadTags } from '../../components/HeadTags';
import { DotPattern } from './components/DotPattern';
import './Index.css';
import VisionMission from './components/VisionMission';
import OrganizationBoard from './components/OrganizationBoard';
import HeroSection from './components/HeroSection';

export default function AboutPage() {
  return (
    <>
      <HeadTags title="Tentang" />
      <HeroSection />
      <Box sx={{ bgcolor: '#F9FAFB' }}>
        <Box position="relative">
          <DotPattern />
          <Box position="relative" px={{ xs: 6, md: 20 }} zIndex={10}>
            <VisionMission />
            <OrganizationBoard />
          </Box>
        </Box>
      </Box>
    </>
  );
}
