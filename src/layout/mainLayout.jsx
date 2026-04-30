import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function MainLayout() {
  // const scrollDirection = useScrollDirection();

  return (
    <Box>
      <Box mb="80px">
        <Navbar />
      </Box>
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
