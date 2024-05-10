import React, { useState } from "react";
import { Text, View, ScrollView, StatusBar, TextInput, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {PopularCuisinesStyle} from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {  HospitalListingdata } from '../../../utils/Sliderimagedata';
import { RouteName } from '../../../routes';
import { useSelector } from "react-redux";
import { SearchFilter } from '../../../components';

const PopularMedicine = () => {
  const navigation = useNavigation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [searchdata, setsearchdata] = useState("");
  const [searchdataset] = useState([
    {
      "id": 1,
      "text": 'Pet House',
      "iconname": 'search1',
    },
    {
      "id": 2,
      "text": 'Dog Harness',
      "iconname": 'search1',
    },
    {
      "id": 3,
      "text": 'Cat Food',
      "iconname": 'search1',
    },
    {
      "id": 4,
      "text": 'Accessory',
      "iconname": 'search1',
    },
    {
      "id": 5,
      "text": 'Washing Product',
      "iconname": 'search1',
    },
  ])
  const HospitalListingdataitem = (item, index) => {
    return (
      <TouchableOpacity style={PopularCuisinesStyle.BoxShadow} onPress={() => navigation.navigate((RouteName.HOSPITAL_MEDICINE_SCREEN), { img: item.image })}>
        <View style={[PopularCuisinesStyle.setflexviewdata, PopularCuisinesStyle.searchtextlist]}>
          <View>
            {item.image}
          </View>
          <View style={PopularCuisinesStyle.textflexview}>
            <View style={PopularCuisinesStyle.setflextext}>
              <Text style={[PopularCuisinesStyle.textboldstyle, { color: colorrdata }]}>{item.hospitalname}</Text>
              <Text style={PopularCuisinesStyle.textboldstyletwo}>{item.text}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={PopularCuisinesStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={PopularCuisinesStyle.minflexview}>
            <View style={PopularCuisinesStyle.minviewsigninscreen}>
              <View style={[PopularCuisinesStyle.setbgcolorred, { backgroundColor: colorrdata }]}></View>
              <View style={PopularCuisinesStyle.flexinputstyle}>
                <View style={PopularCuisinesStyle.flextextinput}>
                  <TouchableOpacity>
                    <Icon name="search1" size={20} color={'#4F4F4F'} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      value={searchdata}
                      onChangeText={(text) => setsearchdata(text)}
                      placeholder="Search items nearby"
                      placeholderTextColor={'lightgrey'}
                      style={PopularCuisinesStyle.setinputtext}
                    />
                  </View>
                </View>
                <TouchableOpacity style={PopularCuisinesStyle.seticonborder}>
                  <IconF name="filter" size={20} color={colorrdata} />
                </TouchableOpacity>
              </View>
              <View style={PopularCuisinesStyle.setbgcolorviewmin}>
                <View style={PopularCuisinesStyle.bgcolorsetvikewstyle}>
                  {/* <Text style={PopularCuisinesStyle.textPopularCuisinesStyleearches}>Recent Searches</Text> */}
                  <SearchFilter data={searchdataset} searchdata={searchdata} setsearchdata={setsearchdata} />
                </View>
                <View style={PopularCuisinesStyle.setspacecomeview}>
                  {/* <Text style={PopularCuisinesStyle.popularmedicine}>Popular Medicine</Text> */}
                  {/* <FlatList
                    data={MedicineCategoryHomeTab}
                    renderItem={({ item, index }) => MedicineCategoryHomeTabdata(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={PopularCuisinesStyle.setflex}
                  /> */}
                  <FlatList
                    data={HospitalListingdata}
                    renderItem={({ item, index }) => HospitalListingdataitem(item, index)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>

  );
};

export default PopularMedicine;
