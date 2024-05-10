import React from "react";
import { Text, View, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, Image, } from "react-native";
import { YourOrderScreenStyle } from '../../../styles';
import { yourorderdata } from '../../../utils/Sliderimagedata';
import IconR from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";
import { Rating } from 'react-native-ratings';
import { TouchableOpacity } from "react-native-gesture-handler";

const YourOrderScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const yourorderdataitem = (item, index) => {
    return (
      <View>
        <View style={YourOrderScreenStyle.setbgcolorwhitedata}>
          <View style={YourOrderScreenStyle.setmiimagevistyle}>
            <Image style={YourOrderScreenStyle.yourorderdata} resizeMode='contain' source={item.image} />
          </View>
          <View style={YourOrderScreenStyle.flexrowtwxtstyle}>
            <View>
              <Text style={[YourOrderScreenStyle.Frutnamrtextstyle, { color: colorrdata }]}>{item.vadapavtext}</Text>
              <View style={YourOrderScreenStyle.flexrowsetstarsignup}>
                <Rating
                  type='custom'
                  ratingColor='#FFC000'
                  ratingBackgroundColor='#c8c7c8'
                  ratingCount={5}
                  tintColor={'white'}
                  imageSize={15}
                  startingValue={5}
                  isDisabled={false}
                />
                <Text style={YourOrderScreenStyle.fourratingtextstyle}>{item.sitytext}</Text>
              </View>
              <View style={YourOrderScreenStyle.flexrowtextstyle}>
                <Text style={YourOrderScreenStyle.Setweighttextcolor}>{item.weight}</Text>
                <Text style={[YourOrderScreenStyle.Setweighttextcolor, { color: colorrdata }]}>{item.price}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={YourOrderScreenStyle.flexrowrejected}>
                <IconR name={item.icon} color={'red'} size={17} />
                <Text style={YourOrderScreenStyle.Repeatordertextstyle}>{item.rejected}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={YourOrderScreenStyle.flexrowrejectedtwo}>
                <IconM name={item.icontwo} color={colorrdata} size={20} />
                <Text style={YourOrderScreenStyle.Repeatordertextstyle}>{item.repeatorder}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={[YourOrderScreenStyle.minstyleviewphotograpgy, YourOrderScreenStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={YourOrderScreenStyle.minflexview}>
            <View style={YourOrderScreenStyle.minviewsigninscreen}>
              <View style={YourOrderScreenStyle.paddingtopset}>
                <FlatList
                  data={yourorderdata}
                  renderItem={({ item, index }) => yourorderdataitem(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={YourOrderScreenStyle.padinghorizontal}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default YourOrderScreen;
