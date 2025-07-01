import { Stack } from "expo-router";
import { UserProvider } from "../contexts/UserContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ThemeView from "../components/ThemeView";
import Sidebar from "./sidebar";
import { View } from "react-native";

export default function RootLayout() {
    return (
        <UserProvider>
            <SafeAreaProvider>
                <StatusBar style='auto' />
                {/* Override ThemeView's default alignment for the root layout */}
                <ThemeView
                    style={{
                        flex: 1,
                        justifyContent: undefined,
                        alignItems: undefined,
                    }}>
                    {/* The Stack navigator should be wrapped in a View to take up available space */}
                    <View style={{ flex: 1, width: "100%" }}>
                        <Stack
                            screenOptions={{
                                headerShown: false,
                            }}>
                            {/* Public routes */}
                            <Stack.Screen name='index' />
                            <Stack.Screen name='(auth)' />
                            <Stack.Screen name='about' />

                            {/* Protected routes group */}
                            <Stack.Screen name='(UserOnly)' />
                        </Stack>
                    </View>
                    {/* Sidebar should be rendered on top of the content */}
                    <Sidebar />
                </ThemeView>
            </SafeAreaProvider>
        </UserProvider>
    );
}
