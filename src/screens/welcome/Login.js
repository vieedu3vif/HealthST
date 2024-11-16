import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            Alert.alert("Thành công", `Chào mừng ${userCredential.user.email}`);
            navigation.navigate("ListPatient")
        } catch (error) {
            Alert.alert("Lỗi đăng nhập", error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.topBox}></View>
                <View style={styles.middleBox}>
                <Text>Đăng nhập để theo dõi bệnh nhân</Text>
                    <View style={styles.boxInfor}>
                        <AntDesign name="mail" size={35} />
                        <TextInput
                            placeholder="Số điện thoại hoặc Email"
                            style={{ flex: 1, marginLeft: 10 }}
                            onChangeText={setEmail}
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.boxInfor}>
                        <AntDesign name="unlock" size={35} />
                        <TextInput
                            placeholder="Nhập mật khẩu"
                            style={{ flex: 1, marginLeft: 10 }}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={{ fontSize: 16, color: "white" }}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style={styles.lastBox}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Bác sĩ chưa có tài khoản? </Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}>
                            <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>Đăng ký ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBox: {
        height: hei * 0.1,
        width: wid,
    //    backgroundColor: "blue",
    },
    boxInfor: {
        height: 60,
        width: wid * 0.9,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        marginVertical: 20,
    },
    middleBox: {
        height: hei * 0.6,
    //    backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    lastBox: {
        height: 60,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    loginButton: {
        height: 60,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 35,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
