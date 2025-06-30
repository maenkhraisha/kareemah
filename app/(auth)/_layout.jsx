// app/(auth)/_layout.jsx
import { Stack } from "expo-router";
// import GuestOnly from "../../components/auth/GuestOnly";

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "fade",
            }}>
            <Stack.Screen name='login' />
            <Stack.Screen name='register' />
        </Stack>
    );
}
