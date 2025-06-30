import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(
                email, // User email
                password // User password
            );
            console.log("User logged in successfully");
            // Fetch the user data after login
            const userData = await account.get();
            setUser(userData); // Set the user data in state
            console.log("User data:", userData);
        } catch (error) {
            console.error("Login error:", error);
            throw error; // Re-throw the error to handle it in the UI
        }
    }

    async function register(email, password) {
        try {
            await account.create(
                ID.unique(), // Unique user ID
                email, // User email
                password, // User password
                "Kareemah User" // Optional name
            );
            console.log("User registered successfully");
            // Optionally, you can log in the user immediately after registration
            await login(email, password);
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function logout() {
        // Implement logout logic here
        console.log("Logging out");
        try {
            await account.deleteSession("current"); // Delete the current session
            setUser(null);
            console.log("User logged out successfully");
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function getInitialUserValue() {
        try {
            const currentUser = await account.get();
            if (currentUser) {
                setUser(currentUser);
            }
        } catch (error) {
            setUser(null);
            console.error("Error fetching initial user data:", error);
            return null; // Return null if there's an error
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        !authChecked && getInitialUserValue();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    );
}
