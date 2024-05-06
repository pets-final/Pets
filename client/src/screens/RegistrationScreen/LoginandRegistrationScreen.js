import React, { useState } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { Login } from '../../styles';
import images from '../../index';
import   LoginScreen  from '../../screens/RegistrationScreen/LoginScreen'
import   SignUpScreen  from '../../screens/RegistrationScreen/SignUpScreen'


const LoginandRegistrationScreen = () => {

  const [tabShow, SettabShow] = useState('1')
  return (

    <View style={Login.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
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
                <View style={Login.bgcolortabset}>
                  <TouchableOpacity>
                    <Text onPress={() => SettabShow('1')} style={Login.tabsettext}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text onPress={() => SettabShow('2')} style={Login.tabsettext}>Signup </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {tabShow == '1' ?
                <View style={Login.paddingbottom}>
                  <Text style={[Login.bordersetactive, { backgroundColor: "#861088"  }]}></Text>
                  <LoginScreen />
                </View>
                : null}
              {tabShow == '2' ?
                <View style={Login.paddingbottom}>
                  <Text style={[Login.bordersetactivetwo, { backgroundColor: "#861088"  }]}></Text>
                  <SignUpScreen />
                </View>
                : null}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginandRegistrationScreen;
