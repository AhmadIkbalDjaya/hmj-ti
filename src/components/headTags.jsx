import { Helmet } from "react-helmet-async";
import logo from "../../public/logo.jpg";

export const HeadTags = (props) => {
    const { title } = props;
    const fullTitle = title ? `${title} | HMJ-TI UINAM` : "HMJ-TI UINAM";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta property="og:image" key="og:image" content={logo} />
        </Helmet>
    );
};
