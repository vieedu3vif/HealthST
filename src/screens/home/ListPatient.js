import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;
const ListPatient = () => {

    return (
<SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.searchBox}>
                <Ionicons name="search-sharp" size={32} style={{marginHorizontal:10,}}></Ionicons>
                <TextInput placeholder="Tìm kiếm bệnh nhân"></TextInput>
            </View>
            <View style={styles.welcomeBox}>
                <Image source={require('../../assets/image/avt.jpg')} style={{height:80, width:80, borderRadius:15,marginLeft:27,}}></Image>
                <View>
                    <Text style={{marginLeft:20,}}>Thứ 6, 29 th9, 2024</Text>
                    <Text style={{fontWeight:'bold', fontSize:28, marginLeft:20,}}>Xin chào, Bác sĩ !</Text>
                </View>
            </View>
        </View>

        <View style={styles.boxTop}>
            <View style={[styles.twoBox, { backgroundColor: "#0f67fe" }]}>
                <View style={{
                    height: hei * 0.15,
                    width: wid * 0.13,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <MaterialCommunityIcons name="account-group-outline" size={40} style={{ marginLeft: 5 }}> </MaterialCommunityIcons>
                </View>
                <View style={{
                    height: hei * 0.15,
                    width: wid * 0.25,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 26,
                        fontWeight: 'bold',
                    }}>24</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        opacity: 0.7,
                    }}>Số bệnh nhân</Text>
                </View>
            </View>
            <View style={[styles.twoBox, { backgroundColor: "#fa4d5e" }]}>
                <View style={{
                    height: hei * 0.15,
                    width: wid * 0.13,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <MaterialCommunityIcons name="account-group-outline" size={40} style={{ marginLeft: 5 }}> </MaterialCommunityIcons>
                </View>
                <View style={{
                    height: hei * 0.15,
                    width: wid * 0.25,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 26,
                        fontWeight: 'bold',
                    }}>24</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        opacity: 0.7,
                    }}>Bệnh nhân ốm</Text>
                </View>
            </View>
        </View>

        <View style={{
            height: hei * 0.03,
            justifyContent: 'center',
            marginTop:5,
        }}>
            <Text style={[styles.normalText, { paddingLeft: 25 }]}>Bệnh nhân</Text>
        </View>

        {/* ScrollView chiếm phần còn lại của màn hình */}
        <ScrollView style={{ flex: 1, }}>
            <View style={styles.boxPatient}>
                <View style = {styles.avtView}>
                    <Ionicons name="person-outline" size={35}></Ionicons>
                </View>
                <View style ={styles.inforView}>
                    <Text style={styles.nameText}>Mohamed Bin Salman</Text>
                    <Text style={styles.sexText}>Nam</Text>
                </View>
                <View style={styles.status}>
                    <Text>Binh thuong</Text>
                </View>
            </View>

            <View style={styles.boxPatient}>
                <View style = {styles.avtView}>
                    <Ionicons name="person-outline" size={35}></Ionicons>
                </View>
                <View style ={styles.inforView}>
                    <Text style={styles.nameText}>Mohamed Bin Salman</Text>
                    <Text style={styles.sexText}>Nam</Text>
                </View>
                <View style={styles.status}>
                    <Text>Binh thuong</Text>
                </View>
            </View>

            <View style={styles.boxPatient}>
                <View style = {styles.avtView}>
                    <Ionicons name="person-outline" size={35}></Ionicons>
                </View>
                <View style ={styles.inforView}>
                    <Text style={styles.nameText}>Mohamed Bin Salman</Text>
                    <Text style={styles.sexText}>Nam</Text>
                </View>
                <View style={styles.status}>
                    <Text>Binh thuong</Text>
                </View>
            </View>
            <View style={styles.boxPatient}>
                <View style = {styles.avtView}>
                    <Ionicons name="person-outline" size={35}></Ionicons>
                </View>
                <View style ={styles.inforView}>
                    <Text style={styles.nameText}>Mohamed Bin Salman</Text>
                    <Text style={styles.sexText}>Nam</Text>
                </View>
                <View style={styles.status}>
                    <Text>Binh thuong</Text>
                </View>
            </View>
            
        </ScrollView>
    </View>
</SafeAreaView>

    )
}
export default ListPatient;

const styles = StyleSheet.create({
    twoBox :{
        height: hei * 0.15,
        width : wid * 0.38,
        flexDirection: 'row',
        borderRadius: 20,
    //    justifyContent:'space-around',
        alignItems:'center'
    },
    header:{
    //    flexDirection: 'row',
        height: hei * 0.25,
    //    backgroundColor: "blue",
        alignItems:'center'

    },
    searchBox :{
        height: 45,
        width: wid * 0.88,
        backgroundColor:'white',
        marginVertical:15,
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
    },
    container:{
        flex : 1,
        backgroundColor: "#ecf2fa"
    },
    boxTop : {
        height: hei * 0.15,
    //    backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    normalText : {
        fontSize:16,
        fontWeight:'bold',
        color:'black',
    },
    scroll :{
        height: hei * 0.5,
        width : wid,
    //    backgroundColor:'blue',
    },
    boxPatient:{
        height: hei * 0.1,
        width: wid * 0.89,
        backgroundColor: 'white',
        borderRadius:20,
        marginTop:25,
        marginLeft:24,
        flexDirection:'row',
        alignItems:'center',
    },
    avtView: {
        height:50,
        width:50,
        borderRadius:10,
        backgroundColor:"#d0e4ff",
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
    }, welcomeBox:{
        height:115,
        width: wid,
    //    backgroundColor:'violet',
        flexDirection:'row',
        alignItems:'center'
    }
})