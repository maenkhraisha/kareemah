import { StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../constants/colors";

const ThemeButton = ({ style, title, onPress, ...props }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.btn,
                pressed && styles.pressed,
                style,
            ]}
            {...props}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default ThemeButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "600", // Added for better visibility
    },
});
