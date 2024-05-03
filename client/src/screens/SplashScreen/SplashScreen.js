import React, { useEffect } from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import images from '../../index';
import Style from '../../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';




const SplashScreen = () => {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(async () => {  
            navigation.replace('GetstartedSliderscreen');
        }, 2100);
      
    }, []);
    return (
        <View style={Style.setimageviewstyle} backgroundColor= "#861088">
            <StatusBar barStyle="light-content" backgroundColor="#861088" /> 
            
            <View style={Style.setbgcolorwhitelogo}>  
                <Image style={Style.splshimg} source={images.app_logo} resizeMode='center' />
            </View>

        </View>
    );
};
export default SplashScreen;
