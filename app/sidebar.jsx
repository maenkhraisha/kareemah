import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
    Dimensions,
    Image,
    useColorScheme,
} from "react-native";
import { useState, useRef } from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.7;

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    const toggleSidebar = () => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? -SIDEBAR_WIDTH : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
                <Image
                    source={require("../assets/img/hamburger.png")}
                    style={{
                        width: 30,
                        height: 30,
                        borderColor: theme.onBackground,
                        borderWidth: 1,
                        borderRadius: 3,
                        filter: "invert(1)",
                    }}
                    alt='Hamburger Menu'
                />
            </TouchableOpacity>

            <Animated.View
                style={[
                    styles.sidebar,
                    {
                        transform: [{ translateX: slideAnim }],
                    },
                ]}>
                <View style={styles.sidebarContent}>
                    <Link href='/' style={styles.link} onPress={toggleSidebar}>
                        <Text>Home</Text>
                    </Link>
                    <Link
                        href='/requestTrip'
                        style={styles.link}
                        onPress={toggleSidebar}>
                        <Text>Request Trip</Text>
                    </Link>
                    <Link
                        href='/about'
                        style={styles.link}
                        onPress={toggleSidebar}>
                        <Text>About</Text>
                    </Link>
                    <Link
                        href='/login'
                        style={styles.link}
                        onPress={toggleSidebar}>
                        <Text>Login</Text>
                    </Link>
                </View>
            </Animated.View>

            {isOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={toggleSidebar}
                />
            )}
        </>
    );
};

export default Sidebar;

const styles = StyleSheet.create({
    sidebar: {
        position: "absolute",
        top: 0,
        left: 0,
        width: SIDEBAR_WIDTH,
        height: "100%",
        backgroundColor: "#f0f0f0",
        padding: 20,
        zIndex: 100,
    },
    sidebarContent: {
        flex: 1,
        justifyContent: "center",
    },
    link: {
        marginBottom: 20,
        paddingVertical: 10,
    },
    menuButton: {
        position: "absolute",
        top: 30,
        left: 30,
        zIndex: 200,
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 50,
    },
});
