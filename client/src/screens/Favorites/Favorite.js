import React, { useState } from "react";
import { Text, View, Image, FlatList, KeyboardAvoidingView, TouchableOpacity, StatusBar } from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { FavrouteItemList } from '../../utils/Sliderimagedata';
import Icon from "react-native-vector-icons/AntDesign";

const FavoriteTab = () => {
  const colorrdata = "#861088";
  const pricesymboldata = "$";
  const navigation = useNavigation();
  const [liked, setLiked] = useState([]);

  const Docterproductdataitem = (item, index) => {
    return (
      <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>
        <View style={ProductitemList.bgwhiteboxminview}>
          <View style={{
            width: '100%', flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style={ProductitemList.setimageviewstyle} onPress={() => doctordata(item)}>
              <Image style={ProductitemList.pharamacyimagestyle} resizeMode="contain" source={item.image} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
            <Text style={[ProductitemList.textoftitle, { color: colorrdata }]}>{item.text}</Text>
          </TouchableOpacity>
          <Text style={ProductitemList.settextcolorcenterlist}>{item.hospitalname}</Text>
          <View style={ProductitemList.setflexstadr}>
            {item.ratingsset}
            <Text style={[ProductitemList.setratingtextstyle, { color: colorrdata }]}>{item.ratingtext}</Text>
          </View>
          <View style={ProductitemList.justicenterflexrow}>
            <Text style={ProductitemList.boldpricetext}>{pricesymboldata} {item.price}</Text>
            <TouchableOpacity style={[ProductitemList.setplusbgcolorset, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CART_SCREEN)}>
              <Text>{item.iconplusset}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (liked.includes(index)) {
                setLiked([...liked, index]);
              } else {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              }
            }} style={ProductitemList.HeartIconLike}>

            <Icon
              name="heart"
              size={25}
              style={{ color: liked.includes(index) ? 'lightgrey' : colorrdata }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <View style={ProductitemList.minflexview}>
        <View style={ProductitemList.minviewsigninscreen}>
          <View style={ProductitemList.bgcolorwhiteset}>
            <FlatList
              data={FavrouteItemList}
              numColumns={2}
              renderItem={({ item, index }) => Docterproductdataitem(item, index)}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavoriteTab;
