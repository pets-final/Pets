import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import IconS from 'react-native-vector-icons/Entypo';


// Replace with your actual RouteName imports
// import RouteName from '../../navigation/RouteNames'; 

const FavoriteTab = () => {
  const colorrdata = "#861088";
  const pricesymboldata = "$";
  const navigation = useNavigation();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState([]);


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        const unsubscribe = firestore()
          .collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              if (userData.favorite && userData.favorite.length > 0) {
                fetchFavoriteItems(userData.favorite);
              } else {
                setFavoriteItems([]);
              }
            }
          });
        return () => unsubscribe();
      }
    });
    return subscriber;
  }, []);

  const fetchFavoriteItems = async (favoriteItemIds) => {
    try {
      const favorites = await Promise.all(
        favoriteItemIds.map(async (itemId) => {
          const itemDoc = await firestore().collection('Product').doc(itemId).get();
          if (itemDoc.exists) {
            const itemData = itemDoc.data();
            return { ...itemData, id: itemId }; // Include the document ID
          } else {
            return null;
          }
        })
      );

      setFavoriteItems(favorites.filter(item => item !== null));
    } catch (error) {
      console.error("Error fetching favorite items: ", error);
    }
  };

  const removeFromFavorites = async (itemId) => {
    console.log("Trying to remove itemId: ", itemId);

    try {
      const userId = user.uid;
      const userDocRef = firestore().collection('users').doc(userId);

      await userDocRef.update({
        favorite: firestore.FieldValue.arrayRemove(itemId),
      });

      // The onSnapshot listener will handle the update
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  const Docterproductdataitem = ({ item }) => (
    <View >
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
        <TouchableOpacity 
          onPress={() => removeFromFavorites(item.id)}  
          style={ProductitemList.HeartIconLike}
        >
          <Icon name="heart" size={25} style={{ color: colorrdata }} />
        </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={ProductitemList.minflexview}>
        <View style={ProductitemList.minviewsigninscreen}>
          <View style={ProductitemList.bgcolorwhiteset}>
            <FlatList
              data={favoriteItems}
              numColumns={2}
              renderItem={({ item }) => <Docterproductdataitem item={item} />}
              keyExtractor={(item) => item.id} // Updated to use item.id
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default FavoriteTab;