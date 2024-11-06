import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"



const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;
const HearRate = ()=>{
    return (
        <SafeAreaView>
            <View style ={styles.container}>
                <View style={styles.MainBox}>
                    <View style={styles.firstBox}>
                        <Ionicons name="heart-outline" size={140} color={"white"}></Ionicons>
                    </View>
                    <View style={styles.secondBox}>
                        <Text style={{
                            fontSize:50,
                            fontWeight:'bold',
                            color:'white'
                        }}>85 <Text style={{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'#8f8f8f'
                        }}>bpm</Text>
                        </Text>
                        <Text style={{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'white'
                        }}>Nhịp tim</Text>
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
                    <Text style={styles.numberText}>100</Text>
                    <Text style={styles.unitText}>bpm</Text>
                   </View>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Cao nhất</Text>
                    <Text style={styles.numberText}>100</Text>
                    <Text style={styles.unitText}>bpm</Text>
                   </View>
                   <View style={styles.miniBox}>
                    <Text style={styles.miniTex}>Trung bình</Text>
                    <Text style={styles.numberText}>100</Text>
                    <Text style={styles.unitText}>bpm</Text>
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
export default HearRate

const styles = StyleSheet.create({
    container :{
        flex : 1,
    },
    MainBox: {
        width: wid*0.89,
        height: hei * 0.25,
        borderRadius: 25,
        backgroundColor:"red",
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