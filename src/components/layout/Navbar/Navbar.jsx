import { AppBar, Box, Toolbar, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import styles from './Navbar.module.css';
import HideOnScroll from '../../../utils/header';
import { Slant } from 'hamburger-react';
import { useNavbar } from './useNavbar';

const menus = [
  'Berita & Kegiatan',
  'Ekonomi Kreatif',
  'Database Kader',
  'Tentang',
];

export default function Navbar(props) {
  const { isMobile, toggle, setToggle, showNav, handleLogoClick } = useNavbar();

  return (
    <>
      <HideOnScroll setToggle={setToggle} threshold={80} {...props}>
        <AppBar
          sx={{ boxShadow: '0px 4px 22px -6px rgba(0, 0, 0, 0.12)' }}
          position="fixed"
        >
          <Toolbar sx={{ height: 80, bgcolor: '#fff' }}>
            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              px={2.5}
            >
              <NavLink to="/">
                <Box
                  onClick={handleLogoClick}
                  component="img"
                  src={logo}
                  height={55}
                />
              </NavLink>
              <Box
                position="absolute"
                display={{ xs: 'block', md: 'none' }}
                zIndex={100}
                right={16}
              >
                <Slant
                  size={24}
                  rounded
                  color="#B20600"
                  toggled={toggle}
                  toggle={setToggle}
                />
              </Box>
              <Stack
                direction="row"
                columnGap={3.8}
                display={{ xs: 'none', md: 'flex' }}
              >
                <Links />
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Stack
        direction="column"
        overflow="hidden"
        top={toggle ? '80px' : '-350px'}
        margin="0 auto"
        width="100%"
        py={5}
        textAlign="center"
        gap={6}
        zIndex={999}
        bgcolor="#ffffff"
        display={{ xs: 'flex', md: 'none' }}
        position="fixed"
        sx={{ transition: 'all .5s' }}
      >
        <Links showNav={showNav} isMobile={isMobile} />
      </Stack>
    </>
  );
}

const Links = ({ showNav, isMobile }) => {
  const navStyle = ({ isActive }) => {
    return {
      fontSize: '15.6px',
      textDecoration: 'none',
      fontWeight: isActive ? '500' : '400',
      color: isActive ? '#B20600' : '#000',
    };
  };

  const handleClick = () => {
    if (isMobile && showNav) {
      showNav();
    }
  };

  return (
    <>
      <NavLink
        to="/"
        style={navStyle}
        onClick={handleClick}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Beranda
      </NavLink>
      {menus.map((menu, i) => (
        <NavLink
          key={i}
          to={
            menu === 'Berita & Kegiatan'
              ? 'berita-dan-kegiatan'
              : menu.replace(/\s+/g, '-').toLocaleLowerCase()
          }
          style={navStyle}
          onClick={handleClick}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          {menu}
        </NavLink>
      ))}
    </>
  );
};
