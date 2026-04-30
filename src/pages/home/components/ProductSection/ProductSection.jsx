import { Box, Grid, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './ProductSection.css';
import arrow from '../../../../assets/arrow.svg';
import { useProductSection } from './useProductSection';

export default function ProductSection() {
  const { productHighlight, loading } = useProductSection();

  return (
    <Box
      position="relative"
      bgcolor="#BA1F1A"
      py={8}
      mb={{ xs: -1 }}
      color="#fff"
      overflow="hidden"
    >
      <Grid container>
        <Grid item xs={12} md={4} px={{ xs: 4, md: 12 }}>
          <Typography fontSize={21} fontWeight={300}>
            Ekonomi Kreatif
          </Typography>
          <Typography
            fontWeight={800}
            fontSize={36.3}
            pb={{ xs: 2, md: 3 }}
            sx={{ wordSpacing: 10 }}
          >
            Produk Kami
          </Typography>
          <Typography
            fontSize="1rem"
            pb={{ xs: 0, md: 9 }}
            fontWeight={300}
            textAlign="justify"
            sx={{ textIndent: '24px' }}
          >
            Kami menawarkan berbagai produk terbaik yang dirancang untuk memenuhi kebutuhan Anda
            dengan kualitas yang terjamin.
          </Typography>
          <NavLink to="/ekonomi-kreatif" className="link">
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography fontSize={13}>Lihat lebih banyak</Typography>
              <Box pt={0.1} component="img" src={arrow} height="10px" />
            </Stack>
          </NavLink>
        </Grid>
        <Grid
          pb={{ xs: 8, md: 0 }}
          item
          xs={12}
          md={8}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'start' }}
        >
          <Box
            className="container"
            marginTop={{ xs: 12, md: 4 }}
            // marginLeft={{ xs: 0, md: 5.75 }}
            borderRadius={1}
            height={{ xs: '100%', md: '100%' }}
            zIndex={0}
            // position='relative'
            display="flex"
            width={{
              xs: '75%',
              sm: '50%',
              md: '100%',
              lg: '77.5%',
            }}
            bgcolor="#AA1712"
            justifyContent="center"
          >
            <Grid
              container
              px={2}
              display="flex"
              justifyContent="center"
              position="relative"
              zIndex={2}
            >
              {!loading &&
                productHighlight?.data?.map((product) => (
                  <Grid
                    borderRadius={1}
                    item
                    key={product.id}
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent={{
                      xs: 'center',
                      md: 'start',
                    }}
                    alignItems="center"
                  >
                    <Box
                      className="product"
                      borderRadius={1}
                      mb={8}
                      bgcolor="#fff"
                      width="95%"
                      height="95%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ objectFit: 'contain' }}
                    >
                      <Box
                        className="product"
                        width="85%"
                        height="85%"
                        component="img"
                        sx={{ aspectRatio: 1 / 1 }}
                        src={product.image}
                      ></Box>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
          <NavLink to="/ekonomi-kreatif" className="link-mobile">
            <Stack direction="row" alignItems="center" gap={1} pt="24px">
              <Typography fontSize={13} color="#fff">
                Lihat lebih banyak
              </Typography>
              <Box pt={0.1} component="img" src={arrow} height="10px" />
            </Stack>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}
