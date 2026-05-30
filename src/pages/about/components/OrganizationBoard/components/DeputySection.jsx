import { Box, Grid, Skeleton, Typography } from '@mui/material';
import MemberCard from './MemberCard';
import { DepartmentSection } from './DepartmentSection';

export const DeputySection = ({ deputy, loading = false }) => {
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
          <MemberCard member={deputy.assigned_members?.[0]} loading={loading} />
        </Grid>
        <Grid
          item
          md={10}
          xs={6}
          textAlign="center"
          justifyContent="center"
          display="flex"
        >
          {loading ? (
            <Skeleton
              animation="wave"
              variant="text"
              sx={{
                width: { xs: '75%', md: '60%' },
                height: { xs: 64, md: 140 },
                ml: { xs: 4, md: 10 },
                mb: 5,
              }}
            />
          ) : (
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
          )}
        </Grid>
      </Grid>
      {deputy.children.map((department) => (
        <DepartmentSection
          key={department.id}
          department={department}
          loading={loading}
        />
      ))}
    </Box>
  );
};
