import { Box, Grid, Typography } from '@mui/material';
import { styles } from '../styles';
import SkeletonWrapper from '../../../components/SkeletonWrapper';

export default function GoalSection({ loading, image, goal }) {
  const showImage = loading || image;

  return (
    <>
      {showImage && (
        <Grid
          xs={12}
          md={6}
          item
          alignItems={{ xs: 'center', md: 'start' }}
          justifyContent="center"
          flexDirection="column"
          display="flex"
        >
          <SkeletonWrapper
            loading={loading}
            variant="rectangular"
            width={300}
            height={300}
            sx={{ borderRadius: '4px' }}
          >
            <Box className="goal-image-frame">
              <Box loading="lazy" component="img" src={image} width="75%" />
            </Box>
          </SkeletonWrapper>
        </Grid>
      )}
      <Grid
        xs={12}
        md={showImage ? 6 : 12}
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
