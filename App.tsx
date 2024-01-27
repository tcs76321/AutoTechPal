import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button } from "react-native";
import { appStyles } from "./src/styles/AppStyles"; // Import styles

export default function App() {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.mainText}>AutoTechPal</Text>
      <StatusBar style="auto" />
    </View>
  );
}
