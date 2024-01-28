import React, { useState } from "react";
import { View, Text, Button, TextInput, ActivityIndicator } from "react-native";
import { appStyles } from "../styles/AppStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import useDecodeVinAPI from "../hooks/useDecodeVinAPI";

type VINLookupProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'VIN Lookup'>;
};

function VINLookupScreen({ navigation }: VINLookupProps) {
    const [vin, setVin] = useState('');
    const { vehicleInfo, isLoading, error, fetchVehicleInfo } = useDecodeVinAPI();

    return (
        <View style={appStyles.container}>
            <View style={appStyles.titleContainer}>
                <Text style={appStyles.titleText}>VIN Lookup</Text>
            </View>
            <TextInput
                style={appStyles.input}
                onChangeText={setVin}
                value={vin}
                placeholder="Enter VIN"
                testID='VINInput'
            />
            <Button
                title="Lookup VIN"
                onPress={() => fetchVehicleInfo(vin)}
                testID='VINLookupButton'
            />
            {isLoading && <ActivityIndicator size="large" />}
            {error && <Text style={appStyles.errorText}>Error: {error.message}</Text>}
            {vehicleInfo && (
                <View style={appStyles.infoContainer}>
                    <Text style={appStyles.infoText}>Year: {vehicleInfo.year}</Text>
                    <Text style={appStyles.infoText}>Make: {vehicleInfo.make}</Text>
                    <Text style={appStyles.infoText}>Model: {vehicleInfo.model}</Text>
                </View>
            )}
            <View style={appStyles.backButtonBottom}>
                <Button
                    title="Back"
                    onPress={() => navigation.goBack()}
                    testID='VINLookupBackButton'
                />
            </View>
        </View>
    );
}

export default VINLookupScreen;
