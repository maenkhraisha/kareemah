import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";

import Spacer from "../../components/Spacer";
import ThemeLink from "../../components/ThemeLink";
import ThemeButton from "../../components/ThemeButton";
import { useState } from "react";
import ThemeTextInput from "../../components/ThemeTextInput";
import { useUser } from "../../hooks/useUser";

const register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { register } = useUser();

    const handleSubmit = async () => {
        setError(null);
        // Handle register logic here
        try {
            if (!email || !password) {
                console.error("Email and password are required");
                return;
            }
            await register(email, password);
        } catch (error) {
            setError(error.message);
            // Handle error (e.g., show a message to the user)
            return;
        }
        console.log("Register button pressed");
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
                <ThemeText title='Create a New Account' />
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

                <ThemeButton onPress={handleSubmit} title='Register' />

                <Spacer height='10' />
                {error ? (
                    <ThemeText
                        title={error}
                        style={{ color: "red", textAlign: "center" }}
                    />
                ) : null}

                <Spacer height='100' />

                <ThemeLink href='/login' title='Login instead' />
            </ThemeView>
        </TouchableWithoutFeedback>
    );
};

export default register;

const styles = StyleSheet.create({});
