import CloseIcon from '@mui/icons-material/Close';
import { closeSnackbar, SnackbarProvider } from 'notistack';

export default function AppSnackbarProvider({ children }) {
  return (
    <SnackbarProvider
      variant="info"
      maxSnack={5}
      preventDuplicate
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      action={(snackbarId) => (
        <CloseIcon
          onClick={() => closeSnackbar(snackbarId)}
          sx={{ cursor: 'pointer' }}
          fontSize="small"
        />
      )}
    >
      {children}
    </SnackbarProvider>
  );
}
