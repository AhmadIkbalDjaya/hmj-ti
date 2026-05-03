import { Box, Grid, Typography } from '@mui/material';
import { styles } from '../styles';
import SkeletonWrapper from '../../../components/SkeletonWrapper';

export default function GoalSection({ loading, image, goal }) {
  return (
    <>
      <Grid
        xs={12}
        md={6}
        item
        alignItems={{ xs: 'center', md: 'start' }}
        justifyContent="center"
        flexDirection="column"
        display="flex"
      >
        <Box className="photo-container">
          <Box loading="lazy" component="img" src={image} width="75%" />
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={6}
        item
        justifyContent="center"
        flexDirection="column"
        display="flex"
      >
        <SkeletonWrapper loading={loading} height="48px">
          <Typography sx={styles.title}>
            Himpunan Mahasiswa Jurusan Teknik Informatika
          </Typography>
        </SkeletonWrapper>
        <SkeletonWrapper
          loading={loading}
          height="18px"
          rows={4}
          gridSx={{ mt: 1.5 }}
        >
          <Typography sx={styles.description}>{goal}</Typography>
        </SkeletonWrapper>
      </Grid>
    </>
  );
}
