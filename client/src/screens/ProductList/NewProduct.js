import React, { useState,useEffect} from "react";
import { View, TextInput,Text,TouchableOpacity  } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import  Button  from '../../components/Button';
// import { RouteName } from '../../routes';
import RNPickerSelect from 'react-native-picker-select';
import auth from '@react-native-firebase/auth'; // Import the auth module
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




const NewProduct = () => {

  const ImagePicker=()=>{
    let option={
      storageOptions: {
        path: 'image',
      },
    }
    launchImageLibrary(option,response=>{
      setimageUrl(response.assets[0].uri)
      console.log(response.assets[0].uri)
      uploadImage(response.assets[0].uri)
    })
    

  }


  const uploadImage = async () => {
    if (imageUrl) {
      const storageRef = storage().ref(); // Get a reference to the root of storage
      const filename = imageUrl.split('/').pop(); // Extract the filename from the URI
      const imageRef = storageRef.child(`images/${filename}`); // Create a reference with a path inside 'images' folder
  
      try {
        await imageRef.putFile(imageUrl); // Upload the image
  
        const imageUrl = await imageRef.getDownloadURL(); // Get the download URL after upload
  
        // Push the download URL to Firestore (or your chosen database)
        console.log('Image uploaded successfully!', imageUrl);
        return imageUrl; // You can return the imageUrl here
  
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.warn('Please select an image first.');
    }
  
    return null; // Indicate no image uploaded in case of errors
  };


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




  console.log(user)
  const [Productname, setproductname] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Quantity,setQuantity]= useState('')
  const [selectedValue, setSelectedValue] = useState(null);
  const [AdresseShop,setAdresseShop]=useState('')
  const [ShopName,setShopName]=useState('')

  const placeholder = {
    label: 'Select an option...',
    value: null,
  };
  const options = [
    { label: 'Food', value: 'Food' },
    { label: 'Trats', value: 'Trats' },
    { label: 'WalkingEssential', value: 'WalkingEssential' },
    { label: 'Health', value: 'Health' },
    { label: 'Hygiene', value: 'Hygiene' },
    { label: 'Supplies', value: 'Supplies' },
  ];

const addProduct=()=>{
    firestore().collection('Product').add({
      AdresseShop:AdresseShop,
      Category:selectedValue,
      Description:Description,
      ImgUrl:imageUrl,
      Name:Productname,

      Price:Price,
      Promos:10,
      ShopName:ShopName,
      Size:Quantity,
      IdShoper:user.uid,
    }).then((res)=>{
      Alert.alert("Product posted")

    }).catch((err)=>{
      console.log(err);

    })
  }
  

 

  
  return (
    <View style={Styles.mincolorwhite}>
      <View style={Styles.tabminview}>
      <View>
        <Text style={{ color: "#861088", fontWeight: "bold" }}>ADD NEW PRODUCT</Text>
      </View>

      <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Product Name"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {setproductname(value) }}
          />
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Product Description"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setDescription(value) }}
          />
        </View>

        <View>
          <Text>Select Category :</Text>
            <RNPickerSelect
              placeholder={placeholder}
              items={options}
              onValueChange={(value) => setSelectedValue(value)}
              value={selectedValue}
            />
              {selectedValue && <Text>Selected: {selectedValue}</Text>}
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Product Price"
            style={Style.inputtextstyle}
            keyboardType="numeric"
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setPrice(value) }}
          />
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Product Quantity"
            style={Style.inputtextstyle}
            keyboardType="numeric"
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setQuantity(value) }}
          />
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Shop Name"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setShopName(value) }}
          />
        </View>

        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Adresse Shop"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setAdresseShop(value) }}
          />
        </View>

      


    
        {/* <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Image Url"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setimageUrl(value) }}
          />
        </View> */}


        {/* //test Image */}
        <View>
     

          <Button title=" Add Product Image "
         onPress={()=>ImagePicker()}
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>


        <View style={Styles.flexrowbutton}>
          <Button title="Add New Product"
            onPress={()=> addProduct()}
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>

    


        

      </View>
    </View>
  );
};

export default NewProduct;