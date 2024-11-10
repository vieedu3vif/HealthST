import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Liinechart = () => {
  const dataSleep = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [2, 8, 7, 6, 4, 9, 5]
      }
    ]
  };       

  return (
    <LineChart
      data={dataSleep}
      width={350}  // Giá trị cố định cho chiều rộng
      height={280} // Giá trị cố định cho chiều cao
      verticalLabelRotation={30}
      chartConfig={{
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 8,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        fillShadowGradientFrom: "white",
        fillShadowGradientFromOpacity: 1,
        fillShadowGradientTo: "white",
        fillShadowGradientToOpacity: 1,
      }}
      bezier
      withInnerLines={false}
      withOuterLines={false}
      style={{
        marginStart: -15,
      //  marginTop:30,
      marginRight:30,
      }}
    />
  )
}

export default Liinechart;
