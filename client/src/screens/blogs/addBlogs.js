import { Text, View ,TextInput} from 'react-native'
import React, { useState,useEffect} from "react";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import  Button  from '../../components/Button';
import auth from '@react-native-firebase/auth'; // Import the auth module
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
// import { View, TextInput, Text,TouchableOpacity, Platform, KeyboardAvoidingView,ScrollView } from "react-native";



const addBlogs = () => {
  

const [Title, setTitle] = useState('');
const [Body,setBody] = useState('')
const [Media,setMedia] = useState([])


const [user, setUser] = useState(null); // State to 
  
  useEffect(() => {
    // Get the current user when the component mounts
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log('subscriber',user.uid);
    });
    // Cleanup subscription on unmount
    return subscriber;
  }, []);
  const ImagePicker=()=>{
    let option={
      storageOptions: {
        path: 'image',
      },
    }
    launchImageLibrary(option,response=>{
      setMedia(response.assets[0].uri)
      console.log(response)
    })

  }

  const addBlog=()=>{
    firestore().collection('Blog').add({
      Title:Title,
      Description:Body,
      ImgUrl:Media,
      IdShoper:user.uid,
    }).then((res)=>{
      setTitle('')
      setBody('')
      Alert.alert("Blog posted")
     
  

    }).catch((err)=>{
      console.log(err);

    })
  }
  return (

    <View>
          <View>
           <Text style={{ color: "#861088", fontWeight: "bold" }}>ADD NEW Blog</Text>
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Blog Title"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setTitle(value) }}
          />
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Description"
            multiline={true}
            numberOfLines={10}
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setBody(value) }}
          />
        </View>

        <View>
     

         <Button title=" Add Media"
          onPress={()=>ImagePicker()}
          buttonStyle={Styles.setbuttonborderradius}
          buttonTextStyle={Styles.textcolorsetwhite}
          />
          </View>

        
        <View style={Styles.flexrowbutton}>
          <Button title="Add New Blog"
            onPress={()=> addBlog()}
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>
        
    
    </View>
  )
}

export default addBlogs