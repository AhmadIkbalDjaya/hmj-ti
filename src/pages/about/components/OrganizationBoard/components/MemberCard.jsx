import { Box, Typography } from '@mui/material';
import SkeletonWrapper from '../../../../../components/SkeletonWrapper';
import memberMaleImg from '../../../../../assets/member-male.webp';
import memberFemaleImg from '../../../../../assets/member-female.webp';

export default function MemberCard({ member, loading }) {
  const genderDefaultImages = {
    male: memberMaleImg,
    female: memberFemaleImg,
  };
  const image =
    member?.photo ?? genderDefaultImages[member?.gender] ?? memberMaleImg;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Box className="member-photo-frame">
        <SkeletonWrapper
          loading={loading}
          variant="rectangle"
          animation="wave"
          component="img"
          width="150px"
          height="150px"
          sx={{ borderRadius: 1 }}
        >
          <Box loading="lazy" component="img" src={image} />
        </SkeletonWrapper>
      </Box>
      <Box width="200px">
        <SkeletonWrapper
          loading={loading}
          width="150px"
          sx={{ mt: 1.5, mx: 'auto' }}
        >
          <Typography
            color="text.main"
            fontSize="0.8rem"
            pt={2}
            fontWeight={500}
          >
            {member?.name}
          </Typography>
        </SkeletonWrapper>
        <SkeletonWrapper
          loading={loading}
          width="100px"
          sx={{ mt: -0.5, mx: 'auto' }}
        >
          <Typography color="primary.main" fontSize="0.7rem" fontWeight={700}>
            {member?.position}
          </Typography>
        </SkeletonWrapper>
      </Box>
    </Box>
  );
}
