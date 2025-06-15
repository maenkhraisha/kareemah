import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import logo from "../assets/img/logo.jpg"; // Adjust the path as necessary
import { Colors } from "../constants/colors";

const Home = () => {
    const insets = useSafeAreaInsets();

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    return (
        <View style={styles.container}>
            <Image
                source={logo}
                style={{ width: 100, height: 100, marginBottom: 20 }}
            />
            <Text style={{ marginBottom: 30 }}>Kareemah Application</Text>
            <Button
                onPress={() => router.push("/login")}
                style={styles.link}
                title='Register'
                accessibilityLabel='Learn more about this purple button'></Button>
            <Link
                href='/request_trip'
                title='Request Trip'
                style={[
                    styles.link,
                    { marginTop: 20, color: theme.onBackground },
                ]}
                accessibilityLabel='Learn more about this purple button'>
                Request a Trip
            </Link>
            <Link
                href='/about'
                title='About'
                style={[
                    styles.link,
                    { marginTop: 20, color: theme.onBackground },
                ]}
                accessibilityLabel='Learn more about this purple button'>
                <Text>About</Text>
            </Link>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },

    link: {
        marginTop: 20,
        fontSize: 18,
        borderBottomWidth: 1,
    },
});
