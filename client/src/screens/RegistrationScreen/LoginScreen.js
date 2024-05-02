import React, { useState, useEffect } from "react";
import { Text, View, Linking, Pressable, TextInput, TouchableOpacity, } from "react-native";
import {Login,Style} from '../../styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../index';
import  useTogglePasswordVisibility  from '../../utils/useTogglePasswordVisibility';
import Button  from '../../components/Button';
// import {RouteName} from '../../routes';
import IconG from 'react-native-vector-icons/Ionicons';
import  SweetaelertModal from '../../components/SweetAlertModal';
import auth from "@react-native-firebase/auth";


const LoginScreen = () => {
  // const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [textInputName, setTextInputName] = useState('');
  const [textInputpassword, setTextInputPassword] = useState('');
  const [Error1, setError1] = useState(0)
  const [Error2, setError2] = useState(0)
  const [error, setError] = useState(null);
  const [refresh, setrefresh] = useState(false);


  const [DisplayAlert, setDisplayAlert] = useState(0)
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation,error]);

  const checkTextInput = () => {
    if (!textInputName.trim()) {
      setError1(1)
      return;
    }
    if (!textInputpassword.trim()) {
      setError2(1)
      return;
    }
    auth().signInWithEmailAndPassword(textInputName,textInputpassword)
    .then(()=>{
      setDisplayAlert(1);     
    })
    .catch((error)=>{
      console.log(error.message);          
      setError(error.message);
      setrefresh(!error)
      setError2(1); // Set Error2 to 1 to display error message below the password field
    }) 
    
  };
  return (
    <View>     
        <View style={[Login.paddingbottom, Login.bgcolorset]}>
          <Text style={Login.bordersetactive}></Text>
          <View style={Login.tabminview}>
            <View style={Style.inputUnderLine}>
              <TextInput
                placeholder="Email"
                style={Style.inputtextstyle}
                onChangeText={(value) => { setError1(0); setTextInputName(value); }}
                underlineColorAndroid="transparent"
                // style={Style.inputtextstyle}
                placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              />
            </View>
            {Error1 === 1 ?
              <Text style={Login.pleseentername}>* Please Enter Username or Mobile</Text>
              : null
            }
            <View style={Style.inputUnderLine}>
              <View style={Style.setpasswordwidtbg}>
                <TextInput
                  style={Style.textpassworedsert}
                  name="password"
                  // onPress={handlePasswordVisibility}
                  placeholder="Password"
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility}
                  enablesReturnKeyAutomatically
                  onChangeText={(value) => { setError2(0); setTextInputPassword(value) }}
                />
              </View>
              <View>
              </View>
                <Pressable onPress={handlePasswordVisibility}>
                  <IconG name={rightIcon} size={25} style={Login.eyeiconset} />
                </Pressable>
            </View>
            {Error2 === 1 ?
  <Text style={[Login.pleseentername, { color: "red" }]}>Wrong Email or password </Text>
  : null
}
     
            <TouchableOpacity onPress={() => navigation.navigate("FORGET_PASSWORD_SCREEN")}>
              <Text style={[Login.textstyle, {color: "#feb344" }]} >Forgot password?</Text>
            </TouchableOpacity>
            <View style={Login.buttonview}>
              <Button title="Login"
                onPress={checkTextInput}
                buttonStyle={Login.buttonStyle}
                buttonTextStyle={Login.buttonTextStyle}
              />
            </View>
            <View style={Login.centeredView}>
            {error &&
          <SweetaelertModal message={error}   />
        
          }
              {DisplayAlert !== 0 ?
                <SweetaelertModal message='Login Successful' link={"tab"} />
                :
                null
              }
            </View>






            
            {/* <Text style={Login.textcolorset}>or</Text>
            <Button title="Log In with Facebook"
              iconname="sc-facebook"
              onPress={() => Linking.openURL('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5Njk2NDc2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D')}
              buttonTextStyle={Login.loginwithfacebboktext}
              buttonStyle={Login.flexrowsetminview}
            />
            <View style={Login.setbuttviewtopspace}>
            <Button title="Login with Google"
              imagesource={images.Googleimg_set}
              onPress={() => Linking.openURL('https://myaccount.google.com/')}
              buttonTextStyle={Login.buttonimagtexthree}
              buttonStyle={Login.setbuttonborderradiuswhite}
            />
            </View> */}
          </View>
        </View>    
    </View>
  );
};

export default LoginScreen;