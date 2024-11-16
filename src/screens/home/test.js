import React, { useEffect, useState } from 'react';
import { AppState, View, Text } from 'react-native';
import sendLocalNotification from '../../ultis/Notify';
import requestNotificationPermission from '../../ultis/request';
import fetchLatestTelemetryDataDevice from '../../assets/API/APIGetAttrs';

const Test = () => {
  const [temperature, setTemperature] = useState([null, null]);
  const [spo2, setSpo2] = useState([null, null]);

  // Trạng thái lưu dữ liệu lần cuối đã thông báo
  const [lastNotifiedData, setLastNotifiedData] = useState({
    temperature: [null, null],
    spo2: [null, null],
  });

  useEffect(() => {
    const deviceIds = ['c7826090-9c28-11ef-b5a8-ed1aed9a651f', 'f009edb0-9cde-11ef-b5a8-ed1aed9a651f'];

    const initializeNotificationPermission = async () => {
      const permissionGranted = await requestNotificationPermission();
      if (permissionGranted) {
        console.log("Quyền thông báo đã được cấp, có thể gửi thông báo");
      } else {
        console.log("Quyền thông báo chưa được cấp, không thể gửi thông báo");
      }
    };

    initializeNotificationPermission();

    // Hàm lấy dữ liệu từ thiết bị
    const getTelemetryData = async (deviceId, index) => {
      let res = await fetchLatestTelemetryDataDevice(deviceId);
      if (res != null && "temperature" in res && "spo2" in res) {
        const newTemp = res?.temperature[0]?.value;
        const newSpo2 = res?.spo2[0]?.value;

        // Cập nhật state nhiệt độ và SpO2
        setTemperature((prev) => {
          const updatedTemp = [...prev];
          updatedTemp[index] = newTemp;
          return updatedTemp;
        });
        setSpo2((prev) => {
          const updatedSpo2 = [...prev];
          updatedSpo2[index] = newSpo2;
          return updatedSpo2;
        });
      }
    };

    // Gọi hàm getTelemetryData cho từng deviceId
    deviceIds.forEach((deviceId, index) => {
      getTelemetryData(deviceId, index);
    });

    const intervalId = setInterval(() => {
      deviceIds.forEach((deviceId, index) => {
        getTelemetryData(deviceId, index);
      });
    }, 4000);

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Đăng ký AppState để theo dõi khi ứng dụng chuyển sang nền
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'background') {
        temperature.forEach((temp, index) => {
          const sp = spo2[index];
          const lastTempNotified = lastNotifiedData.temperature[index];
          const lastSpo2Notified = lastNotifiedData.spo2[index];

          // Kiểm tra điều kiện và khác với giá trị đã thông báo trước đó
          if ((temp > 130 && temp !== lastTempNotified) || (sp < 95 && sp !== lastSpo2Notified)) {
            sendLocalNotification();

            // Cập nhật dữ liệu thông báo lần cuối
            setLastNotifiedData((prev) => {
              const updatedData = {
                temperature: [...prev.temperature],
                spo2: [...prev.spo2],
              };
              updatedData.temperature[index] = temp;
              updatedData.spo2[index] = sp;
              return updatedData;
            });
          }
        });
      }
    });

    return () => {
      subscription.remove();
    };
  }, [temperature, spo2, lastNotifiedData]);

  return (
    <View>
      <Text>alooo</Text>
    </View>
  );
};

export default Test;
