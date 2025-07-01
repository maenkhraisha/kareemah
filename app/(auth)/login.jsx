import {
    Keyboard,
    StyleSheet,
    Touchable,
    TouchableWithoutFeedback,
} from "react-native";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";

import { Colors } from "../../constants/colors";

import Spacer from "../../components/Spacer";
import ThemeLink from "../../components/ThemeLink";
import ThemeButton from "../../components/ThemeButton";
import ThemeTextInput from "../../components/ThemeTextInput";
import { useState } from "react";
import PhoneNumberInput from "../../components/PhoneNumberInput";

import { useUser } from "../../hooks/useUser";
import { useNavigation } from "expo-router";

const login = () => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const navigation = useNavigation();

    const { login } = useUser();

    const handleSubmit = async () => {
        setError(null);
        try {
            // Handle login logic here
            const res = await login(email, password);

            navigation.navigate("index");

            if (!email || !password) {
                console.error("Email and password are required");
                return;
            }
        } catch (error) {
            setError(error.message);
            // Handle error (e.g., show a message to the user)
            return;
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                // Dismiss keyboard on background press
                if (Keyboard) {
                    Keyboard.dismiss();
                }
            }}>
            <ThemeView>
                <Spacer height='10' />
                <ThemeText title='Login to your Account' />

                <Spacer height='100' />

                {/* <PhoneNumberInput /> */}
                <ThemeTextInput
                    placeholder='Enter Email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemeTextInput
                    placeholder='Enter Password'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <Spacer height='100' />

                <ThemeButton
                    onPress={handleSubmit}
                    title='Login'
                    keyboardType='numeric'
                    value={phone}
                />

                <Spacer height='10' />

                {error ? (
                    <ThemeText title={error} style={{ color: "red" }} />
                ) : null}

                <Spacer height='100' />

                <ThemeLink href='/register' title='Register instead' />
            </ThemeView>
        </TouchableWithoutFeedback>
    );
};

export default login;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        minWidth: 150,
        borderRadius: 5,
        alignItems: "center",
    },
    pressed: {
        opacity: 0.7,
    },
});
