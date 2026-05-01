import { Box, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from '../../../lib/api';
import { styles } from '../styles';

export default function OrganizationBoard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await api.get(`/members`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading</p>;

  const { presidium, wakil_ketua_1, wakil_ketua_2 } = data.data || {};

  return (
    <>
      <Box py={4} display="flex" flexDirection="column" id="struktur-organisasi">
        <Typography
          color="primary.main"
          fontWeight={700}
          textAlign="center"
          fontSize="2rem"
          className="heading"
        >
          Pengurus HMJ-TI
        </Typography>
        <Stack py={8}>
          <Typography sx={styles.title2}>Presidium</Typography>
          <Grid
            ml={0}
            container
            py={2}
            spacing={8}
            display="grid"
            sx={{
              gridAutoFlow: 'column',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr)) !important',
              gridAutoColumns: 'minmax(200px, 1fr)',
              overflowX: 'auto',
            }}
          >
            {presidium?.map((test) => (
              <Grid item md={3} xs={12} ml={3}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <Box className="photo-containers">
                    <Box loading="lazy" component="img" src={test.image} width="175px" />
                  </Box>
                  <Box width="200px">
                    <Typography color="text.main" fontSize="0.8rem" pt={2} fontWeight={500}>
                      {test.name}
                    </Typography>
                    <Typography color="primary.main" fontSize="0.7rem" fontWeight={700}>
                      {test.position}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
      <Typography sx={styles.title2} pb={2}>
        Bidang - Bidang
      </Typography>
      <Box>
        <Grid container display="flex" textAlign="left" alignItems="center" justifyContent="start">
          <Grid item xs={6} md={2}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Box className="photo-containers">
                <Box loading="lazy" component="img" src={wakil_ketua_1?.image} width="175px" />
              </Box>
              <Box width="200px">
                <Typography color="text.main" fontSize="0.8rem" pt={2} fontWeight={500}>
                  {wakil_ketua_1?.name}
                </Typography>
                <Typography color="primary.main" fontSize="0.7rem" fontWeight={700}>
                  Wakil Ketua 1
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={10} xs={6} textAlign="center" justifyContent="center" display="flex">
            <Typography
              color="#A1A1A1"
              fontWeight={700}
              fontSize={{ xs: '2rem', md: '6rem' }}
              sx={{ opacity: 0.15 }}
              textAlign="left"
              ml={{ xs: 4, md: 10 }}
              mb={5}
            >
              Wakil Ketua 1
            </Typography>
          </Grid>
        </Grid>
        <Box py={4}>
          {!loading &&
            wakil_ketua_1?.naungan.map((division) => (
              <Grid container>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                  <Typography sx={styles.title2}>{division.department}</Typography>
                  <Grid
                    ml={0}
                    container
                    py={2}
                    spacing={8}
                    display="grid"
                    sx={{
                      gridAutoFlow: 'column',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr)) !important',
                      gridAutoColumns: 'minmax(200px, 1fr)',
                      overflowX: 'scroll',
                    }}
                  >
                    {division.members.map((member) => (
                      <Grid item md={3} xs={12} ml={3}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Box className="photo-containers">
                            <Box loading="lazy" component="img" src={member.image} width="175px" />
                          </Box>
                          <Box width="200px">
                            <Typography color="text.main" fontSize="0.8rem" pt={2} fontWeight={500}>
                              {member.name}
                            </Typography>
                            <Typography color="primary.main" fontSize="0.7rem" fontWeight={700}>
                              {member.position}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Box>
      </Box>
      <Box>
        <Grid container display="flex" textAlign="left" alignItems="center" justifyContent="start">
          <Grid item xs={6} md={2}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Box className="photo-containers">
                <Box loading="lazy" component="img" src={wakil_ketua_2?.image} width="175px" />
              </Box>
              <Box width="200px">
                <Typography color="text.main" fontSize="0.8rem" pt={2} fontWeight={500}>
                  {wakil_ketua_2?.name}
                </Typography>
                <Typography color="primary.main" fontSize="0.7rem" fontWeight={700}>
                  Wakil Ketua 2
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={10} xs={6} textAlign="center" justifyContent="center" display="flex">
            <Typography
              color="#A1A1A1"
              fontWeight={700}
              fontSize={{ xs: '2rem', md: '6rem' }}
              sx={{ opacity: 0.15 }}
              textAlign="left"
              ml={{ xs: 4, md: 10 }}
              mb={5}
            >
              Wakil Ketua 2
            </Typography>
          </Grid>
        </Grid>
        <Box py={4}>
          {!loading &&
            wakil_ketua_2?.naungan.map((division) => (
              <Grid container>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
                  <Typography sx={styles.title2}>{division.department}</Typography>
                  <Grid
                    ml={0}
                    container
                    py={2}
                    spacing={8}
                    display="grid"
                    sx={{
                      gridAutoFlow: 'column',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr)) !important',
                      gridAutoColumns: 'minmax(200px, 1fr)',
                      overflowX: 'scroll',
                    }}
                  >
                    {division.members.map((member) => (
                      <Grid item md={3} xs={12} ml={3}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Box className="photo-containers">
                            <Box loading="lazy" component="img" src={member.image} width="175px" />
                          </Box>
                          <Box width="200px">
                            <Typography color="text.main" fontSize="0.8rem" pt={2} fontWeight={500}>
                              {member.name}
                            </Typography>
                            <Typography color="primary.main" fontSize="0.7rem" fontWeight={700}>
                              {member.position}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Box>
      </Box>
    </>
  );
}
