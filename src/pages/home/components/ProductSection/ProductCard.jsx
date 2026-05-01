import { Box, Grid } from '@mui/material';
import SkeletonWrapper from '../../../../components/SkeletonWrapper';

export default function ProductCard({ product, loading }) {
  return (
    <Grid
      borderRadius={1}
      item
      key={product?.id}
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
        <SkeletonWrapper
          loading={loading}
          variant="rectangular"
          width="85%"
          height="85%"
          animation="wave"
        >
          <Box
            className="product"
            width="85%"
            height="85%"
            component="img"
            sx={{ aspectRatio: 1 / 1, objectFit: 'cover' }}
            src={product?.image}
          ></Box>
        </SkeletonWrapper>
      </Box>
    </Grid>
  );
}
