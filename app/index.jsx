import { StyleSheet, Image, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "../hooks/useUser";

import logo from "../assets/img/logo.png";

import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";
import ThemeView from "../components/ThemeView";

import { Colors } from "../constants/colors";

const Home = () => {
    const insets = useSafeAreaInsets();

    const { user } = useUser();
    console.log(user?.email);

    const email = user ? "Welcome Back " + user?.email : "Logged in";

    return (
        <ThemeView safe={true}>
            <View
                style={{
                    width: 120,
                    height: 120,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: Colors.primary,
                    borderWidth: 5,
                    borderRadius: 60,
                }}>
                <Image
                    source={logo}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                />
            </View>
            <Spacer height='10' />
            <ThemeText title='Kareemah Application' style={{ fontSize: 20 }} />
            <Spacer height='100' />
            <ThemeText
                title={email}
                style={{ textAlign: "center", fontSize: 16 }}
            />
        </ThemeView>
    );
};

export default Home;

const styles = StyleSheet.create({});
