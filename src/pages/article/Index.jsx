import { Box, Pagination } from '@mui/material';
import { useIndex } from './hooks/useIndex';
import HeroSection from './components/HeroSection';
import ArticleList from './components/ArticleList';
import { HeadTags } from '../../components/HeadTags';

export default function ArticlePage() {
  const { value, func } = useIndex();

  return (
    <>
      <HeadTags title="Berita & Kegiatan" />
      <HeroSection />
      <Box bgcolor="#F9FAFB">
        <ArticleList loading={value.loading} articles={value.articles} />
        <Box display="flex" justifyContent="center" pb={4}>
          <Pagination
            count={value.meta?.total_page}
            color="primary"
            onChange={func.handlePagination}
          />
        </Box>
      </Box>
    </>
  );
}
