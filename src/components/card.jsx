import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import imageBorder from "../assets/ekrefCard.png";

import whatsappLogo from "../assets/products/whatsapp.svg";
import instagramLogo from "../assets/products/instagram.svg";
import { formatDate } from "../utils/formatDate";
import { formatPhoneNumber } from "../utils/formatPhone";

const ArticleCard = ({ data }) => {
    return (
        <Card
            sx={{
                height: "300px",
                position: "relative",
                width: "250px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
            }}
        >
            <CardMedia
                loading="lazy"
                component="img"
                src={data.image}
                height="44%"
                sx={{ width: "90%", mx: "auto", mt: "20px" }}
            />
            <CardContent sx={{ paddingTop: 0 }}>
                <Typography
                    textAlign="left"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    fontWeight={700}
                    fontSize={20}
                    pt={1}
                    color="text.main"
                    textOverflow="ellipsis"
                >
                    {data.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="justify"
                    fontSize={11}
                    pt={1}
                    sx={{
                        WebkitLineClamp: "3",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to={`/berita-dan-kegiatan/${data.id}`}>
                    <Typography
                        color="primary.main"
                        fontSize={11}
                        fontWeight={500}
                        pb={3}
                        pr={3}
                        right={0}
                        position="absolute"
                        bottom={0}
                    >
                        Baca Selengkapnya
                    </Typography>
                </NavLink>
            </CardActions>
        </Card>
    );
};

export const ProductCard = ({ data }) => {
    const formattedDate = formatDate(data.created_at);
    return (
        <Card
            sx={{
                boxShadow: "0px 4px 22px -6px rgba(0, 0, 0, 0.12)",
                position: "relative",
                display: "flex",
                height: { xs: "auto", sm: "250px" },
                maxHeight: "500px",
                width: { xs: "auto", sm: "580px" },
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 2,
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            <Box height={{ xs: "40%", sm: "90%", md: "90%" }} width="100%">
                <CardMedia
                    loading="lazy"
                    component="img"
                    height="100%"
                    width="100%"
                    src={data.image}
                    sx={{ objectFit: "contain" }}
                />
            </Box>
            <CardContent>
                <Typography
                    fontWeight={600}
                    fontSize={13}
                    color="#ACACAC"
                    letterSpacing={1.5}
                >
                    {formattedDate}
                </Typography>
                <Typography
                    textAlign="left"
                    color="#BA1F1A"
                    fontWeight={600}
                    fontSize="1.2rem"
                    pt={1}
                >
                    {data.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="#454F5B"
                    textAlign="justify"
                    fontSize="0.875rem"
                    py={1}
                    width="85%"
                >
                    {data.description}
                </Typography>
                <Stack
                    flexDirection={{ xs: "column", md: "row" }}
                    mt={1}
                    gap={{ xs: 1, md: 2 }}
                    justifyContent="start"
                    alignItems="start"
                >
                    <Stack
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                    >
                        <a
                            href={`https://wa.me/62${data.contact.slice(1)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: "none",
                                display: "flex",
                                gap: 8,
                            }}
                        >
                            <Box
                                loading="lazy"
                                component="img"
                                src={whatsappLogo}
                                width={18}
                            />
                            <Typography
                                fontSize={{ xs: "0.7rem", md: "0.9rem" }}
                                fontWeight={500}
                                color="text.secondary"
                            >
                                {formatPhoneNumber(data.contact)}
                            </Typography>
                        </a>
                    </Stack>
                    <Stack
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                    >
                        <a
                            href="https://www.instagram.com/hmjti_uinam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: "none",
                                display: "flex",
                                gap: 8,
                            }}
                        >
                            <Box
                                component="img"
                                src={instagramLogo}
                                width={18}
                            />
                            <Typography
                                fontSize={{ xs: "0.7rem", md: "0.9rem" }}
                                fontWeight={500}
                                color="text.secondary"
                            >
                                @hmjti_uinam
                            </Typography>
                        </a>
                    </Stack>
                </Stack>
                <Box
                    loading="lazy"
                    component="img"
                    position="absolute"
                    bottom={0}
                    right={{ xs: -10, md: 0 }}
                    height={{ xs: "50%", sm: "80%" }}
                    src={imageBorder}
                />
            </CardContent>
        </Card>
    );
};

const Cards = {
    ArticleCard,
    ProductCard,
};

export default Cards;
