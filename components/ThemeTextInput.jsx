import { StyleSheet, TextInput, useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors";
import { useState } from "react";

const ThemeTextInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    const [error, setError] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder || "Enter text"}
                style={[
                    {
                        backgroundColor: theme.surface,
                    },
                    styles.input,
                    style,
                ]}
                {...props}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

export default ThemeTextInput;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 5,
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    inputError: {
        borderColor: "red",
    },
    error: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});
