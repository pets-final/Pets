import React, { useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { ProductDetailes, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import IconH from 'react-native-vector-icons/FontAwesome';
import IconL from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/EvilIcons';
import MapView, { Marker } from 'react-native-maps';

import { useTogglePasswordVisibility } from '../../utils';

const doctoreDetaile = {
  "id": 1,
  "image": require("../../images/200by150.png"),
  "price": 120,
  "text": "Kitchen Items",
  "description": "Kitchen Items are essential tools used in the kitchen for cooking, serving, and preparing food. They include utensils, cookware, bakeware, and appliances.",
};

export const PetsDetailesScreen = ({ route }) => {
  const { Name, ImgUrl, Adresse, Description, Category, Age, Breed, Sex } = route.params.item;
  const [count, setCount] = useState(1);
  const colorrdata = "#861088";
  const pricesymboldata = '$';

  const { hearticon, hearticonworthsetthree } = useTogglePasswordVisibility();
  const navigation = useNavigation();

  const backarrow = () => {
    navigation.navigate('tab');
  }

  const [hearticonset, sethearticonset] = useState(0);

  const [mapLayout, setMapLayout] = useState(null);

  const initialRegion = {
    latitude: 36.8916960,
    longitude: 10.1815426,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onMapLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setMapLayout({ width, height });
  };

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
          <View style={[ProductDetailes.minflexview, ProductDetailes.bgcolorset]}>
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
                <Image style={ProductDetailes.imagsetstyle} source={{ uri: ImgUrl }} resizeMode="contain" />
              </View>
              <TouchableOpacity onPress={() => backarrow()} style={Style.settextstyle}>
                <View style={[Style.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
                  <Text style={Style.textstyle}>
                    <IconL name="chevrons-left" size={27} color="white" />
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[ProductDetailes.bgwhiteboxminview, ProductDetailes.bgcolorset]}>
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
                  </View>
                  <View>
                  </View>
                </View>
                <Text style={ProductDetailes.Settextstylefruit}>{Description}</Text>
                <Text></Text>
                {/* <Text style={ProductDetailes.Settextstylefruit}><IconP name="location" size={27} color={colorrdata} />{Adresse}</Text> */}
                <View style={{height:220}} onLayout={onMapLayout}>
                {mapLayout && (
                  <MapView
                    style={styles.map}
                    initialRegion={initialRegion}
                  >
                    <Marker
                      coordinate={{ latitude: 36.8916960, longitude: 10.1815426 }}
                      title={"Clinique Vétérinaire Cité El Ghazela"}
                    />
                  </MapView>
                )}
              </View>
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
          <TouchableOpacity onPress={() => { }}>
          </TouchableOpacity>
        </View>
        <View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 450,
    width: 600,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 450,
    width: '100%',
  },
});
