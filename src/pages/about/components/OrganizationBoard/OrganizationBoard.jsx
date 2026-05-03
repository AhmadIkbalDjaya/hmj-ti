import { Box, Stack, Typography } from '@mui/material';
import { styles } from '../../styles';
import { useOrganizationBoard } from './useOrganizationBoard';
import { MemberListGrid } from './components/MemberListGrid';
import { DeputySection } from './components/DeputySection';

export default function OrganizationBoard() {
  const { executive_board, deputies, loading } = useOrganizationBoard();

  if (loading) {
    return (
      <Typography textAlign="center" py={10}>
        Loading...
      </Typography>
    );
  }

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
          <MemberListGrid members={executive_board} />
        </Stack>
      </Box>

      {/* Deputy Board Section */}
      <Typography sx={styles.title2} pb={2}>
        Bidang - Bidang
      </Typography>

      {deputies.map((deputy) => (
        <DeputySection key={deputy.id} deputy={deputy} />
      ))}
    </>
  );
}
