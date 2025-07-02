// app/(UserOnly)/_layout.jsx
import { Stack } from "expo-router";
import UserOnly from "../../components/auth/UserOnly"; // Updated path
import { TripProvider } from "../../contexts/TripContext";

export default function UserOnlyLayout() {
    return (
        <TripProvider>
            <UserOnly>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}>
                    <Stack.Screen name='addTrip' />
                    <Stack.Screen name='tripHistory' />
                </Stack>
            </UserOnly>
        </TripProvider>
    );
}
