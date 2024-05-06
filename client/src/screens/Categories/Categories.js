import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, StatusBar, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { CategoryData } from '../../utils/Sliderimagedata';
import { colors } from '../../utils';
import Icon from "react-native-vector-icons/AntDesign";

const Category = () => {

  const colorrdata = "#861088";
  const pricesymboldata = '$';
  const navigation = useNavigation();
  const [hearticon, Sethearticon] = useState(0);
  const [liked, setLiked] = useState([]);

  const Docterproductdataitem = (item, index) => {
    return (
      <TouchableOpacity style={ProductitemList.CatbgwhiteboxminviewWrap} onPress={() => doctordata(item)}>
        <View style={ProductitemList.Catbgwhiteboxminview}>
          <View>
            <View style={ProductitemList.setimageviewstyle} >
              <Image style={ProductitemList.Cat_pharamacyimagestyle} resizeMode="contain" source={item.image} />
            </View>
            <Text style={ProductitemList.paddTop}>{item.hospitalname}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[ProductitemList.minstyleviewphotograpgyTwo, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <KeyboardAvoidingView enabled>
        <View style={ProductitemList.minflexview}>
          <View style={ProductitemList.Cat_bgcolorwhiteset}>
            <FlatList
              data={CategoryData}
              numColumns={3}
              renderItem={({ item, index }) => Docterproductdataitem(item, index)}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Category;
