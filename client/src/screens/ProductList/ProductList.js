import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, SafeAreaView } from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils';
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Button from '../../components/Button';
import Icon from "react-native-vector-icons/AntDesign";
import IconS from 'react-native-vector-icons/Entypo';
import Style from '../../styles/CommonStyle/Style';


import auth from '@react-native-firebase/auth'; // Import the auth module
import firestore from '@react-native-firebase/firestore';

const ProductTab = () => {
  const pricesymboldata = '$';
  const navigation = useNavigation();
  const [hearticon, Sethearticon] = useState(0);
  const [liked, setLiked] = useState([]);
  const [productlist, setproductlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Product')
      .onSnapshot(querySnapshot => {
        const products = [];
        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id, // Ensure each product has an id
          });
        });
        setproductlist(products);
        setLoading(false);
      });

    // Clean up
    return () => subscriber();
  }, []);

  const handleLike = async (productId) => {
    try {
      const user = auth().currentUser;
      if (user) {
        const userRef = firestore().collection('users').doc(user.uid);
        const doc = await userRef.get();
        if (doc.exists) {
          const userData = doc.data();
          if (userData.favorite === undefined) {
            // If 'favorite' field is not defined, initialize it as an empty array
            await userRef.update({ favorite: [] });
          }
          // Update the 'favorite' field in user's document
          const updatedFavorites = [...userData.favorite, productId];
          await userRef.update({ favorite: updatedFavorites });
        } else {
          console.log('No such document!');
        }
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }




  const Docterproductdataitem = ({ item, index }) => {
    return ( 

     <View >
        {/* {console.log("product",productlist)} */}


      <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>         
        <View style={ProductitemList.bgwhiteboxminview}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center',height:150 }}>
            <TouchableOpacity style={ProductitemList.setimageviewstyle2} onPress={() => doctordata(item)}>
              <Image style={ProductitemList.pharamacyimagestyle} resizeMode="contain" source={{ uri: item.ImgUrl }} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(('test'), { img: item.image, title: item.Description, hname: item.ShopName })}>
            <Text   numberOfLines={2} style={[ProductitemList.textoftitle, { color: "#861088",height:40 }]}>{item.Name}</Text>
          </TouchableOpacity>
          {/* <Text style={ProductitemList.settextcolorcenterlist}>{item.ShopName}</Text> */}
          {/* <View style={ProductitemList.setflexstadr}>
            {item.ratingsset}
            <Text style={[ProductitemList.setratingtextstyle, { color: "#861088" }]}>{item.ratingtext}</Text>
          </View> */}
          <View style={ProductitemList.justicenterflexrow}>
            <Text style={ProductitemList.boldpricetext}>{pricesymboldata} {item.Price}</Text>
            <TouchableOpacity style={[ProductitemList.setplusbgcolorset, { backgroundColor: "#861088" }]} onPress={() => navigation.navigate(RouteName.CART_SCREEN)}>
              <Text><IconS name="plus" size={20} color={'white'} /></Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
                handleLike(item.id); // Call handleLike function when a user likes a product
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
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <View style={Styles.flexrowbutton}>
        </View>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <View style={ProductitemList.minflexview}>
            <View style={ProductitemList.minviewsigninscreen}>
              <View style={ProductitemList.bgcolorwhiteset}>
                <FlatList
                  data={productlist}
                  numColumns={2}
                  renderItem={Docterproductdataitem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={[ProductitemList.setplusbgcolorset2, { backgroundColor: "#861088" }]} onPress={() => navigation.navigate('NewProduct')}>
            <Text><IconS name="plus" size={40} color={'white'} /></Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default ProductTab;