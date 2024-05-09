import React, { useState, useEffect } from 'react';
import { Text, View, Image,FlatList, ScrollView, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, } from "react-native";
import { CartTabStyle } from '../../styles';
import Icon from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/AntDesign';
import  Button  from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Import the auth module

import firestore from '@react-native-firebase/firestore';

import images from '../../index';
const db = firestore();

const Cart = () => {
  const  colorrdata = "#861088"
  const pricesymboldata  = '$'

  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [count, setCount] = useState(1);
  const [Applycoupon, setApplycoupon] = useState(0);
  const [cartItems, setCartItems] = useState( [
    {
      id: '1',
      name: 'Barks & Wags Plaid Pet House',
      image: images.Cart_screen_img1,
      price: 15,
      count: 1
    },
    {
      id: '2',
      name: 'Dog Food - Chicken & Egg, Puppy',
      image: images.Cart_screen_img2,
      price: 10,
      count: 1
    },
    {
      id: '3',
      name: 'Moochie Beauty skin & coat',
      image: images.Cart_screen_img3,
      price: 5,
      count: 1
    },
    {
      id: '4',
      name: 'Summer Sunglasses',
      image: images.Cart_screen_img4,
      price: 11,
      count: 1
    }
  ],);
  const [user, setUser] = useState(null); // State to hold the user object 
  const [total, setTotal] = useState(0); // State to hold the user object 
  const [counts, setCounts] = useState({});
  
// When you want to increment the count of an item, you can do something like this:
function incrementCount(itemId) {
  setCounts(prevCounts => ({
    ...prevCounts,
    [itemId]: (prevCounts[itemId] || 0) + 1,
  }));
}
useEffect(() => {
  const subscriber =  auth().onAuthStateChanged((user) => {
    setUser(user);
    console.log('subscriber',user);
    
    if (user) { // Check if user is not null
      getAllData(user); // Pass user to getAllData
    }
  });
  return subscriber;
}, []);
const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  const newTotalPrice = calculateTotalPrice(cartItems);
  setTotalPrice(newTotalPrice);
}, [cartItems,counts]);

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
}
const getAllData = async (user) => {
  if (user) { // Check if user is not null
    const snapshot = await db.collection(`Cart/${user.uid}/item`).get();
    
    const data = snapshot.docs.map(doc => ({
      id: doc.id, // Document ID
      ...doc.data() // Document data
    }));
    setCartItems(data);
  }
}

function decrementCount(itemId) {
  setCounts(prevCounts => ({
    ...prevCounts,
    [itemId]: (prevCounts[itemId] || 0) - 1,
  }));
}

const Render = ({item,index})=>{
    return (
      <View style={[CartTabStyle.flexminviewcount, CartTabStyle.bgcolorset]}>
      <View style={CartTabStyle.flexiconandimagetext}>
        <View>
          <Image style={CartTabStyle.setimagehightwidth} resizeMode="contain" source={item.image} />
        </View>
        <View>

          <Text style={CartTabStyle.pistahouse}>{item.name}</Text>
        </View>
      </View>
      <View style={[CartTabStyle.flexiconandimagetext, CartTabStyle.bgcolorset]}>
        <View style={[CartTabStyle.setplusminusflex, CartTabStyle.bgcolorset, { borderColor: colorrdata }]}>
          <TouchableOpacity onPress={() => { if (counts[item.id] > 1) { decrementCount(item.id) } }}>
            <IconA name="minus" size={20} color={colorrdata} />
          </TouchableOpacity>
          <Text style={[CartTabStyle.minustextstyle, { color: colorrdata }]}>{counts[item.id] || 1}</Text>
          <TouchableOpacity onPress={() => incrementCount(item.id)}>
            <IconA name="plus" size={20} color={colorrdata} />
          </TouchableOpacity>
        </View>
      
          <TouchableOpacity>
            <Text style={[CartTabStyle.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {item.price}</Text>
          </TouchableOpacity>
          
         
        
      </View>
    </View>
    )
  }


  return (
    <View style={[CartTabStyle.minstyleviewphotograpgy, CartTabStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: '100%',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[CartTabStyle.minflexview, CartTabStyle.bgcolorset]}>
            <View style={[CartTabStyle.minviewsigninscreen, CartTabStyle.bgcolorset]}>

              <View backgroundColor={colorrdata}>
                <View style={[CartTabStyle.setwhitebox, CartTabStyle.cartboxwrap, CartTabStyle.bgcolorset]}>
                  <View style={[CartTabStyle.flexsetviewwhitebox, CartTabStyle.bgcolorset]}>
                    <View style={CartTabStyle.twoflexview}>
                      <View style={CartTabStyle.settextflexview}>
                        <Text style={CartTabStyle.yourordertextset}>Your Order</Text>
                      </View>
                      <View style={CartTabStyle.flexicondighit}>
                        <Text><Icon name="shopping-bag" size={20} color={'#010101'} /></Text>
                        <Text style={CartTabStyle.twodigitset}>{cartItems.length}</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('checkout',)}>
                      <IconF name="close" size={20} color={'#010101'} />
                    </TouchableOpacity>
                  </View>

                  <View>
                    
                   
                   
                  <FlatList
        data={cartItems}
        renderItem={Render}
        keyExtractor={item => item.id}
      />


                  </View>
                </View>

              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[CartTabStyle.positionabsolutesetbutton, CartTabStyle.bgcolorset]}>
        <View style={CartTabStyle.accountbutton}>
          {Applycoupon === 0 ?
            <View style={CartTabStyle.textcenyet}>
              <View>
                <Text style={CartTabStyle.digitaltextsettwo}>{totalPrice}</Text>
                <Text style={[CartTabStyle.viewdetailesbilltext, { color: colorrdata }]}>Total Amount</Text>
              </View>
            </View>
            :
            <View style={CartTabStyle.textcenyet}>
              <View>
                <Text style={CartTabStyle.digitaltextsettwo}>{totalPrice}</Text>
                <Text style={[CartTabStyle.viewdetailesbilltext, { color: colorrdata }]}>Total Amount</Text>
              </View>
            </View>
          }
          <View style={CartTabStyle.setbuttonwidthview}>
            <Button title="Checkout"
              buttonTextStyle={CartTabStyle.textstylepayment}
              buttonStyle={{ backgroundColor: colorrdata }}
              onPress={() => navigation.navigate('checkout',{totalPrice:totalPrice,cartItems:cartItems})}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Cart;
