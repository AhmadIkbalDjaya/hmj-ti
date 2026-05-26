import { Box, Grid, Typography } from '@mui/material';
import { styles } from '../styles';
import SkeletonWrapper from '../../../components/SkeletonWrapper';

export default function VisionMission({ loading, image, vision, missions }) {
  const showImage = loading || image;
  const missionItems = missions ?? [];

  return (
    <>
      <Grid
        xs={12}
        md={showImage ? 6 : 12}
        item
        gap={2}
        justifyContent="center"
        flexDirection="column"
        display="flex"
      >
        <Box>
          <SkeletonWrapper loading={loading} height="48px" width="30%">
            <Typography sx={styles.title}>Visi</Typography>
          </SkeletonWrapper>
          <SkeletonWrapper
            loading={loading}
            rows={3}
            spacing={0.5}
            gridSx={{ mt: 1.5 }}
          >
            <Typography sx={styles.description}>{vision}</Typography>
          </SkeletonWrapper>
        </Box>
        <Box>
          <SkeletonWrapper loading={loading} height="48px" width="30%">
            <Typography sx={styles.title}>Misi</Typography>
          </SkeletonWrapper>
          <SkeletonWrapper
            loading={loading}
            rows={2}
            spacing={0}
            gridSx={{ mt: 1.5 }}
          />
          <SkeletonWrapper
            loading={loading}
            rows={3}
            spacing={0}
            gridSx={{ mt: 1 }}
          />
          <SkeletonWrapper
            loading={loading}
            rows={2}
            spacing={0}
            gridSx={{ mt: 1 }}
          >
            <Box ml={-3}>
              <ol>
                {missionItems.map((mission, index) => (
                  <li key={`${mission}-${index}`}>
                    <Typography sx={styles.description}>{mission}</Typography>
                  </li>
                ))}
              </ol>
            </Box>
          </SkeletonWrapper>
        </Box>
      </Grid>
      {showImage && (
        <Grid
          xs={12}
          md={6}
          item
          justifyContent="center"
          alignItems={{ xs: 'center', md: 'end' }}
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
            <Box className="photo-containerr">
              <Box loading="lazy" component="img" src={image} width="75%" />
            </Box>
          </SkeletonWrapper>
        </Grid>
      )}
    </>
  );
}
