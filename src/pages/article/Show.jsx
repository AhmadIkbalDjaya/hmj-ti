import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/api';
import { HeadTags } from '../../components/headTags';
import { Box, Skeleton, Typography } from '@mui/material';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArticle = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/news/${slug}`);
        setArticle(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, [slug]);

  return (
    <>
      <HeadTags title={article?.data?.title} />
      <Box py={4} display="flex" alignItems="center" flexDirection="column" bgcolor="#F9FAFB">
        <Box textAlign="justify" width={{ xs: '85%', md: '69.5%' }}>
          <Typography pb={2} fontWeight={700} fontSize={{ xs: 20, md: 28 }} textAlign="center">
            {loading ? <Skeleton /> : article?.data?.title}
          </Typography>
          {loading ? (
            <Skeleton height="100px" />
          ) : (
            <Box component="img" src={article?.data?.image} width="100%" />
          )}
          <Typography fontWeight={300} sx={{ opacity: 0.57 }} py={2} fontStyle="italic">
            {loading ? <Skeleton /> : `Dipublikasikan pada ${article?.data?.publication_date}`}
          </Typography>
          {loading
            ? Array.from(new Array(3)).map((_, index) => <Skeleton />)
            : article?.data?.content?.split('\n').map((paragraph, index) => (
                <Typography key={index} mt={index > 0 ? 1 : 0}>
                  {paragraph}
                </Typography>
              ))}
        </Box>
      </Box>
    </>
  );
}
