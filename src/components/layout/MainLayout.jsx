import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function MainLayout() {
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
