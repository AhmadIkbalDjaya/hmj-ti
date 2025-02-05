import { Box, Typography, Stack, Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import dot from "../assets/dot.svg";
// import telLogo from '../assets/tel.svg';
// import classes from '../styles/heroFeedback.module.css';
import InputComponent from "../components/input";

// const styles = {
//     title: {
//         fontWeight: 200,
//         fontSize: 9,
//     },
//     contact: {
//         fontWeight: 600,
//         fontSize: 12,
//     }
// }

const Feedback = () => {
    const [data, setData] = useState();

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://amm4r.genbiuinam.org/api/message",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                },
            );

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const res = await response.json();
            console.log("Form submitted successfully:", res);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
        }
    };

    return (
        <Box position="relative" bgcolor={"#F9FAFB"}>
            <Box
                component="img"
                src={dot}
                height={{ xs: "20%", md: "35%" }}
                position="absolute"
                right={0}
                top={0}
                zIndex={1}
            />
            <Box
                component="img"
                src={dot}
                height={{ xs: "20%", md: "35%" }}
                position="absolute"
                left={0}
                bottom={0}
            ></Box>
            <Container maxWidth="lg" sx={{ pt: 10, pb: 20 }}>
                <Box
                    position="relative"
                    textAlign="center"
                    display="flex"
                    maxWidth={{ xs: "90%", md: "70%" }}
                    marginX="auto"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    zIndex={99}
                >
                    <Stack mb={7} gap={2} width={{ xs: "100%", md: "75%" }}>
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
                            Kirimkan pesan kepada kami untuk berbagi informasi,
                            permintaan, atau komentar apa pun yang ingin Anda
                            sampaikan. kami dengan senang hati dan akan
                            meresponsnya
                        </Typography>
                    </Stack>
                    <form onSubmit={handleSubmit}>
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
                                        ".MuiFormLabel-asterisk": {
                                            color: "primary.main",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} mt={2}>
                                <Button
                                    variant="contained"
                                    sx={{ textTransform: "capitalize", py: 1 }}
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
};

export default Feedback;
