import { Grid } from '@mui/material';
import ArticleCard from '../../../components/ArticleCard';

export default function ArticleList({ articles = [], loading = false }) {
  return (
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
        : articles.map((items) => (
            <Grid item key={items.title}>
              <ArticleCard article={items} />
            </Grid>
          ))}
    </Grid>
  );
}
