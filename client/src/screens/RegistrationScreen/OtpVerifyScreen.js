import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, } from "react-native";
import {Login} from '../../styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '../../components/Button';
import SweetaelertModal from '../../components/SweetAlertModal';
import images from '../../index';

import { useNavigation } from '@react-navigation/native';

const OtpVeryfyScreen = () => {
 
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [DisplayAlerttwo, setDisplayAlerttwo] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlerttwo(0);
      setDisplayAlert(0);
    });
  }, [navigation]);
  return (
    <View style={Login.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Login.minflexview}>
            <View style={Login.minviewsigninscreen}>
              <View style={Login.whiteboxshadow}>
                <View style={Login.setimagviewlogin}>
                  <Image style={Login.imagesetus} resizeMode='contain' source={images.app_logo} />
                </View>
              </View>
              <View style={Login.tabminview}>
                <Text style={[Login.signintextset, { color: "#861088"  }]}>Enter  6  Digit OTP</Text>
                <Text style={Login.paregraph}>Enter the OTP code from the phone we just sent you.</Text>
                <OTPInputView
                  style={Login.otpinputstyleaet}
                  pinCount={6}
                  autoFocusOnLoad
                  codeInputFieldStyle={[Login.otpbuttonstyle, { color: "#861088" , borderColor: "#861088" , }]}
                />
                <View style={Login.flexrowsettext}>
                  <Text style={Login.paregraphotpbottom}>Didn't receive OTP Code!</Text>
                  <TouchableOpacity onPress={
                    () => setDisplayAlert(1)}>
                    <Text style={Login.resendtextbold}>Resend</Text>
                  </TouchableOpacity>
                </View>
                <View style={Login.buttonstylviewset}>
                  <View style={Login.accountbutton}>
                    <Button
                      title="Submit"
                      buttonStyle={{ backgroundColor: "#861088"  }}
                      onPress={
                        () => setDisplayAlerttwo(1)}
                    />
                  </View>
                </View>
                <View style={Login.centeredView}>
                  {DisplayAlert !== 0 ?
                    <SweetaelertModal message='OTP sent successfully'  />
                    :
                    null
                  }
                </View>
                <View style={Login.centeredView}>
                  {DisplayAlerttwo !== 0 ?
                    <SweetaelertModal message='Login successful'  />
                    :
                    null
                  }
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default OtpVeryfyScreen;
