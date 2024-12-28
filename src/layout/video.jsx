import { Stack, Box } from "@mui/material";

const VideoFrame = () => {
    const src =
        "https://www.youtube.com/embed?listType=playlist&list=UUihFFPgjwPnv41vJ_8GmjoQ";
    const overlay = src + "&wmode=transparent";

    return (
        <Stack
            py={{ xs: 0, sm: 0, md: 0, lg: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{
                background: "linear-gradient(180deg, #FFFFFF 50%, #F9FAFB 50%)",
                aspectRatio: { xs: "1/1", md: "16/9" },
            }}
        >
            <Box
                width={{ xs: "80%", md: "60%", lg: "70%" }}
                height={{ xs: "50%", md: "60%", lg: "70%" }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    src={overlay}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Box>
        </Stack>
    );
};

export default VideoFrame;
