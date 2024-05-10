import React, { useState } from "react";
import { Text, View, Image, Linking, Pressable, TextInput, TouchableOpacity } from "react-native";
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

const db = firestore();

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullname, setfullname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setconformpassword] = useState('');
  const [role, setRole] = useState('');
  const [fullnameaerror, setfullnameaerror] = useState(0);
  const [mobilenumbererror, setmobilenumbererror] = useState(0);
  const [passwordrerror, setpasswordrerror] = useState(0);
  const [conformpasswordaerror, setconformpasswordaerror] = useState(0);
  const [roleError, setRoleError] = useState('');
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [error, setError] = useState(null);

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
    if (!role) {
      setRoleError("Please select a role");
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
        role: role,
      };

       db.collection(`User/users/${user.uid}`).add(
        userData,
       );
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  
  }
  return (
    <View style={Login.tabminview}>
      <View style={Login.flexrowtwxtandgoogle}>
        <View>
          <Text style={[Login.registertextstyle, { color:  "#861088" }]}>Register</Text>
        </View>
        <View style={Login.flexrowtwxtanimage}>
          <TouchableOpacity style={Login.gooleiconsetwhiteshadow} onPress={() => Linking.openURL('https://accounts.google.com/signin/v2/challenge/pwd?rart=ANgoxcdbbNxH1nYXChBQ7n_DhSet9sRm1XXzUFTdrodQQJThJv3oPCktvjFuZq-YDK8WsXHW_gXYeU7G-XB1iBPG0qMJAeBgcA&TL=AKqFyY83GsHjazXV_PwFHjgH9TWEYKp_-8XvbZBPldYwb-yZ9LPv7QjDq-AK6ysc&flowName=GlifWebSignIn&cid=1&flowEntry=ServiceLogin')}>
            <Image style={Login.googleimage} resizeMode='cover' source={images.Googleimg_set} />
          </TouchableOpacity>
          <TouchableOpacity style={Login.gooleiconsetwhiteshadow} onPress={() => Linking.openURL('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5Njk2NDc2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D')}>
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
           <SweetaelertModal message='SignUp Successful' link={"WelcomeSumnya"}   />           
            :
            null
          }
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
