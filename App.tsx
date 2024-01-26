import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/styles/AppStyles'; // Import styles

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AutoTechPal</Text>
      <StatusBar style="auto" />
    </View>
  );
}
