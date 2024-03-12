import React from "react";
import {View, Text, Button} from "react-native";
import { appStyles } from "../styles/AppStyles";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import {SafeAreaView} from "react-native-safe-area-context";

type DTCSearchProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'DTC Search'>;
}

function DTCSearchScreen({ navigation }: DTCSearchProps) {
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>DTC Search</Text>
            </View>
            <View style={appStyles.backButtonBottom}>
                <Button
                    title="Back"
                    onPress={() => navigation.goBack()}
                    testID='DTCSearchBackButton'
                />
            </View>
        </SafeAreaView>
    );
}

export default DTCSearchScreen;
