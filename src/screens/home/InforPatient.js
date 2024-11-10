import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, Dimensions, } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'; 

const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;

const InforPatient = ({route}) => {
    const {deviceId, deviceData } = route.params;
    const navigation = useNavigation(); 
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <View style={styles.boxTop}>
                    <Image source={require("../../assets/image/avt.jpg")} style={{height:75, width:75, borderRadius:15, marginTop:75,}}></Image>
                    <Text style={{fontWeight:"bold", fontSize:28, color:"black", marginTop:10,}}>Mohamed Bin Salman</Text>
                    <Text>21 tuoi, Nam</Text>
                </View>
                <View style={{flex:1,}}>
                    <TouchableOpacity style={styles.boxInfor}
                    onPress={() => navigation.navigate('HeartRate', { deviceId, deviceData })}>
                        <View style = {[styles.avtView, {backgroundColor: "#ffe0e2"}]}>
                            <Ionicons name="heart-outline" size={35}></Ionicons>
                        </View>
                        <View style ={styles.inforView}>
                            <Text style={styles.nameText}>Nhịp tim</Text>
                            <Text style={styles.sexText}>{deviceData.heart_rate ? deviceData.heart_rate[deviceData.heart_rate.length - 1].value : "N/A"} bpm</Text>
                        </View>
                        <View style={styles.status}>
                            <Text>Bình thường</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.boxInfor}
                   onPress={() => navigation.navigate('Temperature', { deviceId, deviceData })}>
                        <View style = {[styles.avtView, {backgroundColor: "#f9ffdb"}]}>
                            <FontAwesome6 name="temperature-empty" size={35}></FontAwesome6>
                        </View>
                        <View style ={styles.inforView}>
                            <Text style={styles.nameText}>Nhiệt độ</Text>
                            <Text style={styles.sexText}>{deviceData.temperature ? deviceData.temperature[deviceData.temperature.length - 1].value : "N/A"}°C</Text>
                        </View>
                        <View style={styles.status}>
                            <Text>Bình thường</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.boxInfor}
                   onPress={() => navigation.navigate('SpO2', { deviceId, deviceData })}>
                        <View style = {[styles.avtView, {backgroundColor: "#d3fff5"}]}>
                        <FontAwesome5 name="air-freshener" size={35}></FontAwesome5>
                        </View>
                        <View style ={styles.inforView}>
                            <Text style={styles.nameText}>SpO2</Text>
                            <Text style={styles.sexText}>{deviceData.spo2 ? deviceData.spo2[deviceData.spo2.length - 1].value : "N/A"}%</Text>
                        </View>
                        <View style={styles.status}>
                            <Text>Bình thường</Text>
                        </View>
                   </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default InforPatient
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    boxTop :{
        height: hei * 0.35,
        backgroundColor:"#d0e4ff",
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        justifyContent:"center",
        alignItems:"center",
    },
    boxInfor:{
        height: hei * 0.1,
        width: wid * 0.89,
        backgroundColor: 'white',
        borderRadius:20,
        marginTop:35,
        marginLeft:24,
        flexDirection:'row',
        alignItems:'center',
    },
    avtView: {
        height:50,
        width:50,
        borderRadius:10,
    //    backgroundColor:"#d0e4ff",
        marginHorizontal:15, 
        justifyContent:'center',
        alignItems:'center'
    },
    inforView :{
        height: hei * 0.1,
        width: 170,
    //    backgroundColor:'green',
        justifyContent:'center',
    //    alignItems:'center'
    }, 
    nameText : {
        color:'black',
        fontSize: 16,
        fontWeight:'bold'
    },
    sexText:{
        color:'black',
        fontSize :12,
    },
    status:{
        height:30,
        width:85,
        backgroundColor:'#95F8A7',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
})