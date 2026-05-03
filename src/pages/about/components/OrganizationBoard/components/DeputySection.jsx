import { Box, Grid, Typography } from '@mui/material';
import MemberCard from './MemberCard';
import { DepartmentSection } from './DepartmentSection';

export const DeputySection = ({ deputy }) => {
  return (
    <Box>
      <Grid
        container
        display="flex"
        textAlign="left"
        alignItems="center"
        justifyContent="start"
      >
        <Grid item xs={6} md={2}>
          <MemberCard member={deputy.assigned_members?.[0]} />
        </Grid>
        <Grid
          item
          md={10}
          xs={6}
          textAlign="center"
          justifyContent="center"
          display="flex"
        >
          <Typography
            color="#A1A1A1"
            fontWeight={700}
            fontSize={{ xs: '2rem', md: '6rem' }}
            sx={{ opacity: 0.15 }}
            textAlign="left"
            ml={{ xs: 4, md: 10 }}
            mb={5}
          >
            {deputy.name}
          </Typography>
        </Grid>
      </Grid>
      {deputy.children.map((department) => (
        <DepartmentSection key={department.id} department={department} />
      ))}
    </Box>
  );
};
