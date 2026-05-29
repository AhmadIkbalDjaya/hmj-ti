import { HeadTags } from '../../components/HeadTags';
import { Box, Skeleton, Typography } from '@mui/material';
import { useShow } from './hooks/useShow';
import SkeletonWrapper from '../../components/SkeletonWrapper';
import { formatDate } from '../../utils/formatDate';

export default function ArticleDetailPage() {
  const { value } = useShow();

  return (
    <>
      <HeadTags title={value.article?.title} />
      <Box
        py={4}
        display="flex"
        alignItems="center"
        flexDirection="column"
        bgcolor="#F9FAFB"
      >
        <Box textAlign="justify" width={{ xs: '85%', md: '69.5%' }}>
          <SkeletonWrapper
            loading={value.loading}
            width="80%"
            height="50px"
            sx={{ mx: 'auto', mb: 1.5 }}
          >
            <Typography
              pb={2}
              fontWeight={700}
              fontSize={{ xs: 20, md: 28 }}
              textAlign="center"
            >
              {value.article?.title}
            </Typography>
          </SkeletonWrapper>
          <SkeletonWrapper
            loading={value.loading}
            variant="rectangular"
            height="350px"
          >
            <Box component="img" src={value.article?.image} width="100%" />
          </SkeletonWrapper>
          <SkeletonWrapper
            loading={value.loading}
            width="30%"
            height="30px"
            sx={{ my: 1.5 }}
          >
            <Typography
              fontWeight={300}
              sx={{ opacity: 0.57 }}
              py={2}
              fontStyle="italic"
            >
              {`Dipublikasikan pada ${formatDate(value.article?.publish_at)}`}
            </Typography>
          </SkeletonWrapper>
          <SkeletonWrapper loading={value.loading} rows={12}>
            {value.article?.content?.split('\n').map((paragraph, index) => (
              <Typography key={index} mt={index > 0 ? 1 : 0}>
                {paragraph}
              </Typography>
            ))}
          </SkeletonWrapper>
        </Box>
      </Box>
    </>
  );
}
