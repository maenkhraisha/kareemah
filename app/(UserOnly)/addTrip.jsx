import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
} from "react-native";
import ThemeView from "../../components/ThemeView";
import ThemeTextInput from "../../components/ThemeTextInput";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import { useState } from "react";
import ThemeButton from "../../components/ThemeButton";
import { useTrip } from "../../hooks/useTrip";
import { router, useRouter } from "expo-router";

const addTrip = () => {
    const [startLocation, setStartLocation] = useState("");
    const [endLocation, setEndLocation] = useState("");
    const [date, setDate] = useState("");
    const [startHour, setStartHour] = useState("");
    const [endHour, setEndHour] = useState("");
    const [price, setPrice] = useState("");

    const [loading, setLoading] = useState(false);

    const { addTrip } = useTrip();
    const router = useRouter();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (
                !startLocation.trim() ||
                !endLocation.trim() ||
                !date.trim() ||
                !startHour.trim() ||
                !endHour.trim() ||
                !price.trim()
            ) {
                alert("Please fill in all fields");
            }
            await addTrip({
                startLocation,
                endLocation,
                date,
                startHour,
                endHour,
                price: parseInt(price, 10),
            });

            setStartLocation("");
            setEndLocation("");
            setDate("");
            setStartHour("");
            setEndHour("");
            setPrice("");

            router.replace("/");
        } catch (error) {
            console.error("Error adding trip:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemeView>
                <ThemeText title='Add trip' />
                <Spacer />
                <ThemeTextInput
                    placeholder='Start Location'
                    onChangeText={setStartLocation}
                    value={startLocation}
                />
                <Spacer height='10' />
                <ThemeTextInput
                    placeholder='End Location'
                    onChangeText={setEndLocation}
                    value={endLocation}
                />
                <Spacer height='10' />

                <ThemeTextInput
                    placeholder='price'
                    onChangeText={setPrice}
                    value={price}
                />
                <Spacer height='10' />

                <ThemeTextInput
                    placeholder='trip date'
                    onChangeText={setDate}
                    value={date}
                />

                <Spacer height='10' />

                <ThemeTextInput
                    placeholder='From hour'
                    onChangeText={setStartHour}
                    value={startHour}
                />

                <Spacer height='10' />

                <ThemeTextInput
                    placeholder='To hour'
                    onChangeText={setEndHour}
                    value={endHour}
                />

                <ThemeButton
                    onPress={handleSubmit}
                    disabled={loading}
                    title={loading ? "Loading..." : "Add Trip"}
                />
            </ThemeView>
        </TouchableWithoutFeedback>
    );
};

export default addTrip;

const styles = StyleSheet.create({});
