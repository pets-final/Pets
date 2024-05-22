import React, { useState,useRef,Image  } from "react";
import { Text, View, TextInput, StyleSheet,Alert } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import  Button from '../../components/Button';
import  SweetaelertModal from '../../components/SweetAlertModal';
import HelpScreenStyle from '../../styles/Defoltscreenstyle/HelpScreenStyle'
import Style from '../../styles/CommonStyle/Style';
import { Dropdown } from 'react-native-element-dropdown';
import auth from '@react-native-firebase/auth'; // Import the auth module
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker'
import { utils } from '@react-native-firebase/app';




const AddPetsScreen = () => {
  const [fullname, setfullname] = useState('');
  const [age, setAge] = useState('');
  const [Breed, setBreed] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [fullnameaerror, setfullnameaerror] = useState(0);
  const [ageerror, setageerror] = useState(0);
  const [Breederror, setBreederror] = useState(0);
  const [mobilenumbererror, setmobilenumbererror] = useState(0);
  const [email, SetEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState(0);
  const [emailValidError1, setEmailValidError1] = useState(0);
  const [EmailSendAlert, setEmailSendAlert] = useState(0);
  const [Description, setDescription] = useState('');
  const [Descriptionerror, setDescriptionerror] = useState(0);
  const [Location, setLocation] = useState('');
  const [locationererror, setlocationererror] = useState(0);
  const [Sex, setSex] = useState('');
  const [Sexererror, setSexerror] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  // const [image, setImage] = useState(null);

  const [ImgUrl, setImg] = useState('');
  const [imageSource, setImageSource] = useState(null);
  // const [imageUrl, setimageUrl] = useState('https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg');
  const [imageUrls, setImageUrls] = useState([]);
  const dataBreed = [
    { label: 'Dog', value: 'Dog' },
    { label: 'Cat', value: 'Cat' },
    { label: 'Fish', value: 'Fish' },
    { label: 'SmallPet', value: 'SmallPet' },
    { label: 'Bird', value: 'Bird' },
   
  ];
  const dataSex = [
    { label: 'Male', value: 'MAle' },
    { label: 'Female', value: 'Female' },   
   
  ];

  const validateIsEmail = (item) => {
    SetEmail(item);
  }



  const ImagePicker = () => {
    let option = {
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(option, response => {
      if (response.assets) {
        const selectedImages = response.assets.map(asset => asset.uri);
        setImageUrls([...imageUrls, ...selectedImages]);
      }
    });
  };

  const uploadImages = async () => {
    setUploading(true);
    const uploadPromises = imageUrls.map(async (imageUri) => {
      const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
      const reference = storage().ref(filename);
      await reference.putFile(imageUri);
      return await reference.getDownloadURL();
    });

    try {
      const urls = await Promise.all(uploadPromises);
      setUploading(false);
      return urls;
    } catch (error) {
      console.error('Error uploading images:', error);
      setUploading(false);
      return [];
    }
  };










  const addPetsToAdopt=async()=>{
    const urls = await uploadImages();

    firestore().collection('Animal').add({
      Adresse:Location,
      Age:age,
      Breed:Breed,
      Description:Description,
      ImgUrls:urls,
      Name:fullname,
      Sex:Sex,      
    }).then((res)=>{
      Alert.alert("pets added")

    }).catch((err)=>{
      console.log(err);

    })
  }









 
  const signupbutton = () => {
    if (!fullname.trim()) {
      setfullnameaerror(1)
      return;
    }
    if (!mobilenumber.trim()) {
      setmobilenumbererror(1)
      return;
    }
  
    // if (email !== '') {
    //   let emaildata = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    //   if (!emaildata) {
    //     setEmailValidError1(1);
    //   }
    //   else if (emaildata == emaildata) {
    //     setEmailSendAlert(1);
    //   }
    // }
    // if (!email.trim()) {
    //   setEmailValidError(1);
    // }
    // if (!email.trim() && fullname !== '' && mobilenumber !=='' && email !=='') {
    //   setEmailSendAlert(1);
    // }
  }






  return (
    <View style={Styles.mincolorwhite}>
      {/* {setImg(imageUrl)} */}

      <View style={Styles.tabminview}>
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Name"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setfullnameaerror(0); setfullname(value); }}
          />
        </View>
        {fullnameaerror === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter the  Name</Text>
          : null
        }
         <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Age"
            keyboardType="numeric"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setageerror(0); setAge(value); }}
          />
        </View>
        {ageerror === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter the  Age</Text>
          : null
        }

        <View style={styles.container}>
       
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#861088" }]}
          data={dataBreed}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Breed' : '...'}
          value={Breed}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
          
            setBreed(item.value);
            setBreederror(0)
            setIsFocus(false);
          }}
         
        />
        </View>
        {Breederror === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter the  Age</Text>
          : null
        }

<View style={Style.inputUnderLine}>
          <TextInput
            placeholder="your location"
            style={Style.inputtextstyle}
        
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setlocationererror(0); setLocation(value); }}
          />
        </View>
        {locationererror === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter the Location </Text>
          : null
        }
       




        <View style={styles.container}>
       
       <Dropdown
         style={[styles.dropdown, isFocus && { borderColor: "#861088" }]}
         data={dataSex}
         maxHeight={300}
         labelField="label"
         valueField="value"
         placeholder={!isFocus ? 'Select Sex' : '...'}
         value={Sex}
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         onChange={item => {
        //    setValue(item.value);
           setSex(item.value);
           setSexerror(0)
           setIsFocus(false);
         }}
        
       />
     </View>
       {Sexererror === 1 ?
         <Text style={Styles.pleseentername}>* Please Enter the sex</Text>
         : null
       }

 <View style={{  paddingTop:50}}>
      {imageSource && <Image source={imageSource} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={ImagePicker} />
    </View>         

      <View style={[Styles.flexrowbutton,{paddingTop:"auto"}]}>
          <Button title="add youre pet"
            onPress={()=> 
              addPetsToAdopt()

              }
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>
      </View>

    
    </View>
  );
};

export default AddPetsScreen;
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingTop: 15,
         marginBottom: 15,

    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });