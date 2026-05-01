import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export const useNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle((prev) => !prev);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return {
    isMobile,
    toggle,
    setToggle,
    showNav,
    handleLogoClick,
  };
};
