import { Grid } from '@mui/material';
import MemberCard from './MemberCard';

export const MemberListGrid = ({ members }) => {
  return (
    <Grid
      ml={0}
      container
      py={2}
      spacing={8}
      display="grid"
      sx={{
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr)) !important',
        gridAutoColumns: 'minmax(200px, 1fr)',
        overflowX: 'auto',
      }}
    >
      {members.map((member, index) => (
        <Grid key={member?.id || index} item md={3} xs={12} ml={3}>
          <MemberCard member={member} />
        </Grid>
      ))}
    </Grid>
  );
};
