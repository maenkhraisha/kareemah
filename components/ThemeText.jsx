import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemeText = ({ title, style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    return (
        <Text style={[{ color: theme.onBackground }, style]} {...props}>
            {title}
        </Text>
    );
};

export default ThemeText;

const styles = {};
