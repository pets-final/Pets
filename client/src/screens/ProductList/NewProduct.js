import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import Button from '../../components/Button';
import RNPickerSelect from 'react-native-picker-select';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { utils } from '@react-native-firebase/app';

const NewProduct = () => {
  const [Productname, setproductname] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [AdresseShop, setAdresseShop] = useState('');
  const [ShopName, setShopName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [user, setUser] = useState(null);

  const placeholder = {
    label: 'Select a Category...',
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

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

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

  const addProduct = async () => {
    const urls = await uploadImages();
    firestore().collection('Product').add({
      AdresseShop,
      Category: selectedValue,
      Description,
      ImgUrls: urls,
      Name: Productname,
      Price,
      Promos: 10,
      ShopName,
      Size: Quantity,
      UserId: user.uid,
    }).then(() => {
      setPrice('');
      setproductname('');
      setImageUrls([]);
      setDescription('');
      setQuantity('');
      setSelectedValue(null);
      setAdresseShop('');
      setShopName('');
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={Styles.mincolorwhite}>
          <View style={Styles.tabminview}>
            <ScrollView>
              <View style={Style.inputUnderLine}>
                <TextInput
                  placeholder="Product Name"
                  style={Style.inputtextstyle}
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  onChangeText={(value) => { setproductname(value) }}
                />
              </View>

              <View style={Style.inputUnderLine}>
                <TextInput
                  placeholder="Product Description"
                  style={Style.inputtextstyle}
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  onChangeText={(value) => { setDescription(value) }}
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
                  onChangeText={(value) => { setPrice(value) }}
                />
              </View>

              <View style={Style.inputUnderLine}>
                <TextInput
                  placeholder="Product Quantity"
                  style={Style.inputtextstyle}
                  keyboardType="numeric"
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  onChangeText={(value) => { setQuantity(value) }}
                />
              </View>

              <View style={Style.inputUnderLine}>
                <TextInput
                  placeholder="Shop Name"
                  style={Style.inputtextstyle}
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  onChangeText={(value) => { setShopName(value) }}
                />
              </View>

              <View style={Style.inputUnderLine}>
                <TextInput
                  placeholder="Adresse Shop"
                  style={Style.inputtextstyle}
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  onChangeText={(value) => { setAdresseShop(value) }}
                />
              </View>

              <View>
                <Button style={{ top: 10 }} title=" Add Product Image "
                  onPress={() => ImagePicker()}
                  buttonStyle={Styles.setbuttonborderradius}
                  buttonTextStyle={Styles.textcolorsetwhite}
                />
              </View>

              <View style={Styles.flexrowbutton}>
                <Button title="Add New Product"
                  onPress={() => addProduct()}
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
