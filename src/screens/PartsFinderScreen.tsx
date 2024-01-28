import React from "react";
import {View, Text, Button} from "react-native";
import { appStyles } from "../styles/AppStyles";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";

type PartsFinderProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Parts Finder'>;
}

function PartsFinderScreen({ navigation }: PartsFinderProps) {
    return (
        <View style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>Parts Finder</Text>
            </View>
            <View style={appStyles.backButtonBottom}>
                <Button title={"Back"} onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}

export default PartsFinderScreen;
