import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import imageBorder from '../assets/ekrefCard.png';
import whatsappLogo from '../assets/products/whatsapp.svg';
import instagramLogo from '../assets/products/instagram.svg';
import SkeletonWrapper from './SkeletonWrapper';

export default function ProductCard({ product, loading }) {
  return (
    <Card
      sx={{
        boxShadow: '0px 4px 22px -6px rgba(0, 0, 0, 0.12)',
        position: 'relative',
        display: 'flex',
        height: { xs: '420px', sm: '250px' },
        maxHeight: '500px',
        width: { xs: '100%', sm: '580px' },
        alignItems: 'center',
        justifyContent: { xs: 'start', sm: 'space-between' },
        px: 2,
        py: 2,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: 0 },
      }}
    >
      <Box
        height={{ xs: '50%', sm: '90%', md: '90%' }}
        width={{ xs: '100%', md: '40%' }}
      >
        <SkeletonWrapper loading={loading} variant="rectangular" height="100%">
          <CardMedia
            loading="lazy"
            component="img"
            height="100%"
            width="100%"
            src={product?.image}
            sx={{ objectFit: 'cover' }}
          />
        </SkeletonWrapper>
      </Box>
      <CardContent sx={{ width: { xs: '80%', md: '60%' } }}>
        <SkeletonWrapper loading={loading}>
          <Typography
            fontWeight={600}
            fontSize={13}
            color="#ACACAC"
            letterSpacing={1.5}
          >
            {product?.publication_date}
          </Typography>
        </SkeletonWrapper>
        <SkeletonWrapper loading={loading} height="28px" sx={{ mt: 1 }}>
          <Typography
            textAlign="left"
            color="#BA1F1A"
            fontWeight={600}
            fontSize="1.2rem"
            pt={1}
          >
            {product?.title}
          </Typography>
        </SkeletonWrapper>
        <SkeletonWrapper
          loading={loading}
          rows={2}
          spacing={0}
          gridSx={{ mt: 1 }}
          width="85%"
        >
          <Typography
            variant="body2"
            color="#454F5B"
            textAlign="justify"
            fontSize="0.875rem"
            py={1}
            width="85%"
          >
            {product?.description}
          </Typography>
        </SkeletonWrapper>
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={1}
          gap={{ xs: 1, md: 2 }}
          justifyContent="start"
          alignItems="start"
        >
          <SkeletonWrapper loading={loading} width="50%" sx={{ mt: 2 }}>
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <a
                href={`https://wa.me/62${product?.no_wa.slice(1).replace(/-/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  gap: 8,
                }}
              >
                <Box
                  loading="lazy"
                  component="img"
                  src={whatsappLogo}
                  width={18}
                />
                <Typography
                  fontSize={{
                    xs: '0.7rem',
                    md: '0.9rem',
                  }}
                  fontWeight={500}
                  color="text.secondary"
                >
                  {product?.no_wa}
                </Typography>
              </a>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <a
                href="https://www.instagram.com/hmjti_uinam/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  gap: 8,
                }}
              >
                <Box component="img" src={instagramLogo} width={18} />
                <Typography
                  fontSize={{
                    xs: '0.7rem',
                    md: '0.9rem',
                  }}
                  fontWeight={500}
                  color="text.secondary"
                >
                  @hmjti_uinam
                </Typography>
              </a>
            </Stack>
          </SkeletonWrapper>
        </Stack>
        <Box
          loading="lazy"
          component="img"
          position="absolute"
          bottom={0}
          right={{ xs: -10, md: 0 }}
          height={{ xs: '50%', sm: '80%' }}
          src={imageBorder}
        />
      </CardContent>
    </Card>
  );
}
