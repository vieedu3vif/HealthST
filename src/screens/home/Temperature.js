import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"



const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;
const Temperature = ({route})=>{
    const {deviceId, deviceData } = route.params;
    const TemperatureValues = deviceData.temperature ? deviceData.temperature.map(item => item.value) : [];

  
    const minTemperature = TemperatureValues.length > 0 ? Math.min(...TemperatureValues) : "N/A";
    const maxTemperature = TemperatureValues.length > 0 ? Math.max(...TemperatureValues) : "N/A";
    const avgTemperature= TemperatureValues.length > 0 ? (TemperatureValues.reduce((a, b) => a + b, 0) / TemperatureValues.length).toFixed(1) : "N/A";
    return (
        <SafeAreaView>
            <View style ={styles.container}>
                <View style={styles.MainBox}>
                    <View style={styles.firstBox}>
                    <FontAwesome6 name="temperature-empty" size={140}></FontAwesome6>
                    </View>
                    <View style={styles.secondBox}>
                        <Text style={{
                            fontSize:50,
                            fontWeight:'bold',
                            color:'white',
                            marginLeft: -20,
                        }}> {TemperatureValues.length > 0 ? TemperatureValues[TemperatureValues.length - 1] : "N/A"} <Text style={{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'#8f8f8f'
                        }}>°C</Text>
                        </Text>
                        <Text style={{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'white'
                        }}>Nhiệt độ</Text>
                    </View>
                </View>
                <View style={{
                    height: hei * 0.03,
                    justifyContent: 'center',
                    marginTop:25,
                }}>
                    <Text style={[styles.normalText, { paddingLeft: 25 }]}>Chỉ số hàng giờ</Text>
                </View>
                <View style ={styles.hoursBox}>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Thấp nhất</Text>
                    <Text style={styles.numberText}>{minTemperature}</Text>
                    <Text style={styles.unitText}>°C</Text>
                   </View>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Cao nhất</Text>
                    <Text style={styles.numberText}>{maxTemperature}</Text>
                    <Text style={styles.unitText}>°C</Text>
                   </View>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Trung bình</Text>
                    <Text style={styles.numberText}>{avgTemperature}</Text>
                    <Text style={styles.unitText}>°C</Text>
                   </View>
                </View>
                <View style={styles.chartBox}>
                    <View style={{
                        height:30,
                        marginLeft: 20,
                        marginTop:10,
                    }}>
                        <Text style={styles.normalText}>Biểu đồ</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Temperature

const styles = StyleSheet.create({
    container :{
        flex : 1,
    },
    MainBox: {
        width: wid*0.89,
        height: hei * 0.25,
        borderRadius: 25,
        backgroundColor:"#ffaa02",
        marginLeft:22,
        marginTop:15,
        flexDirection:'row'
    },
    normalText : {
        fontSize:16,
        fontWeight:'bold',
        color:'black',
    },
    miniTex:{
        fontSize:13,
        fontWeight:'bold',
        color:'black',
    },
    numberText:{
        fontSize:23,
        fontWeight:'bold',
        color:'black'
    },
    unitText:{
        fontSize: 13,
        fontWeight:"bold",
        color:'#8F8F8F'
    },
    hoursBox:{
        width: wid * 0.89,
        height: hei *0.15,
        backgroundColor:'white',
        borderRadius:25,
        flexDirection:"row",
        marginLeft:23,
        marginTop:10,
    },
    miniBox:{
        width: wid * 0.299,
        alignItems:'center',
        justifyContent:'center',
    //    backgroundColor:'red'
    },
    firstBox:{
        width:wid * 0.45,
        justifyContent:'center',
        alignItems:'center'

    },
    secondBox:{
        width:wid * 0.5,
        justifyContent:'center',
    //    alignItems:'center'
    },
    chartBox:{
        width: wid * 0.89,
        height: hei* 0.4,
        backgroundColor:'white',
        marginLeft:23,
        marginTop:20,
        borderRadius:25,
    }
})