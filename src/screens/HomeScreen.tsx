import React from "react";
import { View, Button, Text } from "react-native";
import { appStyles } from "../styles/AppStyles";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import {SafeAreaView} from "react-native-safe-area-context";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>AutoTechPal</Text>
            </View>
            <View style={appStyles.bodyContainer}>
                <View style={appStyles.row}>
                    <Button
                        title="VIN Lookup"
                        onPress={() => navigation.navigate("VIN Lookup")}
                        testID="VINLookupButton"
                    />
                </View>
                <View style={appStyles.row}>
                    <Button
                        title="Document Repair"
                        onPress={() => navigation.navigate("Document Repair")}
                        testID="DocumentRepairButton"
                    />
                </View>
                <View style={appStyles.row}>
                    <Button
                        title="DTC Search"
                        onPress={() => navigation.navigate("DTC Search")}
                        testID="DTCSearchButton"
                    />
                </View>
                <View style={appStyles.row}>
                    <Button
                        title="Parts Finder"
                        onPress={() => navigation.navigate("Parts Finder")}
                        testID="PartsFinderButton"
                    />
                </View>
            </View>
            <View style={appStyles.footerContainer}>
                <Text style={appStyles.footerText}>Made by Trevor C. Stahl</Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
