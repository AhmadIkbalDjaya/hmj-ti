import { Box } from '@mui/material';
import dot from '../../../assets/dot.svg';

export const DotPattern = () => {
  const dotPositions = [
    { left: 0, top: { xs: '20rem', sm: '25rem', md: '30rem' } },
    { left: 0, top: { xs: '155rem', sm: '150rem', md: '120rem' } },
    { left: 0, top: { xs: '222.5rem', sm: '215rem', md: '190rem' } },
    { left: 0, top: { xs: '285rem', sm: '280rem', md: '250rem' } },
    { right: 0, top: { xs: '87.5rem', sm: '72.5rem', md: '40rem' } },
    { right: 0, top: { xs: '130rem', sm: '125rem', md: '92.5rem' } },
    { right: 0, top: { xs: '195rem', sm: '190rem', md: '155rem' } },
    { right: 0, top: { xs: '255rem', sm: '250rem', md: '225rem' } },
  ];
  return (
    <>
      {dotPositions.map((dotConfig, index) => (
        <Box
          key={index}
          loading="lazy"
          component="img"
          src={dot}
          position="absolute"
          width={{ xs: '20%', md: '10%' }}
          left={dotConfig.left}
          right={dotConfig.right}
          top={dotConfig.top}
          zIndex={2}
        />
      ))}
    </>
  );
};
