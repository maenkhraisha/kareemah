import { SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemeView = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] || Colors.light;
    // Apply the theme styles to the container

    if (!safe) {
        return (
            <View
                style={[
                    styles.container,
                    { backgroundColor: theme.background },
                    style,
                ]}
                {...props}
            />
        );
    }

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

        justifyContent: "center",
        alignItems: "center",
        padding: 20, // Default padding
    },
});
