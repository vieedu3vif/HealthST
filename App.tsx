import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPatient from './src/screens/home/ListPatient'; 
import InforPatient from './src/screens/home/InforPatient';
import HearRate from './src/screens/home/HeartRate';
import Temperature from './src/screens/home/Temperature';
import Spo2 from './src/screens/home/Spo2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListPatient">
        <Stack.Screen name="ListPatient" component={ListPatient} options={{ title: 'Danh sách bệnh nhân' }} />
        <Stack.Screen name="InforPatient" component={InforPatient} options={{ title: 'Thông tin bệnh nhân' }} />
        <Stack.Screen name="HeartRate" component={HearRate} options={{ title: 'Nhịp tim' }} />
        <Stack.Screen name="Temperature" component={Temperature} options={{ title: 'Nhiệt độ' }} />
        <Stack.Screen name="SpO2" component={Spo2} options={{ title: 'SpO2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
