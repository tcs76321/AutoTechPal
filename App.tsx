import React from "react";
import { Text, View, Button } from "react-native";
import { appStyles } from "./src/styles/AppStyles"; // Import styles

export default function App() {
    return (
        <View style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>AutoTechPal</Text>
            </View>
            <View style={appStyles.bodyContainer}>
                <View style={appStyles.row}>
                    <Button
                        title="VIN Lookup"
                        onPress={() => {}}
                    />
                    <Button
                        title="Document Repair"
                        onPress={() => {}}
                    />
                </View>
                <View style={appStyles.row}>
                    <Button title="DTC Lookup" onPress={() => {}} />
                    <Button title="Maint Schedule" onPress={() => {}} />
                </View>
                <View style={appStyles.row}>
                    <Button title="BG Products" onPress={() => {}} />
                    <Button title="Cost Estimator" onPress={() => {}} />
                </View>
                <View style={appStyles.row}>
                    <Button title="Parts Finder" onPress={() => {}} />
                    {/*<Button title="Button 8" onPress={() => {}} />*/}
                </View>
            </View>
            <View style={appStyles.footerContainer}>
                <Text style={appStyles.footerText}>Made by Trevor C. Stahl</Text>
            </View>
        </View>
    );
}
