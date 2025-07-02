import {
    StyleSheet,
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

import ThemeHamburger from "../components/ThemeHamburger";
import ThemeText from "../components/ThemeText";
import { useUser } from "../hooks/useUser";
import ThemeButton from "../components/ThemeButton";

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.7;

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    const { logout, user } = useUser();

    const toggleSidebar = () => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? -SIDEBAR_WIDTH : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            toggleSidebar();

            await logout();
        } catch (error) {
            console.error("Logout failed:", error);
            // Handle logout error (e.g., show a message to the user)
        }
    };

    return (
        <>
            <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
                <ThemeHamburger />
            </TouchableOpacity>

            <Animated.View
                style={[
                    styles.sidebar,
                    {
                        transform: [{ translateX: slideAnim }],
                    },
                ]}>
                <View
                    style={[
                        {
                            backgroundColor: theme.surface,
                            color: theme.onSurface,
                        },
                        styles.sidebarContent,
                    ]}>
                    <Link href='/' style={styles.link} onPress={toggleSidebar}>
                        <ThemeText title='Home' style={{ fontSize: 28 }} />
                    </Link>
                    {user && (
                        <Link
                            href='/addTrip'
                            style={styles.link}
                            onPress={toggleSidebar}>
                            <ThemeText
                                title='Add Trip'
                                style={{ fontSize: 28 }}
                            />
                        </Link>
                    )}
                    <Link
                        href='/about'
                        style={styles.link}
                        onPress={toggleSidebar}>
                        <ThemeText title='About' style={{ fontSize: 28 }} />
                    </Link>
                    {!user && (
                        <>
                            <Link
                                href='/login'
                                style={styles.link}
                                onPress={toggleSidebar}>
                                <ThemeText
                                    title='Login'
                                    style={{ fontSize: 28 }}
                                />
                            </Link>
                            <Link
                                href='/register'
                                style={styles.link}
                                onPress={toggleSidebar}>
                                <ThemeText
                                    title='Register'
                                    style={{ fontSize: 28 }}
                                />
                            </Link>
                        </>
                    )}

                    {user && (
                        <ThemeButton
                            style={styles.link}
                            onPress={handleLogout}
                            title='Logout'></ThemeButton>
                    )}
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

        zIndex: 100,
    },
    sidebarContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
