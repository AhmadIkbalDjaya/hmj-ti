import { Box, Typography, Stack, Button, Container, Grid } from '@mui/material';
import dot from '../../../../assets/dot.svg';
import InputComponent from '../../../../components/Input';
import { useFeedbackForm } from './useFeedbackForm';
import './FeedbackForm.css';

export default function FeedbackForm() {
  const { loading, handleChange, handleSubmit } = useFeedbackForm();

  return (
    <Box position="relative" bgcolor={'#F9FAFB'}>
      <Box
        component="img"
        src={dot}
        height={{ xs: '20%', md: '35%' }}
        position="absolute"
        right={0}
        top={0}
        zIndex={1}
      />
      <Box
        component="img"
        src={dot}
        height={{ xs: '20%', md: '35%' }}
        position="absolute"
        left={0}
        bottom={0}
      ></Box>
      <Container maxWidth="lg" sx={{ pt: 10, pb: 20 }}>
        <Box
          position="relative"
          textAlign="center"
          display="flex"
          maxWidth={{ xs: '90%', md: '70%' }}
          marginX="auto"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          zIndex={99}
        >
          <Stack mb={7} gap={2} width={{ xs: '100%', md: '75%' }}>
            <Typography
              variant="h1"
              fontWeight={700}
              className="heading"
              color="primary.main"
              fontSize={{ xs: 21, md: 30 }}
            >
              Kirimkan Pesan kepada Kami
            </Typography>
            <Typography fontSize={{ xs: 13, md: 14 }} pt={4}>
              Kirimkan pesan kepada kami untuk berbagi informasi, permintaan, atau komentar apa pun
              yang ingin Anda sampaikan. kami dengan senang hati dan akan meresponsnya
            </Typography>
          </Stack>
          <form onSubmit={handleSubmit} id="feedbackForm">
            <Grid
              container
              columnSpacing={5}
              rowSpacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} md={6}>
                <InputComponent
                  id="nama"
                  name="name"
                  label="Nama Lengkap"
                  required={true}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputComponent
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputComponent
                  id="tel"
                  type="tel"
                  name="contact"
                  label="Telepon/Whatsapp"
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputComponent
                  id="instansi"
                  label="Instansi"
                  name="agency"
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <InputComponent
                  id="deskripsi"
                  label="Deskripsi"
                  name="description"
                  required={true}
                  multiline={true}
                  handleChange={handleChange}
                  sx={{
                    '.MuiFormLabel-asterisk': {
                      color: 'primary.main',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} mt={2}>
                <Button
                  disabled={loading}
                  variant="contained"
                  sx={{ textTransform: 'capitalize', py: 1 }}
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
