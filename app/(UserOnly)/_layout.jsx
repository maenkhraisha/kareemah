// app/(UserOnly)/_layout.jsx
import { Stack } from "expo-router";
import UserOnly from "../../components/auth/UserOnly"; // Updated path

export default function UserOnlyLayout() {
    return (
        <UserOnly>
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}>
                <Stack.Screen name='requestTrip' />
                <Stack.Screen name='tripHistory' />
            </Stack>
        </UserOnly>
    );
}
