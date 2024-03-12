import React from "react";
import {View, Text, Button} from "react-native";
import { appStyles } from "../styles/AppStyles";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import {SafeAreaView} from "react-native-safe-area-context";

type DocumentRepairScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Document Repair'>;
}

function DocumentRepairScreen({ navigation }: DocumentRepairScreenProps) {
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>Document Repair</Text>
            </View>
            <View style={appStyles.backButtonBottom}>
                <Button
                    title="Back"
                    onPress={() => navigation.goBack()}
                    testID='DocumentRepairBackButton'
                />
            </View>
        </SafeAreaView>
    );
}

export default DocumentRepairScreen;
