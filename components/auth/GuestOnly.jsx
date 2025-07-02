// components/auth/GuestOnly.jsx
import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import ThemeView from "../ThemeView";

const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user) {
            router.replace("/");
        }
    }, [authChecked, user]);

    if (!authChecked || user) {
        return (
            <Text style={{ textAlign: "center", marginTop: 20, fontSize: 28 }}>
                Loading...
            </Text>
        );
    }

    return children;
};

export default GuestOnly;
