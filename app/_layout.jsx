import { Stack } from "expo-router";
import { UserProvider } from "../context/UserContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ThemeView from "../components/ThemeView";
import Sidebar from "./sidebar";

export default function RootLayout() {
    return (
        <UserProvider>
            <SafeAreaProvider>
                <StatusBar style='auto' />
                <ThemeView style={{ flex: 1 }}>
                    <Sidebar />
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
                </ThemeView>
            </SafeAreaProvider>
        </UserProvider>
    );
}
