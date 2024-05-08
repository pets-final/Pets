import React, { useState,useEffect} from "react";
import { View, TextInput, Text, Platform, KeyboardAvoidingView } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import  Button  from '../../components/Button';
// import { RouteName } from '../../routes';
// import RNPickerSelect from 'react-native-picker-select';
import auth from '@react-native-firebase/auth'; // Import the auth module
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';





const NewProduct = () => {

  const [user, setUser] = useState(null); // State to 
  
  useEffect(() => {
    // Get the current user when the component mounts
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
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
      UserId:user.uid,
    }).then((res)=>{
      console.log(user.uid);
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
  useEffect(() => {
 
  }, []);
  return (
<GestureHandlerRootView style={{flex: 1}}>
<KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
    <View style={Styles.mincolorwhite}>
      
      <View style={Styles.tabminview}>
      <View>
        <Text style={{ color: "#861088", fontWeight: "bold" }}>ADD NEW PRODUCT</Text>
      </View>
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

      


    
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Image Url"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => {  setimageUrl(value) }}
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