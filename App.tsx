import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "./src/styles/AppStyles"; // Import styles

export default function App() {
    return (
        <View style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>AutoTechPal</Text>
            </View>
        </View>
    );
}
