import { useEffect, useState } from "react";
import { Box, Typography, Grid, Pagination } from "@mui/material";
import Cards from "../components/card";
import patternTop from "../assets/patternTop.png";
import patternBottom from "../assets/patternBottom.png";

const Berita = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getArticles = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `https://amm4r.genbiuinam.org/api/news?page=${page}&perpage=8`,
            );
            const data = await res.json();
            setArticles(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticles();
    }, [page, getArticles]);

    const handlePagination = (_data, value) => {
        setPage(value);
    };

    return (
        <>
            <Box
                bgcolor="primary.main"
                height={375}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                position="relative"
            >
                <Box
                    component="img"
                    src={patternTop}
                    position="absolute"
                    left={{ xs: -200, md: -100 }}
                    top={0}
                    height="100%"
                />
                <Box
                    component="img"
                    src={patternBottom}
                    position="absolute"
                    right={{ xs: -200, md: -100 }}
                    bottom={0}
                    height="100%"
                />
                <Typography
                    position="absolute"
                    color="#fff"
                    fontWeight={600}
                    fontSize={{ xs: "2rem", md: "3rem" }}
                >
                    Berita & Kegiatan
                </Typography>
            </Box>
            <Box bgcolor="#F9FAFB">
                <Grid
                    height="fit-content"
                    container
                    py={9}
                    pb={4}
                    px={12}
                    alignItems="center"
                    spacing={3}
                    justifyContent="center"
                >
                    {loading
                        ? Array.from(new Array(4)).map((_, index) => (
                              <Grid item key={index}>
                                  <Cards.ArticleCard loading={true} />
                              </Grid>
                          ))
                        : articles?.data?.map((items) => (
                              <Grid
                                  item
                                  // xs={16}
                                  // sm={6}
                                  // md={4}
                                  // display='flex'
                                  // justifyContent='center'
                                  key={items.title}
                              >
                                  <Cards.ArticleCard data={items} />
                              </Grid>
                          ))}
                </Grid>
                <Box display="flex" justifyContent="center" pb={4}>
                    <Pagination
                        count={articles?.meta?.total_page}
                        color="primary"
                        onChange={handlePagination}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Berita;
