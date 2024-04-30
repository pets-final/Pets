import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import Styles from '../../styles/Tab/HometabStyle';
// import { RouteName } from '../../../routes';
import {
  MedicineCategoryHomeTab,
  MegaMedicine,
  MedicineFalteList,
  DoctorListData,
} from '../../utils/Sliderimagedata';

import Button from '../../components/Button';

import images from '../../images/index';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconF from 'react-native-vector-icons/dist/FontAwesome';

const HomeTabset = props => {
  const TodayDeals = [
    {
      id: 1,
      image: images.Home_DealsOfTheDay_img1,
      text: 'Barks & Wags Plaid Pet House',
      hospitalname: '(S, Pink Plaid)',

      price: ' ' + '15',
      pricetwo: ' ' + '20',
      dealendtext: 'Deal Ends :',
      time: '02:53:18',
      buttonaadtext: 'ADD',
      offdecount: 'Up to 30% Off',
    },
    {
      id: 2,
      image: images.Home_DealsOfTheDay_img2,
      text: 'Combo Dog Harness for Easy Walk',
      hospitalname: 'Small, Big',

      price: ' ' + '11',
      pricetwo: ' ' + '10',
      dealendtext: 'Deal Ends :',
      time: '02:53:18',
      buttonaadtext: 'ADD',
      offdecount: 'Up to 25% Off',
      outofstock: 'Out Of Stock',
    },
    {
      id: 3,
      image: images.Home_DealsOfTheDay_img3,
      text: 'Barks & Wags Plaid Pet House',
      hospitalname: '10kg',

      price: ' ' + '2',
      pricetwo: ' ' + '3',
      dealendtext: 'Deal Ends :',
      time: '02:53:18',
      buttonaadtext: 'ADD',
      offdecount: 'Up to 45% Off',
    },
    {
      id: 4,
      image: images.Home_DealsOfTheDay_img4,
      text: 'Classic Pet Chunk Dog Food - Adult',
      hospitalname: 'Medium, 1.2 Kg',

      price: ' ' + '10',
      pricetwo: ' ' + '15',
      dealendtext: 'Deal Ends :',
      time: '02:53:18',
      buttonaadtext: 'ADD',
      offdecount: 'Up to 20% Off',
      outofstock: 'Out Of Stock',
    },
    {
      id: 5,
      image: images.Home_DealsOfTheDay_img5,
      text: 'Woof Natural Chicken and Milk',
      hospitalname: ' 2.2 kg',

      price: ' ' + '13',
      pricetwo: ' ' + '17',
      dealendtext: 'Deal Ends :',
      time: '02:53:18',
      buttonaadtext: 'ADD',
      offdecount: 'Up to 60% Off',
    },
  ];

  const MedicineDeals = (item, index) => {
    return (
      <View style={[Styles.setbgcolorviewtimewrap, Styles.bgcolorset]}>
        <View style={Styles.setbgcolorviewtime}>
          <View>
            <TouchableOpacity style={Styles.flexrowsecenterimage}>
              <Image
                style={Styles.whiteboximage}
                resizeMode="contain"
                source={item.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[Styles.setnormatextstyle]}>{item.text}</Text>
            </TouchableOpacity>

            <View style={Styles.flexrowsettext}>
              <Text style={[Styles.settextprice]}>$ {item.price}</Text>
            </View>
            <View style={Styles.flexrocenterjusty}>
              <View style={Styles.addbutttonwidth}>
                {/* <Button
                  buttonTextStyle={{color: 'red'}}
                  buttonStyle={{height: 45}}
                  title={item.buttonaadtext}
                /> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const MegaMedicineStore = (item, index) => {
    return (
      <View>
        <View style={Styles.minbgviewset}>
          <TouchableOpacity style={Styles.imagecengter}>
            <Image
              style={[
                Styles.whiteboximagetwoset,
                Styles.whiteboximagetwosettwo,
              ]}
              resizeMode="contain"
              source={item.image}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[Styles.settextcolorcenter]}> {item.text}</Text>
          </TouchableOpacity>

          <View style={Styles.flexrowseticonNewArrival}>
            <View>
              <Text style={[Styles.settextpricebold]}> $ {item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const MedicineBox = item => {
    return (
      <View style={Styles.populaitemnearby}>
        <View style={Styles.flexrowtextandimage}>
          <TouchableOpacity>
            <Image
              style={Styles.whiteboximagetwoset}
              resizeMode="cover"
              source={item.image}
            />
          </TouchableOpacity>
          <View style={Styles.setwidthalltext}>
            <TouchableOpacity>
              <Text style={[Styles.settextpricebold]}>{item.text}</Text>
            </TouchableOpacity>
            <Text style={[Styles.settextcolorcentertwo]}>
              {item.hospitalname}
            </Text>
          </View>
          <TouchableOpacity style={Styles.setplusicon}></TouchableOpacity>
        </View>
      </View>
    );
  };
  const doctordatacategoryes = doctordatacategoryes => {
    dispatch(get_doctore_category_action(doctordatacategoryes));
    navigation.navigate(RouteName.PRODUCT_TAB);
  };
  const CategoryListBox = item => {
    return (
      <TouchableOpacity>
        <View style={Styles.flexcenterviewTWO}>
          <View style={Styles.widtsetnew}>
            <View>
              <View style={Styles.imagecenterstyle}>{item.image}</View>
              <View>
                <Text style={Styles.textsetfood}>{item.text}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const DoctorList = item => {
    return (
      <View style={Styles.Doctorbox}>
        <View style={Styles.doctorimagbox}>
          <TouchableOpacity>
            <Image
              style={Styles.Doctorimage}
              resizeMode="contain"
              source={item.doctorImg}
            />
          </TouchableOpacity>
          <Text style={[Styles.Doctornametext]}>{item.doctorname}</Text>
          <Text style={Styles.doctorSpec}>{item.spec}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={Styles.minflexview}>
          <View style={Styles.minviewsigninscreen}>
            <View style={{paddingTop: -30}}>
              {/* <HomeFirstImageSlider /> */}
            </View>
            <View style={Styles.marginsetminview}>
              <View style={Styles.FlexRowBetwn}>
                <Text style={Styles.settopcategories}>Trending Categories</Text>
                <TouchableOpacity>
                  <Text style={[Styles.SeeAlltext]}>See All</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <FlatList
                  data={MedicineCategoryHomeTab}
                  renderItem={({item, index}) => CategoryListBox(item, index)}
                  keyExtractor={item => item.id}
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingLeft: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}
                />
              </View>
              <View>
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategories}>Deals of the day</Text>
                  <View>
                    <FlatList
                      data={TodayDeals}
                      renderItem={({item, index}) => MedicineDeals(item, index)}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingRight: 10,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={[
                    Styles.topspacesetminview,
                    Styles.topspacesetminviewTop,
                  ]}>
                  <Text style={Styles.settopcategories}>Top Selling</Text>
                  <FlatList
                    data={MedicineFalteList}
                    renderItem={({item, index}) => MedicineBox(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{
                      paddingHorizontal: 20,
                      paddingRight: 10,
                    }}
                  />
                </View>
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategoriestwo}>New Arrivals</Text>
                  <FlatList
                    data={MegaMedicine}
                    renderItem={({item, index}) =>
                      MegaMedicineStore(item, index)
                    }
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{
                      paddingHorizontal: 20,
                      paddingRight: 10,
                    }}
                  />
                </View>
                {/* Doctor Profiles */}
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategoriestwo}>Consultant</Text>
                  <FlatList
                    data={DoctorListData}
                    renderItem={({item, index}) => DoctorList(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{
                      paddingHorizontal: 18,
                      paddingRight: 18,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeTabset;