import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, View,Dimensions, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity,ActivityIndicator } from "react-native";
import { ProductDetailes, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import IconH from 'react-native-vector-icons/FontAwesome';
import IconL from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/EvilIcons';
import MapView, { Marker } from 'react-native-maps';
// import Slide from '../../utils/slide'
import { useTogglePasswordVisibility } from '../../utils';



export const PetsDetailesScreen = ({ route }) => {





  const Slide = () => {
   
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef();

  const onChange = ({ window }) => {
    setDimension(window);
  };
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(prevSelectedIndex =>
        prevSelectedIndex === ImgUrls.length - 1 ? 0 : prevSelectedIndex + 1
      );
      scrollRef.current.scrollTo({
        animated: true,
        y: 0,
        x: dimension.width * selectedIndex,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [dimension.width, selectedIndex]);

 

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View style={{ width: 250 , height:250,left:'20%'}}>
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {ImgUrls.map((value, key) => (
          <Image
            key={key}
            source={{ uri: `${value}` }}
            style={[styles.image, { width: dimension.width }]}
            PlaceholderContent={<ActivityIndicator />}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {ImgUrls.map((val, key) => (
          <Text
            key={key}
            style={key === selectedIndex ? styles.paginationActiveText : styles.paginationText}
          >
            -
          </Text>
        ))}
      </View>
    </View>
  );
};



  const { Name, ImgUrl, Adresse, Description, Category, Age, Breed, Sex,ImgUrls
  } = route.params.item;
  console.log("uuuuuuuuuuuuu",ImgUrls)
  const [count, setCount] = useState(1);
  // const ImgUrls = [
  //   { url: 'https://cdn.media.amplience.net/i/petsathome/hp-promo-phase-catlitter-2for20/.webp?w=720&' },
  //   { url: 'https://www.crbgroup.com/wp-content/uploads/2019/11/processed-pet-foods-mobile-scaled.jpg' },
  //   { url: 'https://nextlevelpetfood.com/cdn/shop/files/NextLevel_Render_Composition_5_PurposeLine_RGB_25.png?v=1693230150&width=1500'},
  //   { url: 'https://supertails.com/cdn/shop/files/5th_may_web_2-min_1600x.png?v=1715925375' },
  //   { url: 'https://supertails.com/cdn/shop/files/20th_may_web_4-min_1600x.png?v=1716183548' },
  // ];
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
      <StatusBar barStyle="dark-content"  />
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
                {/* <Image style={ProductDetailes.imagsetstyle} source={{ uri: ImgUrl }} resizeMode="contain" /> */}
                <Slide  />
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
  image: {
    //    width: '100%',
        height: 200,
        // borderRadius: 15,
        marginHorizontal: 0.0001,
        
        // resizeMode: 'cover',
        // padding: 10,
        // margin:10
      },
      pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
      },
      paginationText: {
        color: '#888',
        margin: 3,
        fontSize: 16,
      },
      paginationActiveText: {
        color: 'white',
        margin: 3,
        fontSize: 16,
      },
});

