import { createContext, useState } from "react";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const TripContext = createContext();

const DATABASE_ID = "6864e32f000f2d266152";
const TRIP_COLLECTION_ID = "6864e38800014e6a4fdd";

export function TripProvider({ children }) {
    const [trips, setTrips] = useState([]);
    const { user } = useUser();

    async function getTrips() {
        try {
            return trips;
        } catch (error) {
            console.error("Error fetching trips:", error);
            throw error;
        }
    }
    async function getTripById(tripId) {
        return trips.find((trip) => trip.id === tripId);
    }
    async function addTrip(trip) {
        console.log("Adding trip:", trip);
        try {
            console.log(DATABASE_ID, TRIP_COLLECTION_ID);

            const newTrip = await databases.createDocument(
                DATABASE_ID,
                TRIP_COLLECTION_ID,
                ID.unique(),
                {
                    ...trip,
                    userId: user.id,
                    createdAt: new Date().toISOString(),
                },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            );
            setTrips((prevTrips) => [...prevTrips, newTrip]);
            return newTrip;
        } catch (error) {
            console.error("Error adding trip:", error);
            throw error;
        }
    }
    async function updateTrip(tripId, updatedTrip) {}
    async function deleteTrip(tripId) {}
    return (
        <TripContext.Provider
            value={{
                trips,
                setTrips,
                addTrip,
                updateTrip,
                deleteTrip,
                getTrips,
                getTripById,
            }}>
            {children}
        </TripContext.Provider>
    );
}
