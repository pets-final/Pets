import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity , SafeAreaView} from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { ProductData } from '../../utils/Sliderimagedata';
import { colors } from '../../utils';
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import  Button  from '../../components/Button';

import Icon from "react-native-vector-icons/AntDesign";
import Style from '../../styles/CommonStyle/Style';

const ProductTab = () => {
  const pricesymboldata ='$';
  const navigation = useNavigation();
  const [hearticon, Sethearticon] = useState(0);
  const [liked, setLiked] = useState([]);

  const Docterproductdataitem = ({ item, index }) => {
    return (

     
      <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>

         
        <View style={ProductitemList.bgwhiteboxminview}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={ProductitemList.setimageviewstyle} onPress={() => doctordata(item)}>
              <Image style={ProductitemList.pharamacyimagestyle} resizeMode="contain" source={item.image} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
            <Text style={[ProductitemList.textoftitle, { color: "#861088" }]}>{item.text}</Text>
          </TouchableOpacity>
          <Text style={ProductitemList.settextcolorcenterlist}>{item.hospitalname}</Text>
          <View style={ProductitemList.setflexstadr}>
            {item.ratingsset}
            <Text style={[ProductitemList.setratingtextstyle, { color: "#861088" }]}>{item.ratingtext}</Text>
          </View>
          <View style={ProductitemList.justicenterflexrow}>
            <Text style={ProductitemList.boldpricetext}>{pricesymboldata} {item.price}</Text>
            <TouchableOpacity style={[ProductitemList.setplusbgcolorset, { backgroundColor: "#861088" }]} onPress={() => navigation.navigate(RouteName.CART_SCREEN)}>
              <Text>{item.iconplusset}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
              }
            }} style={ProductitemList.HeartIconLike}>
            <Icon
              name="heart"
              size={25}
              style={{ color: liked.includes(index) ? "#861088" : 'lightgrey' }}
            />
          </TouchableOpacity>
          
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView >
  
    <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={Styles.flexrowbutton}>
    </View>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={ProductitemList.minflexview}>
          <View style={ProductitemList.minviewsigninscreen}>
            <View style={ProductitemList.bgcolorwhiteset}>
              <FlatList
                data={ProductData}
                numColumns={2}
                renderItem={Docterproductdataitem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
    </SafeAreaView>
  );
};

export default ProductTab;
