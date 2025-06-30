import { Image, useColorScheme } from "react-native";
import DarkHum from "../assets/img/hamburger_dark.png";
import LightHum from "../assets/img/hamburger_light.png";

const ThemeHamburger = () => {
    const colorScheme = useColorScheme();

    // Use the appropriate logo for dark or light mode
    const logo = colorScheme === "dark" ? LightHum : DarkHum;
    return <Image source={logo} style={{ width: 30, height: 30 }} />;
};

export default ThemeHamburger;
