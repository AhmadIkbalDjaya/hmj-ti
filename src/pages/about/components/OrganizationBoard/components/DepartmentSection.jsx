import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { styles } from '../../../styles';
import { MemberListGrid } from './MemberListGrid';

export const DepartmentSection = ({ department, loading = false }) => {
  let leader = null;
  let members = [];

  department.children.forEach((item) => {
    if (item.level == 3) {
      leader = item.assigned_members?.[0];
    }
    if (item.level == 4) {
      item.assigned_members.forEach((member) => {
        members.push(member);
      });
    }
  });

  const allMembers = leader ? [leader, ...members] : members;

  return (
    <Box py={4}>
      <Grid container>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={10} pl={{ xs: 0, md: 8 }}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ width: { xs: '45%', md: '25%' }, height: 32 }}
            />
          ) : (
            <Typography sx={styles.title2}>{department.name}</Typography>
          )}
          <MemberListGrid members={allMembers} loading={loading} />
        </Grid>
      </Grid>
    </Box>
  );
};
