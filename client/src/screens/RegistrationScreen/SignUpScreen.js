import React, { useState,useEffect } from "react";
import { Text, View, Image, Linking, Pressable, TextInput, TouchableOpacity,Alert } from "react-native";
import { Login, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { useTogglePasswordVisibility } from '../../utils';
import images from '../../index';
import Button from '../../components/Button';
import  SweetaelertModal from '../../components/SweetAlertModal';
import IconA from 'react-native-vector-icons/EvilIcons';
import IconG from 'react-native-vector-icons/Ionicons';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
// import Style from '../../styles/CommonStyle/Style';
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const db = firestore();
 
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullname, setfullname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setconformpassword] = useState('');
  const [fullnameaerror, setfullnameaerror] = useState(0);
  const [mobilenumbererror, setmobilenumbererror] = useState(0);
  const [passwordrerror, setpasswordrerror] = useState(0);
  const [conformpasswordaerror, setconformpasswordaerror] = useState(0);
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [error, setError] = useState(null);
  const [ImgUrl, setImg] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [imageUrl, setimageUrl] = useState('https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg');

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibilitytwo, rightIcontwo, handlePasswordVisibilitytwo } =
    useTogglePasswordVisibility();

  const signupbutton = async () => {
    if (!fullname.trim()) {
      setfullnameaerror(1);
      return;
    }
    if (!mobilenumber.trim()) {
      setmobilenumbererror(1);
      return;
    }
    if (!password.trim()) {
      setpasswordrerror(1);
      return;
    }
    if (!conformpassword.trim()) {
      setconformpasswordaerror(1);
      return;
    }
    if (password !== conformpassword) {
      setError("Passwords do not match");
      return;
    }
    
    auth().createUserWithEmailAndPassword(Email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        fullname: fullname,
        mobilenumber: mobilenumber,
        email: Email,
        uid: user.uid,
        

      };

   user.sendEmailVerification()


      
      db.collection('users').doc(user.uid).set(userData).then(() => {
        setDisplayAlert(1);
        //  sendEmailVerification(user.email)
      })

    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  }
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '220888624389-hnk7n8nrgeqodnaf7l3ugc534lt3m0f7.apps.googleusercontent.com',
    });

  },[])

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // Get the user's ID token
      const { idToken } = await GoogleSignin.signIn();
      
     
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      console.log("idToken", idToken);
      Alert.alert('done');
    } catch (error) {
      // Handle the error here
      console.error("Google sign-in error:", error);
      // You can show an alert or perform other actions based on the error
      Alert.alert("Google sign-in failed");
    }
  }
   
  
 
  return (
    <View style={Login.tabminview}>
      
      <View style={Login.flexrowtwxtandgoogle}>
        <View>
          <Text style={[Login.registertextstyle, { color:  "#861088" }]}>Register</Text>
        </View>
        <View style={Login.flexrowtwxtanimage}>
          <TouchableOpacity style={Login.gooleiconsetwhiteshadow}  onPress={onGoogleButtonPress}>
            <Image style={Login.googleimage} resizeMode='cover' source={images.Googleimg_set} />
          </TouchableOpacity>
          <TouchableOpacity style={Login.gooleiconsetwhiteshadow} onPress={onGoogleButtonPress}>
            <View style={Login.facbookbgcolorset}>
              <IconA name="sc-facebook" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.inputUnderLine}>
        <TextInput
          placeholder="Full Name"
          style={Style.inputtextstyle}
          placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
          onChangeText={(value) => { setfullnameaerror(0); setfullname(value); }}
        />
      </View>
      {fullnameaerror === 1 ?
        <Text style={Login.pleseentername}>* Please Enter the Full Name</Text>
        : null
      }
      <View style={Style.inputUnderLine}>
        <TextInput
          placeholder="email"
          style={Style.inputtextstyle}
          placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
          onChangeText={(value) => { setfullnameaerror(0); setEmail(value); }}
        />
      </View>
      {fullnameaerror === 1 ?
        <Text style={Login.pleseentername}>* Please Enter the Email</Text>
        : null
      }
      <View style={Style.inputUnderLine}>
        <TextInput
          placeholder="Mobile Number"
          style={Style.inputtextstyle}
          keyboardType="numeric"
          placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
          onChangeText={(value) => { setmobilenumbererror(0); setmobilenumber(value); }}
        />
      </View>
      {mobilenumbererror === 1 ?
        <Text style={Login.pleseentername}>* Please Enter the Mobile number</Text>
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
            onChangeText={(value) => { setpasswordrerror(0); setPassword(value); }}
          />
        </View>
        <View>
          <Pressable onPress={handlePasswordVisibility}>
            <IconG name={rightIcon} size={25} style={Login.eyeiconset} />
          </Pressable>
        </View>
      </View>
      {passwordrerror === 1 ?
        <Text style={Login.pleseentername}>* Please Enter the Password</Text>
        : null
      }
      <View style={Style.inputUnderLine}>
        <View style={Style.setpasswordwidtbg}>
          <TextInput
            style={Style.textpassworedsert}
            name="Confirm Password"
            placeholder="Confirm Password"
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibilitytwo}
            enablesReturnKeyAutomatically
            onChangeText={(value) => { setconformpasswordaerror(0); setconformpassword(value); }}
          />
        </View>
        <View>
          <Pressable onPress={handlePasswordVisibilitytwo}>
            <IconG name={rightIcontwo} size={25} style={Login.eyeiconset} />
          </Pressable>
        </View>
      </View>
      {conformpasswordaerror === 1 ?
        <Text style={Login.pleseentername}>* Please Enter Confirm Password</Text>
        : null
      }
      

      
     
      <View style={Login.allreadylogintext} >
        <Text style={Login.settextstyle}>Already a Member? </Text>      
         <TouchableOpacity onPress={() => (navigation.replace("LoginandRegistrationScreen"))}><Text style={[Login.logintext, { color:  "#861088" }]}>Login</Text></TouchableOpacity> 
      </View>
      <View style={Login.flexrowbutton}>
        <View style={Login.setbuttonvieLogininup}>
          <Button title="Signup"
            onPress={()=>{
              signupbutton();
            }}
            buttonStyle={{ backgroundColor:  "#861088" }}
            buttonTextStyle={Login.textcolorsetwhite}
          />
        </View>
        <View style={Login.centeredView}>
          {error && <SweetaelertModal message={error} />}
          {DisplayAlert !== 0 ? 
           <SweetaelertModal message='SignUp Successful' link={"UpdateImage"}   />           
            :
            null
          }
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
