import { Helmet } from "react-helmet-async";

export const HeadTags = (props) => {
    const { title } = props;
    const fullTitle = title ? `${title} | HMJ-TI UINAM` : "HMJ-TI UINAM";

    return (
        <Helmet>
            <title>{fullTitle}</title>
        </Helmet>
    );
};
