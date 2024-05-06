import React, { useEffect } from 'react';
import { View, StatusBar, Image, Alert } from 'react-native';
import images from '../../index';
import Style from '../../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import LottieView from 'lottie-react-native';
import auth from "@react-native-firebase/auth";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        checkInternetConnection();
    }, []);

    const checkInternetConnection = async () => {
        const state = await NetInfo.fetch();
        if (state.isConnected) {
            checkUserAuthentication();
        } else {
            Alert.alert(
                "No Internet Connection",
                "Please check your internet connection and try again.",
                [{ text: "OK", onPress: () => checkInternetConnection() }]
            );
        }
    };

    const checkUserAuthentication = async () => {
        const user = auth().currentUser;
        if (user) {
            const timestamp = user.metadata.lastSignInTime;
            const lastSignInTime = new Date(timestamp).getTime();
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastSignInTime;

            if (elapsedTime > 2592000000) {
                await handleLogout();
            } else {
                navigation.replace('tab');
            }
        } else {
            navigation.replace('GetstartedSliderscreen');
        }
    };

    const handleLogout = async () => {
        try {
            await auth().signOut();
            navigation.replace('LoginandRegistrationScreen');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <View style={[Style.setimageviewstyle, { backgroundColor: "#861088", justifyContent: 'center', alignItems: 'center' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#861088" />
            <View style={Style.setbgcolorwhitelogo}>
                <Image style={Style.splshimg} source={images.app_logo} resizeMode='center' />
            </View>
            <View style={{ width: 200, height: 200 }}>
                <LottieView
                    source={images.loading}
                    autoPlay
                    loop
                    resizeMode='cover'
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    );
};

export default SplashScreen;
