import React, { useState,useEffect} from "react";
import { View, TextInput, Text,TouchableOpacity, Platform, KeyboardAvoidingView,ScrollView } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import  Button  from '../../components/Button';
import RNPickerSelect from 'react-native-picker-select';
import auth from '@react-native-firebase/auth'; // Import the auth module
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { utils } from '@react-native-firebase/app';



const NewProduct = () => {
  
  
  // console.log(user)
  const [Productname, setproductname] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Quantity,setQuantity]= useState('')
  const [selectedValue, setSelectedValue] = useState(null);
  const [AdresseShop,setAdresseShop]=useState('')
  const [ShopName,setShopName]=useState('')
  const [uploading, setUploading] = useState(false);
  const [ImgUrl, setImg] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [imageUrl, setimageUrl] = useState('https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg');

  const placeholder = {
    label: 'Select an Category...',
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


  const [user, setUser] = useState(null); // State to 
    
  useEffect(() => {
    // Get the current user when the component mounts
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
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
      setimageUrl(response.assets[0].uri)
      // console.log(response.assets[0].uri)
      uploadImage()
    })

  }

  const uploadImage = async () => {
 const uploadUri=imageUrl;
 let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1); 
      try {
        await storage().ref(filename).putFile(uploadUri);
        const url = await storage().ref(filename).getDownloadURL();
        // console.log(url)
        setImg(url)
        setUploading(false);       
      } catch (error) {
        console.error('Error uploading image:', error);
        setImg(null)
      }

  };


  

const addProduct=()=>{
    firestore().collection('Product').add({
      AdresseShop:AdresseShop,
      Category:selectedValue,
      Description:Description,
      ImgUrl:ImgUrl,
      Name:Productname,
      Price:Price,
      Promos:10,
      ShopName:ShopName,
      Size:Quantity,
      UserId:user.uid,
    }).then((res)=>{
      // console.log(user.uid);
      setPrice('')
      setproductname('')
      setimageUrl('')
      setDescription('')
      setQuantity('')
      setSelectedValue(null)
      setAdresseShop('')
      setShopName('')
      
      // firestore()
      // .collection('Product')
      // .where('UserId', '==', user.uid)
      // .get()
      // .then(querySnapshot => {
      //   const products = querySnapshot.docs.map(doc => doc.data());
      //   console.log('User products: ', products);
      // })
      // .catch(error => {
      //   console.log('Error getting user products: ', error);
      // });

    }).catch((err)=>{
      console.log(err);

    })
  }

  return (
<GestureHandlerRootView style={{flex: 1}}>
<KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
    <View style={Styles.mincolorwhite}>
      
      <View style={Styles.tabminview}>
    
      <ScrollView>

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

      


    

        <View>
     

          <Button  style={{top:10} } title=" Add Product Image "
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

        </ScrollView>


        
      </View>
    </View>
    </KeyboardAvoidingView>

    </GestureHandlerRootView>
  );
};

export default NewProduct;