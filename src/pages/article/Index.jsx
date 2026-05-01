import { useEffect, useState } from 'react';
import { HeadTags } from '../../components/HeadTags';
import patternTop from '../../assets/patternTop.png';
import patternBottom from '../../assets/patternBottom.png';
import { api } from '../../lib/api';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import ArticleCard from '../../components/ArticleCard';

export default function ArticlePage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/news?page=${page}&perpage=8`);
        setArticles(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, [page]);

  const handlePagination = (_data, value) => {
    setPage(value);
  };

  return (
    <>
      <HeadTags title="Berita & Kegiatan" />
      <Box
        bgcolor="primary.main"
        height={375}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
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
        <Typography
          position="absolute"
          color="#fff"
          fontWeight={600}
          fontSize={{ xs: '2rem', md: '3rem' }}
        >
          Berita & Kegiatan
        </Typography>
      </Box>
      <Box bgcolor="#F9FAFB">
        <Grid
          height="fit-content"
          container
          py={9}
          pb={4}
          px={12}
          alignItems="center"
          spacing={3}
          justifyContent="center"
        >
          {loading
            ? Array.from(new Array(8)).map((_, index) => (
                <Grid item key={index}>
                  <ArticleCard loading={true} />
                </Grid>
              ))
            : articles?.data?.map((items) => (
                <Grid item key={items.title}>
                  <ArticleCard article={items} />
                </Grid>
              ))}
        </Grid>
        <Box display="flex" justifyContent="center" pb={4}>
          <Pagination
            count={articles?.meta?.total_page}
            color="primary"
            onChange={handlePagination}
          />
        </Box>
      </Box>
    </>
  );
}
