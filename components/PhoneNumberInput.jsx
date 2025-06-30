import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    useColorScheme,
} from "react-native";
import { Colors } from "../constants/colors";

const PhoneNumberInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    const formatPhoneNumber = (input) => {
        // Remove all non-digit characters
        let cleaned = input.replace(/\D/g, "");

        //Ensure it starts with 07
        if (!cleaned.startsWith("07") && cleaned.length > 0) {
            setError("Phone number must start with 07");
        }

        // Limit to 10 digits
        const limited = cleaned.slice(0, 10);

        // Apply 07X-XXXXXXX formatting (separate after 3 digits)
        let formatted = limited;
        if (limited.length > 3) {
            formatted = limited.slice(0, 3) + " " + limited.slice(3);
        }

        return formatted;
    };

    const handleChange = (text) => {
        const formatted = formatPhoneNumber(text);
        setPhoneNumber(formatted);

        // Validate phone number
        const digitsOnly = formatted.replace(/\D/g, "");
        if (!digitsOnly.startsWith("07")) {
            setError("Phone number must start with 07");
        } else if (digitsOnly.length < 10 && digitsOnly.length > 0) {
            setError("Please enter a valid 10-digit phone number");
        } else {
            setError("");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    { backgroundColor: theme.surface },
                    styles.input,
                    error ? styles.inputError : null,
                ]}
                keyboardType='phone-pad'
                value={phoneNumber}
                onChangeText={handleChange}
                placeholder='07X XXXXXXX'
                maxLength={11} // 07X-XXXXXXX is 11 characters
                {...props}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

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

export default PhoneNumberInput;
