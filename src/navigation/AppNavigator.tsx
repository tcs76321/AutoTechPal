import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import VinLookupScreen from '../screens/VinLookupScreen';
import DocumentRepairScreen from '../screens/DocumentRepairScreen';
import DTCSearchScreen from '../screens/DTCSearchScreen';
import PartsFinderScreen from '../screens/PartsFinderScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="VIN Lookup" component={VinLookupScreen} />
            <Stack.Screen name="Document Repair" component={DocumentRepairScreen} />
            <Stack.Screen name="DTC Search" component={DTCSearchScreen} />
            <Stack.Screen name="Parts Finder" component={PartsFinderScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
