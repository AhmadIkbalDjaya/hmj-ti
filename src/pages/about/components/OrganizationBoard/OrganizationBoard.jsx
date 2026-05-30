import { Box, Stack, Typography } from '@mui/material';
import { styles } from '../../styles';
import { useOrganizationBoard } from './useOrganizationBoard';
import { MemberListGrid } from './components/MemberListGrid';
import { DeputySection } from './components/DeputySection';

const createSkeletonMembers = (count, prefix = 'skeleton-member') =>
  Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-${index}`,
  }));

const skeletonDeputies = Array.from({ length: 2 }, (_, deputyIndex) => ({
  id: `skeleton-deputy-${deputyIndex}`,
  assigned_members: createSkeletonMembers(
    1,
    `skeleton-deputy-member-${deputyIndex}`,
  ),
  children: Array.from({ length: 2 }, (_, departmentIndex) => ({
    id: `skeleton-department-${deputyIndex}-${departmentIndex}`,
    children: [
      {
        id: `skeleton-leader-${deputyIndex}-${departmentIndex}`,
        level: 3,
        assigned_members: createSkeletonMembers(
          1,
          `skeleton-leader-member-${deputyIndex}-${departmentIndex}`,
        ),
      },
      {
        id: `skeleton-staff-${deputyIndex}-${departmentIndex}`,
        level: 4,
        assigned_members: createSkeletonMembers(
          3,
          `skeleton-staff-member-${deputyIndex}-${departmentIndex}`,
        ),
      },
    ],
  })),
}));

export default function OrganizationBoard() {
  const { executive_board, deputies, loading } = useOrganizationBoard();
  const displayedExecutiveBoard = loading
    ? createSkeletonMembers(4)
    : executive_board;
  const displayedDeputies = loading ? skeletonDeputies : deputies;

  return (
    <>
      <Box
        py={4}
        display="flex"
        flexDirection="column"
        id="struktur-organisasi"
      >
        <Typography
          color="primary.main"
          fontWeight={700}
          textAlign="center"
          fontSize="2rem"
          className="heading"
        >
          Pengurus HMJ-TI
        </Typography>

        {/* Executive Board Section */}
        <Stack py={8}>
          <Typography sx={styles.title2}>Presidium</Typography>
          <MemberListGrid members={displayedExecutiveBoard} loading={loading} />
        </Stack>
      </Box>

      {/* Deputy Board Section */}
      <Typography sx={styles.title2} pb={2}>
        Bidang - Bidang
      </Typography>

      {displayedDeputies.map((deputy) => (
        <DeputySection key={deputy.id} deputy={deputy} loading={loading} />
      ))}
    </>
  );
}
