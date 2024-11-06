import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const data = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      data: [87, 89, 90, 92, 60, 77, 70, 43, 50, 70, 88, 90]
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: "#F3BDBD",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#F3BDBD",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgb(238, 0, 0)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
}; 

const Baarchart = () => {
  return (
    <BarChart
      data={data}
      style={{
        marginStart: 5,
      }}
      width={300}
      height={400}
      yAxisLabel=""
      //cai chartConfig quyet dinh den cai chart trong nhu nao
      chartConfig={chartConfig}
      verticalLabelRotation={30}
      withInnerLines={true}
      fromZero={true}
    />
  )
}
export default Baarchart