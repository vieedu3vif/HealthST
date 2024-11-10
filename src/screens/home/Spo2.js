import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Liinechart from "../../components/LiineChart";



const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;
const Spo2 = ({route})=>{
    const {deviceId, deviceData } = route.params;
    const Spo2Values = deviceData.spo2 ? deviceData.spo2.map(item => item.value) : [];

    
    const minSpo2 = Spo2Values.length > 0 ? Math.min(...Spo2Values) : "N/A";
    const maxSpo2 = Spo2Values.length > 0 ? Math.max(...Spo2Values) : "N/A";
    const avgSpo2 = Spo2Values.length > 0 ? (Spo2Values.reduce((a, b) => a + b, 0) / Spo2Values.length).toFixed(1) : "N/A";
    return (
        <SafeAreaView>
            <View style ={styles.container}>
                <View style={styles.MainBox}>
                    <View style={styles.firstBox}>
                    <FontAwesome5 name="air-freshener" size={120}></FontAwesome5>
                    </View>
                    <View style={styles.secondBox}>
                        <Text style={{
                            fontSize:50,
                            fontWeight:'bold',
                            color:'white'
                        }}> {Spo2Values.length > 0 ? Spo2Values[Spo2Values.length - 1] : "N/A"} <Text style={{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'#8f8f8f'
                        }}>%</Text>
                        </Text>
                        <Text style={{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'white'
                        }}>SpO2</Text>
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
                    <Text style={styles.numberText}>{minSpo2}</Text>
                    <Text style={styles.unitText}>%</Text>
                   </View>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Cao nhất</Text>
                    <Text style={styles.numberText}>{maxSpo2}</Text>
                    <Text style={styles.unitText}>%</Text>
                   </View>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Trung bình</Text>
                    <Text style={styles.numberText}>{avgSpo2}</Text>
                    <Text style={styles.unitText}>%</Text>
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
                    <Liinechart></Liinechart>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Spo2

const styles = StyleSheet.create({
    container :{
        flex : 1,
    },
    MainBox: {
        width: wid*0.89,
        height: hei * 0.25,
        borderRadius: 25,
        backgroundColor:"#3dd6db",
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
        backgroundColor:'#d2d2d2',
        marginLeft:23,
        marginTop:20,
        borderRadius:25,
    }
})