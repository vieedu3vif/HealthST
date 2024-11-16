import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPatient from "../home/ListPatient"; 
import InforPatient from "../home/InforPatient";
import HearRate from "../home/HeartRate";
import Temperature from "../home/Temperature";
import Spo2 from "../home/Spo2";
import fetchLatestTelemetryDataDevice from "../../assets/API/APIGetAttrs";
import requestNotificationPermission from "../../ultis/request";
import sendLocalNotification from "../../ultis/Notify";
import BackgroundFetch from "react-native-background-fetch";
import Login from "../welcome/Login";
import Signup from "../welcome/Signup";

const Stack = createNativeStackNavigator();

export default function Appnavigation() {
  const [temperature, setTemperature] = useState([null, null]);
  const [spo2, setSpo2] = useState([null, null]);
  const [heart, setHeart] = useState([null, null]);

  useEffect(() => {
    // Cấp quyền thông báo
    const initializeNotificationPermission = async () => {
      const permissionGranted = await requestNotificationPermission();
      if (permissionGranted) {
        console.log("Quyền thông báo đã được cấp, có thể gửi thông báo");
      } else {
        console.log("Quyền thông báo chưa được cấp, không thể gửi thông báo");
      }
    };

    initializeNotificationPermission();

    // Cấu hình Background Fetch
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 1, // Chạy mỗi 15 phút (tùy chỉnh thời gian theo nhu cầu)
        stopOnTerminate: false,   // Tiếp tục khi app bị terminate
        startOnBoot: true,        // Khởi động lại khi thiết bị boot lại
        enableHeadless: true,     // Cho phép chạy background khi app không mở
        forceAlarmManager: true,  // Sử dụng AlarmManager trên Android
      },
      async () => {
        console.log('Background fetch đang chạy...');

        const deviceIds = ['c7826090-9c28-11ef-b5a8-ed1aed9a651f', 'f009edb0-9cde-11ef-b5a8-ed1aed9a651f'];

        // Hàm lấy dữ liệu từ thiết bị
        const getTelemetryData = async (deviceId, index) => {
          let res = await fetchLatestTelemetryDataDevice(deviceId);
          if (res != null && "temperature" in res && "spo2" in res && "heart_rate" in res) {
            setTemperature((prev) => {
              const newTemp = [...prev];
              newTemp[index] = res?.temperature[0]?.value;
              return newTemp;
            });

            setSpo2((prev) => {
              const newSpo2 = [...prev];
              newSpo2[index] = res?.spo2[0]?.value;
              return newSpo2;
            });

            setHeart((prev) => {
              const newHeart = [...prev];
              newHeart[index] = res?.heart_rate[0]?.value;
              return newHeart;
            });
          }
        };
        deviceIds.forEach((deviceId, index) => {
          getTelemetryData(deviceId, index);
        });
        if (temperature.some(temp => temp !== null && temp > 38) ||  spo2.some(sp => sp !== null && sp < 95) || heart.some(hr => hr !== null && hr > 130)) {
            console.log(temperature)
          sendLocalNotification();
        }
        BackgroundFetch.finish();
      },
      (error) => {
        console.log('Lỗi cấu hình BackgroundFetch', error);
      }
    );

    return () => {
      // Dừng Background Fetch khi component unmount
      BackgroundFetch.stop();
    };
  }, [temperature, spo2, heart]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ListPatient" component={ListPatient} options={{ title: 'Danh sách bệnh nhân' }} />
        <Stack.Screen name="InforPatient" component={InforPatient} options={{ title: 'Thông tin bệnh nhân' }} />
        <Stack.Screen name="HeartRate" component={HearRate} options={{ title: 'Nhịp tim' }} />
        <Stack.Screen name="Temperature" component={Temperature} options={{ title: 'Nhiệt độ' }} />
        <Stack.Screen name="SpO2" component={Spo2} options={{ title: 'SpO2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}