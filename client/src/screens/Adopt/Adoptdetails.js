import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { ProductDetailes, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo'; // Changed from 'react-native-vector-icons/FontAwesome'
import IconH from 'react-native-vector-icons/FontAwesome'; // Changed from 'react-native-vector-icons/MaterialIcons'
import IconL from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/EvilIcons';

import { useTogglePasswordVisibility } from '../../utils';

const doctoreDetaile = {
  "id": 1,
  "image": require("../../images/200by150.png"),
  "price": 120,
  "text": "Kitchen Items",
  "description": "Kitchen Items are essential tools used in the kitchen for cooking, serving, and preparing food. They include utensils, cookware, bakeware, and appliances.",
};

 export const PetsDetailesScreen = ({route}) => {
  const {Name,ImgUrl,Adresse,Description,Category,Age,Breed,Sex} = route.params.item
  {console.log("rrrrrrrr",route.params.item)}
  const [count, setCount] = useState(1);
  const colorrdata = "#861088"
  ;
  const pricesymboldata = '$';

  const { hearticon, hearticonworthsetthree } = useTogglePasswordVisibility();
  const navigation = useNavigation();

  const backarrow = () => {
    navigation.navigate('tab');
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibletwo, setModalVisibletwo] = useState(false);
  const [sleact, setsleact] = useState('');
  const [hearticonset, sethearticonset] = useState(0)

  const [statelist] = useState([
    {
      "id": 1,
      "textsimple": 'Kitchen Items',
    },
    {
      "id": 2,
      "textsimple": 'Games and Toys',
    },
    {
      "id": 3,
      "textsimple": 'Snacks',
    },
    {
      "id": 1,
      "textsimple": 'Wallets',
    },
    {
      "id": 4,
      "textsimple": 'Ladies Purse',
    },
    {
      "id": 5,
      "textsimple": '{doctoreDetaile.text}',
    },
    {
      "id": 6,
      "textsimple": 'Colddrinks',
    },
    {
      "id": 7,
      "textsimple": 'Body Soap',
    },
    {
      "id": 8,
      "textsimple": 'Baby Lotion',
    },
    {
      "id": 9,
      "textsimple": 'Bakery Items',
    },
    {
      "id": 10,
      "textsimple": 'Dairy Items',
    },
    {
      "id": 11,
      "textsimple": 'Chocolates',
    },
    {
      "id": 12,
      "textsimple": 'Dry {doctoreDetaile.text}',
    },
    {
      "id": 13,
      "textsimple": 'Shampoo',
    },
    {
      "id": 14,
      "textsimple": 'Conditioner',
    },
    {
      "id": 15,
      "textsimple": 'Olive Oil',
    },
    {
      "id": 16,
      "textsimple": 'Potato',
    },
    {
      "id": 17,
      "textsimple": 'MakeUp kit',
    },
    {
      "id": 18,
      "textsimple": 'Seeds',
    },
    {
      "id": 19,
      "textsimple": 'Cake',
    },
  ]);

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
                <Image style={ProductDetailes.imagsetstyle} source={{uri:ImgUrl}}  resizeMode="contain"/>
              </View>
              <TouchableOpacity onPress={() => backarrow()} style={Style.settextstyle}>
                <View style={[Style.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
                  <Text style={Style.textstyle}>
                    <IconL name="chevrons-left" size={27} color="white" />
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[ProductDetailes.bgwhiteboxminview, ProductDetailes.bgcolorset]} >
                {/* <View style={ProductDetailes.bgwhiteboxsmall}>
                  <Text style={ProductDetailes.settextweight}>{pricesymboldata} {doctoreDetaile.price}</Text>
                  <Text style={ProductDetailes.settextweight}> </Text>
                </View> */}
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
                    <Text style={[ProductDetailes.descriptiontextset, { color: colorrdata }]}>{Name}</Text>
                    {/* <Text style={[ProductDetailes.descriptiontextset, { color: colorrdata }]}>22 % Off</Text> */}
                  </View>
                  <View>
                  </View>
                </View>
                <Text style={ProductDetailes.Settextstylefruit}>{Description}</Text>
                  <Text></Text>
                  <Text style={ProductDetailes.Settextstylefruit}><IconP name="location" size={27} color={colorrdata} />{Adresse}</Text>              
              </View>
              <View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[ProductDetailes.setbgcolorviewtwo, { backgroundColor: colorrdata }]}>
        <TouchableOpacity style={ProductDetailes.setwidthprice}>
          <Text style={ProductDetailes.pricetextsetviewtwo}></Text>
        </TouchableOpacity>
        <View style={ProductDetailes.plusandminusflexview}>
          <TouchableOpacity onPress={() => { }}>
            
          </TouchableOpacity>
          <Text style={ProductDetailes.pricetextsetview}>Chat</Text>
          <TouchableOpacity onPress={() =>{}}>
            
          </TouchableOpacity>
        </View>
        <View>
          {/* <TouchableOpacity style={ProductDetailes.setbgcolorwhite} onPress={() => navigation.navigate('tab')}>
            <IconH name="shopping-basket" color={'black'} size={24} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

