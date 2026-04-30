import { useEffect, useState } from 'react';
import { api } from '../../../lib/api';
import { Box, Grid, Skeleton, Typography } from '@mui/material';

export default function VisionMission({ style }) {
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
          <Box loading="lazy" component="img" src={data?.data?.image1} width="75%" />
        </Box>
      </Grid>
      <Grid xs={12} md={6} item justifyContent="center" flexDirection="column" display="flex">
        <Typography sx={style.title}>
          {loading ? <Skeleton /> : 'Himpunan Mahasiswa Jurusan Teknik Informatika'}
        </Typography>
        <Typography sx={style.description}>{loading ? <Skeleton /> : data?.data?.goal}</Typography>
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
          <Typography sx={style.title}>{loading ? <Skeleton /> : 'Visi'}</Typography>
          <Typography sx={style.description}>
            {loading ? <Skeleton /> : data?.data?.vision}
          </Typography>
        </Box>
        <Box>
          <Typography sx={style.title}>{loading ? <Skeleton /> : 'Misi'}</Typography>
          <Box ml={-3}>
            <ol>
              {data?.data?.missions?.map((mission) => (
                <li>
                  <Typography sx={style.description}>{mission.mission}</Typography>
                </li>
              ))}
            </ol>
          </Box>
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
          <Box loading="lazy" component="img" src={data?.data?.image2} width="75%" />
        </Box>
      </Grid>
    </Grid>
  );
}
