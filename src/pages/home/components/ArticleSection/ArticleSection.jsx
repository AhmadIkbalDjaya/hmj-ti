import { Typography, Box, Grid, Container } from '@mui/material';
import { useArticleSection } from './useArticleSection';
import ArticleCard from '../../../../components/ArticleCard';

export default function ArticleSection() {
  const { articles, loading } = useArticleSection();

  return (
    <Box
      textAlign="center"
      pb={13}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#F9FAFB"
    >
      <Container maxWidth="lg">
        <Typography fontWeight={700} fontSize={30} color="primary.main" className="heading">
          Berita & Informasi
        </Typography>
        <Grid
          container
          py={5}
          px={{ xs: 2, sm: 10, md: 14, lg: 18 }}
          rowSpacing={4}
          columnSpacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {loading
            ? Array.from(new Array(3)).map((_, index) => (
              <Grid item key={index}>
                <ArticleCard loading={true} />
              </Grid>
            ))
            : articles?.data?.map((article) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                display="flex"
                justifyContent="center"
                key={article.slug}
              >
                <ArticleCard article={article} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
