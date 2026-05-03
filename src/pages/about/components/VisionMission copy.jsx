import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styles } from '../styles';
import { api } from '../../../lib/api';
import SkeletonWrapper from '../../../components/SkeletonWrapper';

export default function VisionMission() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/about`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container py={12} columnSpacing={2} rowSpacing={{ xs: 8, md: 18 }}>
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
          <Box
            loading="lazy"
            component="img"
            src={data?.data?.image1}
            width="75%"
          />
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
          <Typography sx={styles.description}>{data?.data?.goal}</Typography>
        </SkeletonWrapper>
      </Grid>
      <Grid
        xs={12}
        md={6}
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
            <Typography sx={styles.description}>
              {data?.data?.vision}
            </Typography>
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
                {data?.data?.missions?.map((mission) => (
                  <li>
                    <Typography sx={styles.description}>
                      {mission.mission}
                    </Typography>
                  </li>
                ))}
              </ol>
            </Box>
          </SkeletonWrapper>
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={6}
        item
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'end' }}
        flexDirection="column"
        display="flex"
      >
        <Box className="photo-containerr">
          <Box
            loading="lazy"
            component="img"
            src={data?.data?.image2}
            width="75%"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
