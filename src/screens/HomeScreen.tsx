import React from "react";
import { View, Button, Text } from "react-native";
import { appStyles } from "../styles/AppStyles";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>AutoTechPal</Text>
            </View>
            <View style={appStyles.bodyContainer}>
                <View style={appStyles.row}>
                    <Button
                        title="VIN Lookup"
                        onPress={() => navigation.navigate("VIN Lookup")}
                    />
                </View>
                <View style={appStyles.row}>
                    <Button
                        title="Document Repair"
                        onPress={() => navigation.navigate("Document Repair")}
                    />
                </View>
                <View style={appStyles.row}>
                    <Button
                        title="DTC Search"
                        onPress={() => navigation.navigate("DTC Search")}
                    />
                </View>
                <View style={appStyles.row}>
                    <Button
                        title="Parts Finder"
                        onPress={() => navigation.navigate("Parts Finder")}
                    />
                </View>
            </View>
            <View style={appStyles.footerContainer}>
                <Text style={appStyles.footerText}>Made by Trevor C. Stahl</Text>
            </View>
        </View>
    );
}

export default HomeScreen;
