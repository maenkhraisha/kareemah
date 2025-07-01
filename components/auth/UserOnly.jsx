// components/auth/UserOnly.jsx
import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const UserOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && !user) {
            router.replace("/login");
        }
    }, [authChecked, user]);

    if (!authChecked) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    return children;
};

export default UserOnly;
