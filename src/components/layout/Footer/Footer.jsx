import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import logo from '../../../assets/logo.svg';

import instagramLogo from '../../../assets/footer/instagram.svg';
import whatsappLogo from '../../../assets/footer/whatsapp.svg';
import youtubeLogo from '../../../assets/footer/youtube.svg';
import tiktokLogo from '../../../assets/footer/tiktok.svg';
import facebookLogo from '../../../assets/footer/facebook.svg';

import emailLogo from '../../../assets/footer/email.svg';
import locationLogo from '../../../assets/footer/location.svg';
import telephoneLogo from '../../../assets/footer/telephone.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useFooter } from './useFooter';

const Footer = () => {
  const { year, menus, socialMedia, contactInfo } = useFooter();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'facebook.svg': return facebookLogo;
      case 'instagram.svg': return instagramLogo;
      case 'tiktok.svg': return tiktokLogo;
      case 'youtube.svg': return youtubeLogo;
      case 'whatsapp.svg': return whatsappLogo;
      case 'telephone.svg': return telephoneLogo;
      case 'email.svg': return emailLogo;
      case 'location.svg': return locationLogo;
      default: return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: 5,
      }}
    >
      <Box
        loading="lazy"
        component="img"
        src={logo}
        width={{ xs: '30%', sm: '20%', md: '10%' }}
        my={2}
      />
      
      <Stack direction="row" gap={3} py={3} alignItems="center" justifyContent="center">
        {socialMedia.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
            <Box 
              loading="lazy" 
              component="img" 
              src={getIcon(social.icon)} 
              width={social.width || "20px"} 
            />
          </a>
        ))}
      </Stack>

      <Stack width="75%">
        <Stack
          direction={{ xs: 'column', sm: 'row', md: 'row' }}
          gap={{ xs: 2, md: 10 }}
          pt={2}
          pb={8}
          justifyContent="center"
          alignItems={{ xs: 'left', md: 'center' }}
        >
          {contactInfo.map((info) => (
            <Stack key={info.type} direction="row" gap={2} justifyContent="left">
              <Box component="img" src={getIcon(info.icon)} width="24px" />
              <Box>
                <Typography fontWeight={400} color="#9A9EA6" fontSize={12}>
                  {info.type}
                </Typography>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography fontWeight={700} color="primary.main" fontSize={14}>
                      {info.value}
                    </Typography>
                  </a>
                ) : (
                  <Typography fontWeight={700} color="primary.main" fontSize={14}>
                    {info.value}
                  </Typography>
                )}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Divider variant="middle" sx={{ width: '95%', borderWidth: 1.3 }} />

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          alignItems: 'center',
          width: '100%',
          pt: 2,
          gap: { xs: 0, md: 70 },
          justifyContent: 'space-evenly',
        }}
      >
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          {menus.map((menu, i) => {
            const buttonProps = {
              variant: "text",
              sx: {
                color: 'black',
                fontSize: 12,
                fontWeight: '400',
                textTransform: 'capitalize',
                ':hover': {
                  bgcolor: 'white',
                  color: '#B20600',
                },
              }
            };

            if (menu.isHash) {
              return (
                <HashLink to={menu.to} smooth key={i}>
                  <Button {...buttonProps}>{menu.label}</Button>
                </HashLink>
              );
            }
            return (
              <Link to={menu.to} key={i}>
                <Button {...buttonProps}>{menu.label}</Button>
              </Link>
            );
          })}
        </Stack>
        
        <Typography sx={{ display: 'flex' }} variant="caption">
          &#169;{year}, Develop by&nbsp;
          <Link
            to="https://instagram.com/inready.workgroup"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <span style={{ color: 'black', fontWeight: 600 }}>
              Inready Workgroup
            </span>
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
