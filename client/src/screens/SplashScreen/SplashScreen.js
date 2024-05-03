import React, { useEffect } from 'react';
import { View, StatusBar, Image } from 'react-native';
import images from '../../index';
import Style from '../../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {  
            navigation.replace('GetstartedSliderscreen');
        }, 5000); // Change the timeout to 5000 milliseconds (5 seconds)
    }, []);
    return (
        <View style={[Style.setimageviewstyle, { backgroundColor: "#feb344", justifyContent: 'center', alignItems: 'center' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#feb344" />
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
