import { Box, Skeleton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";
import { useEffect, useState } from "react";
import { api } from "../lib/api";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [highlights, setHighlight] = useState([]);
    const [loading, setLoading] = useState(false);

    const getHighlight = async () => {
        try {
            setLoading(true);
            const res = await api.get("/news?perpage=3");
            setHighlight(res.data);
            setActiveIndex(0);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getHighlight();
    }, []);

    return (
        <Box height="calc(100vh - 80px)" width="100%" position="relative">
            <Box
                className="pagination"
                sx={{ position: "absolute" }}
                paddingBottom={{ xs: 1, md: 9.8 }}
                paddingLeft={{ md: 17.7 }}
                right={0}
                left={0}
                marginLeft={{ xs: "auto", md: 0 }}
                marginRight="auto"
                zIndex={999}
                color="primary.main"
            />
            <Swiper
                // onSlideChange={(swiper) =>
                //     setActiveIndex(swiper.realIndex)
                // }
                onSlideChangeTransitionStart={(swiper) =>
                    setActiveIndex(swiper.realIndex)
                }
                position="relative"
                speed={720}
                effect="fade"
                // spaceBetween={30}
                centeredSlides={true}
                loop={true}
                parallax={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".pagination",
                }}
                navigation={true}
                modules={[Parallax, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {highlights?.data?.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <Box component="img" src={slide.image} width="100%" />
                    </SwiperSlide>
                ))}
                {
                    <>
                        <Box
                            position="absolute"
                            top={0}
                            marginX={{ xs: "auto", md: 0 }}
                            pt={16.1}
                            color="#ffffff"
                            zIndex={10}
                            left={{ xs: 0 }}
                            right={{ xs: 0 }}
                            width={{ xs: "85%", md: "35.8%" }}
                            pl={{ xs: 0, md: 17.5 }}
                            sx={{ pointerEvents: "none" }}
                        >
                            {/* <Slide direction='right'> */}
                            <Typography
                                // fontSize={31.9}
                                fontSize={{ xs: "8vw", md: "2.5vw" }}
                                lineHeight={1.4}
                                fontWeight={{ xs: 700, md: 600 }}
                                textAlign="start"
                                className="text"
                            >
                                {loading ? (
                                    <Skeleton />
                                ) : (
                                    highlights?.data?.[activeIndex]?.title
                                )}
                            </Typography>
                            {/* </Slide> */}
                            <Typography
                                pt={{ xs: 3, md: 5 }}
                                // fontSize={13.3}
                                fontSize={{ xs: "3.5vw", md: "1vw" }}
                                fontWeight={300}
                                pl={{ xs: 0, md: 0.5 }}
                                textAlign="justify"
                            >
                                {loading ? (
                                    <>
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                    </>
                                ) : (
                                    highlights?.data?.[
                                        activeIndex
                                    ]?.content.split("\n")[0]
                                )}
                            </Typography>
                        </Box>
                    </>
                }
                <Box
                    className="slideContainer"
                    sx={{
                        opacity: "80%",
                        "::before": {
                            display: "block",
                            position: "absolute",
                            content: '""',
                            left: "90%",
                            opacity: "0.35",
                            height: "100%",
                            width: "101px",
                            bgcolor: "#BA1F1A",
                            zIndex: "0",
                        },
                        pointerEvents: "none",
                    }}
                    zIndex={5}
                    left={0}
                    top={0}
                    position="absolute"
                    bgcolor={{ xs: "#BA1F1A", md: "#BA1F1A" }}
                    height="calc(100vh - 80px)"
                    width={{ xs: "100%", md: "50.5%" }}
                />
            </Swiper>
        </Box>
    );
};

export default Hero;
