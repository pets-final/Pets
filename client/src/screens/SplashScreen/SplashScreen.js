import React, { useEffect } from 'react';
import { View, StatusBar, Image } from 'react-native';
import images from '../../index';
import Style from '../../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import auth from "@react-native-firebase/auth";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return () => subscriber(); // unsubscribe on unmount
        }, 2000); // Change the timeout to 2000 milliseconds (2 seconds)

        return () => clearTimeout(timeout);
    }, []);

    const onAuthStateChanged = (user) => {
        if (user) {
            // User is logged in, navigate to the main screen
            navigation.replace('tab');
        } else {
            // User is not logged in, navigate to the get started screen
            navigation.replace('GetstartedSliderscreen');
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
