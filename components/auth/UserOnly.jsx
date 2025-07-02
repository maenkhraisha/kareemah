// components/auth/UserOnly.jsx
import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const UserOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user === null) {
            router.replace("/login");
        }
    }, [authChecked, user]);

    if (!authChecked || !user) {
        return (
            <Text style={{ textAlign: "center", marginTop: 20, fontSize: 28 }}>
                Loading...
            </Text>
        );
    }

    return children;
};

export default UserOnly;
