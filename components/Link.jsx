import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or any other icon library

const Link = ({
    title,
    onPress,
    color = "#0066cc",
    fontSize = 16,
    underline = true,
    iconName,
    iconPosition = "left",
    iconSize = 16,
    style,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style]}
            activeOpacity={0.7}>
            <View style={styles.linkContent}>
                {iconName && iconPosition === "left" && (
                    <Ionicons
                        name={iconName}
                        size={iconSize}
                        color={color}
                        style={styles.leftIcon}
                    />
                )}
                <Text
                    style={[
                        styles.text,
                        { color, fontSize },
                        underline && styles.underline,
                        textStyle,
                    ]}>
                    {title}
                </Text>
                {iconName && iconPosition === "right" && (
                    <Ionicons
                        name={iconName}
                        size={iconSize}
                        color={color}
                        style={styles.rightIcon}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
    },
    linkContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontWeight: "500",
    },
    underline: {
        textDecorationLine: "underline",
    },
    leftIcon: {
        marginRight: 8,
    },
    rightIcon: {
        marginLeft: 8,
    },
});

export default Link;
