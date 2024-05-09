import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { ProductDetailes, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo'; // Changed from 'react-native-vector-icons/FontAwesome'
import IconH from 'react-native-vector-icons/FontAwesome'; // Changed from 'react-native-vector-icons/MaterialIcons'
import IconL from 'react-native-vector-icons/Feather';
import { useTogglePasswordVisibility } from '../../utils';
import SweetaelertModal from '../../components/SweetAlertModal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Product = {
  "id": 1,
  "image": require("../../images/200by150.png"),
  "price": 120,
  "text": "Kitchen Items",
  "description": "Kitchen Items are essential tools used in the kitchen for cooking, serving, and preparing food. They include utensils, cookware, bakeware, and appliances.",
};
const db = firestore();

 export const ProductDetailesScreen = () => {
  const [count, setCount] = useState(1);
  const colorrdata = "#861088"
  ;
  const pricesymboldata = '$';
  const [EmailSendAlert, setEmailSendAlert] = useState(0);
  const [user, setuser] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setuser(user);
    })
  },[])
  const backarrow = () => {
    navigation.navigate('tab');
  }
  const HandleAddToCart =  async () => {
    await db.collection(`Cart/${user.uid}/item`).add({
     Product,
    });
    setEmailSendAlert(1)
  }
  const [hearticonset, sethearticonset] = useState(0)

  

  return (
    <View style={ProductDetailes.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[ProductDetailes.minflexview, ProductDetailes.bgcolorset]} >
            <View style={[ProductDetailes.minviewsigninscreen, ProductDetailes.bgcolorset]}>
              <TouchableOpacity style={ProductDetailes.flrxfireiocnview} onPress={() => navigation.navigate('tab')}>
                <View style={ProductDetailes.setdotflex}>
                  <Text style={ProductDetailes.setbgcolor}></Text>
                  <Text style={ProductDetailes.setbgcolortwo}></Text>
                </View>
                <TouchableOpacity style={ProductDetailes.setdotflex}>
                  <Text style={ProductDetailes.caltextstyle}>4.5</Text>
                  <Text><Icon name="star" color={'white'} size={19} /></Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={[ProductDetailes.setimagestylewidth, { backgroundColor: colorrdata }]}>
                <Image style={ProductDetailes.imagsetstyle} source={Product.image} resizeMode="contain"/>
              </View>
              <TouchableOpacity onPress={() => backarrow()} style={Style.settextstyle}>
                <View style={[Style.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
                  <Text style={Style.textstyle}>
                    <IconL name="chevrons-left" size={27} color="white" />
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[ProductDetailes.bgwhiteboxminview, ProductDetailes.bgcolorset]} >
                <View style={ProductDetailes.bgwhiteboxsmall}>
                  <Text style={ProductDetailes.settextweight}>{pricesymboldata} {Product.price}</Text>
                  <Text style={ProductDetailes.settextweight}> 5 Kg</Text>
                </View>
                {hearticonset === 0 ?
                  <TouchableOpacity onPress={() => sethearticonset(1)} style={[ProductDetailes.HeartIconLike, Style.setbgcolorborder]}>
                    <IconH name="heart" size={25} color={colorrdata} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => sethearticonset(0)} style={[ProductDetailes.HeartIconLike, Style.setbgcolorborder]}>
                    <IconH name="heart-o" size={25} color={colorrdata} />
                  </TouchableOpacity>
                }
                <View style={[ProductDetailes.setallpading, ProductDetailes.bgcolorset]}>
                  <View style={[ProductDetailes.descripitionviewone, ProductDetailes.bgcolorset]}>
                    <Text style={[ProductDetailes.descriptiontextset, { color: colorrdata }]}>{Product.text}</Text>
                    {/* <Text style={[ProductDetailes.descriptiontextset, { color: colorrdata }]}>22 % Off</Text> */}
                  </View>
                  <View>
                  </View>
                </View>
                <Text style={ProductDetailes.Settextstylefruit}>{Product.text} are the means by which flowering plants (also known as angiosperms) disseminate their seeds.
                  Edible {Product.text} is a small outdoor structure designed for pets, typically dogs or cats, to use as a shelter from the elements. They can be made from a variety of materials, such as wood, plastic, or metal, and come in a range of sizes to accommodate different sized pets. Some pet houses are insulated to keep pets warm in cold weather, and some have a slanted roof to allow for proper drainage. </Text>
                  <Text></Text>
                  <Text style={ProductDetailes.Settextstylefruit}>{Product.text} They can be purchased pre-made or built from a kit, and some pet owners even choose to build their own pet houses. </Text>              
              </View>
              <View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[ProductDetailes.setbgcolorviewtwo, { backgroundColor: colorrdata }]}>
        <TouchableOpacity style={ProductDetailes.setwidthprice}>
          <Text style={ProductDetailes.pricetextsetviewtwo}>{pricesymboldata} {count}</Text>
        </TouchableOpacity>
        <View style={ProductDetailes.plusandminusflexview}>
          <TouchableOpacity onPress={() => { if (count > 1) { setCount(count - 1) } }}>
            <Icon name="minus" size={20} color='white' />
          </TouchableOpacity>
          <Text style={ProductDetailes.pricetextsetview}>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Icon name="plus" size={20} color='white' />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={ProductDetailes.setbgcolorwhite} onPress={() =>  HandleAddToCart()  }>
            <IconH name="shopping-basket" color={'black'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View >
        {EmailSendAlert !== 0 ?
          <SweetaelertModal message='Product Added Successfully' link={('')} />
          :
          null
        }
      </View>
    </View>
  );
}

