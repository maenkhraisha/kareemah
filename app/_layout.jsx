import { Slot, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors"; // Adjust the import path as necessary

import Sidebar from "./sidebar";

export default function Layout() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    return (
        <SafeAreaProvider>
            <StatusBar style='auto' />
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: theme.background,
                        color: theme.onBackground,
                    },
                ]}>
                <Sidebar />
                <View
                    style={[
                        styles.content,
                        {
                            backgroundColor: theme.background,
                            color: theme.onBackground,
                        },
                    ]}>
                    <Slot />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = {
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
};
