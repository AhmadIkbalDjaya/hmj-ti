import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
// import Footer from '../components/footer';
import detailPic from "../assets/article/article.webp";
import { articles } from "../constants";
import { formatDate } from "../utils/formatDate";

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === Number(id));
    const formatted_date = formatDate(article.created_at);

    return (
        <Box
            py={4}
            display="flex"
            alignItems="center"
            flexDirection="column"
            bgcolor="#F9FAFB"
        >
            <Box textAlign="justify" width={{ xs: "85%", md: "69.5%" }}>
                <Typography
                    pb={2}
                    fontWeight={700}
                    fontSize={{ xs: 20, md: 28 }}
                    textAlign="center"
                >
                    {article.title}
                </Typography>
                <Box component="img" src={article.image} width="100%" />
                <Typography
                    fontWeight={300}
                    sx={{ opacity: 0.57 }}
                    py={2}
                    fontStyle="italic"
                >
                    Dipublikasikan pada {formatted_date}
                </Typography>
                {article.content?.split("\n").map((paragraph, index) => (
                    <Typography key={index} mt={index > 0 ? 1 : 0}>
                        {paragraph}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default ArticleDetail;
