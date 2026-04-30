import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Skeleton, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import imageBorder from '../assets/ekrefCard.png';
import whatsappLogo from '../assets/products/whatsapp.svg';
import instagramLogo from '../assets/products/instagram.svg';

const ArticleCard = ({ data, loading }) => {
  if (loading) {
    return (
      <Card
        sx={{
          height: '300px',
          position: 'relative',
          width: '250px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
        }}
      >
        {/* Image Skeleton */}
        <Skeleton
          variant="rectangular"
          height="44%"
          sx={{ width: '90%', mx: 'auto', mt: '20px' }}
          animation="wave"
        />

        {/* Title Skeleton */}
        <CardContent sx={{ paddingTop: 0 }}>
          <Skeleton
            variant="text"
            width="80%"
            height={28}
            sx={{ mx: 'auto', mt: 2 }}
            animation="wave"
          />

          {/* Content Skeleton */}
          <Skeleton
            variant="text"
            width="90%"
            height={15}
            sx={{ mx: 'auto', mt: 1 }}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="85%"
            height={15}
            sx={{ mx: 'auto', mt: 1 }}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="70%"
            height={15}
            sx={{ mx: 'auto', mt: 1 }}
            animation="wave"
          />
        </CardContent>

        {/* Action Skeleton */}
        <CardActions>
          <Skeleton
            variant="text"
            width="60%"
            height={20}
            sx={{ mx: 'auto', mt: 2 }}
            animation="wave"
          />
        </CardActions>
      </Card>
    );
  }
  return (
    <Card
      sx={{
        height: '300px',
        position: 'relative',
        width: '250px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
      }}
    >
      <CardMedia
        loading="lazy"
        component="img"
        src={data.image}
        height="44%"
        sx={{ width: '90%', mx: 'auto', mt: '20px' }}
      />
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography
          textAlign="left"
          whiteSpace="nowrap"
          overflow="hidden"
          fontWeight={700}
          fontSize={20}
          pt={1}
          color="text.main"
          textOverflow="ellipsis"
        >
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="justify"
          fontSize={11}
          pt={1}
          sx={{
            WebkitLineClamp: '3',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {data.content}
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/berita-dan-kegiatan/${data.slug}`}>
          <Typography
            color="primary.main"
            fontSize={11}
            fontWeight={500}
            pb={3}
            pr={3}
            right={0}
            position="absolute"
            bottom={0}
          >
            Baca Selengkapnya
          </Typography>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export const ProductCard = ({ data, loading }) => {
  return (
    <Card
      sx={{
        boxShadow: '0px 4px 22px -6px rgba(0, 0, 0, 0.12)',
        position: 'relative',
        display: 'flex',
        height: { xs: 'auto', sm: '250px' },
        maxHeight: '500px',
        width: { xs: 'auto', sm: '580px' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 2,
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        height={loading ? '100%' : { xs: '40%', sm: '90%', md: '90%' }}
        width={loading ? '40%' : '100%'}
      >
        {loading ? (
          <Skeleton height="100%" variant="rectangular" />
        ) : (
          <CardMedia
            loading="lazy"
            component="img"
            height="100%"
            width="100%"
            src={data?.image}
            sx={{ objectFit: 'contain' }}
          />
        )}
      </Box>
      <CardContent sx={loading && { width: '60%' }}>
        <Typography fontWeight={600} fontSize={13} color="#ACACAC" letterSpacing={1.5}>
          {loading ? <Skeleton /> : data.publication_date}
        </Typography>
        <Typography textAlign="left" color="#BA1F1A" fontWeight={600} fontSize="1.2rem" pt={1}>
          {loading ? <Skeleton /> : data.name}
        </Typography>
        <Typography
          variant="body2"
          color="#454F5B"
          textAlign="justify"
          fontSize="0.875rem"
          py={1}
          width="85%"
        >
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            data.description
          )}
        </Typography>
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          mt={1}
          gap={{ xs: 1, md: 2 }}
          justifyContent="start"
          alignItems="start"
        >
          {loading ? (
            <Skeleton width="50%" />
          ) : (
            <>
              <Stack flexDirection="row" justifyContent="center" alignItems="center" gap={1}>
                <a
                  href={`https://wa.me/62${data?.no_wa.slice(1).replace(/-/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    gap: 8,
                  }}
                >
                  <Box loading="lazy" component="img" src={whatsappLogo} width={18} />
                  <Typography
                    fontSize={{
                      xs: '0.7rem',
                      md: '0.9rem',
                    }}
                    fontWeight={500}
                    color="text.secondary"
                  >
                    {data?.no_wa}
                  </Typography>
                </a>
              </Stack>
              <Stack flexDirection="row" justifyContent="center" alignItems="center" gap={1}>
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
            </>
          )}
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
};

const Cards = {
  ArticleCard,
  ProductCard,
};

export default Cards;
