import { Link } from "expo-router";

const ThemeLink = ({ title, href, ...props }) => {
    return (
        <Link href={href} style={[styles.link, props.style]} {...props}>
            {title}
        </Link>
    );
};

export default ThemeLink;

const styles = {
    link: {
        color: "blue",
        textDecorationLine: "underline",
        fontSize: 16,
    },
};
