import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import patternTop from '../../assets/patternTop.png';
import patternBottom from '../../assets/patternBottom.png';
import { HeadTags } from '../../components/HeadTags';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard';

export default function BusinessPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/products');
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HeadTags title="Ekonomi Kreatif" />
      <Box
        bgcolor="primary.main"
        height={372.5}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          component="img"
          src={patternTop}
          position="absolute"
          left={{ xs: -200, md: -100 }}
          top={0}
          height="100%"
        />
        <Box
          component="img"
          src={patternBottom}
          position="absolute"
          right={{ xs: -200, md: -100 }}
          bottom={0}
          height="100%"
        />
        <Box ml={0} color="#fff" textAlign="center">
          <Typography
            fontWeight={600}
            fontSize={{ xs: '2rem', md: '2rem' }}
            zIndex={9}
            position="relative"
          >
            Ekonomi Kreatif
          </Typography>
          <Typography fontSize="1rem" fontWeight={300}>
            Ekonomi kreatif, peluang tanpa batas.
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ py: 9, bgcolor: '#F9FAFB' }}>
        <Grid container spacing={3} px={{ xs: 3, sm: 0 }}>
          {loading
            ? Array.from(new Array(2)).map((_, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  justifyContent="center"
                  display="flex"
                >
                  <ProductCard loading={true} />
                </Grid>
              ))
            : products?.data?.map((product, i) => {
                return (
                  <Grid
                    key={i}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    justifyContent="center"
                    display="flex"
                  >
                    <ProductCard product={product} />
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </>
  );
}
