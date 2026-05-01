import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import SkeletonWrapper from "./SkeletonWrapper";
import { NavLink } from "react-router-dom";

export default function ArticleCard({ article, loading }) {
  return (
    <Card
      sx={{
        height: '300px',
        position: 'relative',
        width: '250px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
      }}
    >
      <SkeletonWrapper
        loading={loading}
        variant="rectangular"
        height="44%"
        sx={{ width: '90%', mx: 'auto', mt: '20px' }}
        animation="wave"
      >
        <CardMedia
          loading="lazy"
          component="img"
          src={article?.image}
          height="44%"
          sx={{ width: '90%', mx: 'auto', mt: '20px' }}
        />
      </SkeletonWrapper>
      <CardContent sx={{ paddingTop: 0 }}>
        <SkeletonWrapper
          loading={loading}
          width="90%"
          height={28}
          sx={{ mt: 1.5 }}
          animation="wave"
        >
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
            {article?.title}
          </Typography>
        </SkeletonWrapper>
        <SkeletonWrapper
          loading={loading}
          rows={3}
          spacing={0}
          height={15}
          sx={{ mt: 0.5 }}
          animation="wave"
        >
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
            {article?.content}
          </Typography>
        </SkeletonWrapper>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <SkeletonWrapper
          loading={loading}
          width="40%"
          height={20}
          sx={{ mt: -1.5, mr: 1 }}
          animation="wave"
        >
          <NavLink to={`/berita-dan-kegiatan/${article?.slug}`} style={{ textDecoration: "none" }}>
            <Typography
              color="primary.main"
              fontSize={11}
              fontWeight={500}
              pr={2}
            >
              Baca Selengkapnya
            </Typography>
          </NavLink>
        </SkeletonWrapper>
      </CardActions>
    </Card>
  )
}
