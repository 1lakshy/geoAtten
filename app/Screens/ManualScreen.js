import { Pressable, SafeAreaView, StyleSheet, Text, View, Alert, Dimensions,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import gStyles from "../../styles";
import colors from '../../color';
import Btn from '../../components/Btn';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import logo from '../../assets/location.jpg'; 


// https://nominatim.openstreetmap.org/reverse?format=json&lat=19.130906117829692&lon=72.83118562747907
const ManualScreen = () => {
    const [date, setDate] = useState();
    const [checkStatus, setCheckStatus] = useState(1);
    const [checkInTime, setCheckInTime] = useState("");
    const [checkOutTime, setCheckOutTime] = useState("");
    const [checkInTimestamp, setCheckInTimestamp] = useState(null);
    const [address, setAddress] = useState("Your Address According to the Latitude and Longitude is ...")

    const htmlFileUri = Asset.fromModule(require('../../assets/leaflet-map.html')).uri;
    const getFormattedDate = () => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const date = new Date();
        const month = months[date.getMonth()];
        const day = date.getDate();

        setDate(`${month} ${day}`);
    };

    const getTimeString = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    const checkIn = () => {
        const now = new Date();
        const currentTime = getTimeString(now);

        setCheckInTime(currentTime);
        setCheckInTimestamp(now.getTime());
        setCheckStatus(1);
    };

    const checkOut = () => {
        if (checkInTimestamp) {
            const now = new Date();
            const elapsedTime = now.getTime() - checkInTimestamp;
            const hoursElapsed = elapsedTime / (1000 * 60 * 60);

            if (hoursElapsed >= 6) {
                const currentTime = getTimeString(now);
                setCheckOutTime(currentTime);
                setCheckStatus(0);
            } else {
                Alert.alert("Check Out Error", "You cannot check out as you have not completed your working hours.");
            }
        } else {
            Alert.alert("Check Out Error", "You need to check in first.");
        }
    };

    useEffect(() => {
        getFormattedDate();
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.topNav}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text style={styles.text}>Goals</Text>
            </View>
            <View style={gStyles.subMain}>
                <Text style={gStyles.subHeadingBlack}>Manual CheckIn Feature</Text>
                <View style={styles.status}>
                    <Pressable
                        onPress={checkIn}
                        style={{ ...styles.check, backgroundColor: checkStatus ? colors.primary : "white", elevation: 2, borderRadius: 20 }}>
                        <AntDesign name="export" size={24} color="black" />
                        <Text style={styles.text}>Check In</Text>
                    </Pressable>
                    <Pressable
                        onPress={checkOut}
                        style={{ ...styles.check, backgroundColor: !checkStatus ? colors.primary : "white", elevation: 2, borderRadius: 20 }}>
                        <AntDesign name="export" size={24} color="black" />
                        <Text style={styles.text}>Check Out</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", ...styles.dashedBorder }}>
                        <View>
                            <Text>Date</Text>
                            <Text style={{ ...styles.text, marginLeft: 0 }}>{date}</Text>
                        </View>
                        <View>
                            <Text>Branch</Text>
                            <Text style={{ ...styles.text, marginLeft: 0 }}>Branch No #1023</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", ...styles.dashedBorder }}>
                        <View>
                            <Text>Time</Text>
                            <Text style={{ ...styles.text, marginLeft: 0 }}>{checkInTime} - {checkOutTime}</Text>
                        </View>
                        <View>
                            <Text>Language</Text>
                            <Text style={{ ...styles.text, marginLeft: 0 }}>English</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: 170 }}>
                            <Text>Location</Text>
                            <Text style={{ ...styles.text, marginLeft: 0 }}>{address}</Text>
                        </View>
                        <View>
                            <Btn />
                        </View>
                    </View>
                    <View style={styles.webviewContainer}>
                        {/* <WebView
                            style={styles.webview}
                            originWhitelist={['*']}
                            source={{ uri: htmlFileUri }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            onMessage={(event) => console.log(event.nativeEvent.data)}
                        /> */}
                              <Image source={logo} style={{width:300,}} />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default ManualScreen;

const styles = StyleSheet.create({
    topNav: {
        display: "flex",
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    status: {
        height: 150,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    check: {
        width: 170,
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '900',
    },
    dashedBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        borderStyle: 'dashed',
        marginBottom: 20,
        paddingBottom: 25,
    },
    webview: {
        width: 200,
        height: 200
    },
});
