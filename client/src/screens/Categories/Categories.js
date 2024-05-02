import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
// import { RouteName } from '../../../routes';
import { CategoryData } from '../../utils/Sliderimagedata';
// import { useDispatch } from "react-redux";
// import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { colors } from '../../utils';
// import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
// import { price_symbol_action } from '../../../redux/action/CommonAction';

const Category = () => {

  const  colorrdata = "#feb344"
  const  pricesymboldata  = '$'
  const navigation = useNavigation();
  const [hearticon, Sethearticon] = useState(0);
  // const dispatch = useDispatch();
  const [liked, setLiked] = useState([]);

  let PriceSymbol = '$';

  
 

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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
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
      </ScrollView>
    </View>
  );
};
export default Category;

