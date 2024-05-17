import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Replace with your actual RouteName imports
// import RouteName from '../../navigation/RouteNames'; 

const FavoriteTab = () => {
  const colorrdata = "#861088";
  const pricesymboldata = "$";
  const navigation = useNavigation();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [user, setUser] = useState(null);

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
    <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>
      <View style={ProductitemList.bgwhiteboxminview}>
        <TouchableOpacity 
          style={ProductitemList.setimageviewstyle2} 
          onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { 
            img: item.ImgUrl, title: item.Name, hname: item.ShopName 
          })}
        >
          <Image 
            style={ProductitemList.pharamacyimagestyle} 
            resizeMode="contain" 
            source={{ uri: item.ImgUrl }} 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { 
            img: item.ImgUrl, title: item.Name, hname: item.ShopName 
          })}
        >
          <Text style={[ProductitemList.textoftitle, { color: colorrdata }]}>{item.Name}</Text>
        </TouchableOpacity>

        <Text style={ProductitemList.settextcolorcenterlist}>{item.ShopName}</Text>
        <View style={ProductitemList.setflexstadr}>
          {/* Assuming item.ratingsset is a valid component */}
          {item.ratingsset} 
          <Text style={[ProductitemList.setratingtextstyle, { color: colorrdata }]}>
            {item.ratingtext} 
          </Text>
        </View>
        <View style={ProductitemList.justicenterflexrow}>
          <Text style={ProductitemList.boldpricetext}>
            {pricesymboldata} {item.Price}
          </Text>
          <TouchableOpacity 
            style={[ProductitemList.setplusbgcolorset, { backgroundColor: colorrdata }]} 
            onPress={() => navigation.navigate(RouteName.CART_SCREEN)}
          >
            <Text>{item.iconplusset}</Text> 
          </TouchableOpacity>
        </View>

        {/* Heart Icon to Remove from Favorites */}
        <TouchableOpacity 
          onPress={() => removeFromFavorites(item.id)}  
          style={ProductitemList.HeartIconLike}
        >
          <Icon name="heart" size={25} style={{ color: colorrdata }} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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










// import React, { useState, useEffect } from "react";
// import { Text, View, Image, FlatList, TouchableOpacity, StatusBar } from "react-native";
// import { ProductitemList } from '../../styles';
// import { useNavigation } from '@react-navigation/native';
// import Icon from "react-native-vector-icons/AntDesign";
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

// // Replace with your actual RouteName imports
// // import RouteName from '../../navigation/RouteNames'; 

// const FavoriteTab = () => {
//   const colorrdata = "#861088";
//   const pricesymboldata = "$";
//   const navigation = useNavigation();
//   const [favoriteItems, setFavoriteItems] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged((user) => {
//       setUser(user);
//       if (user) {
//         fetchFavoriteItems(user.uid);
//       }
//     });
//     return subscriber; 
//   }, []);

//   const fetchFavoriteItems = async (userId) => {
//     try {
//       const userDoc = await firestore().collection('users').doc(userId).get();
//       if (userDoc.exists) {
//         const userData = userDoc.data();
//         if (userData.favorite && userData.favorite.length > 0) {
//           const favoriteItemIds = userData.favorite;

//           const favorites = await Promise.all(
//             favoriteItemIds.map(async (itemId) => {
//               const itemDoc = await firestore().collection('Product').doc(itemId).get();
//               if (itemDoc.exists) {
//                 const itemData = itemDoc.data();
//                 return { ...itemData, id: itemId }; // Include the document ID
//               } else {
//                 return null; 
//               }
//             })
//           );

//           setFavoriteItems(favorites.filter(item => item !== null)); 
//         } else {
//           setFavoriteItems([]); 
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching favorite items: ", error);
//     }
//   };

//   const removeFromFavorites = async (itemId) => {
//     console.log("Trying to remove itemId: ", itemId); 

//     try {
//       const userId = user.uid;
//       const userDocRef = firestore().collection('users').doc(userId);

//       await userDocRef.update({
//         favorite: firestore.FieldValue.arrayRemove(itemId),
//       });

//       fetchFavoriteItems(userId);

//     } catch (error) {
//       console.error("Error removing from favorites:", error);
//     }
//   };

//   const Docterproductdataitem = ({ item }) => (
//     <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>
//       <View style={ProductitemList.bgwhiteboxminview}>
//         <TouchableOpacity 
//           style={ProductitemList.setimageviewstyle2} 
//           onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { 
//             img: item.ImgUrl, title: item.Name, hname: item.ShopName 
//           })}
//         >
//           <Image 
//             style={ProductitemList.pharamacyimagestyle} 
//             resizeMode="contain" 
//             source={{ uri: item.ImgUrl }} 
//           />
//         </TouchableOpacity>

//         <TouchableOpacity 
//           onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { 
//             img: item.ImgUrl, title: item.Name, hname: item.ShopName 
//           })}
//         >
//           <Text style={[ProductitemList.textoftitle, { color: colorrdata }]}>{item.Name}</Text>
//         </TouchableOpacity>

//         <Text style={ProductitemList.settextcolorcenterlist}>{item.ShopName}</Text>
//         <View style={ProductitemList.setflexstadr}>
//           {/* Assuming item.ratingsset is a valid component */}
//           {item.ratingsset} 
//           <Text style={[ProductitemList.setratingtextstyle, { color: colorrdata }]}>
//             {item.ratingtext} 
//           </Text>
//         </View>
//         <View style={ProductitemList.justicenterflexrow}>
//           <Text style={ProductitemList.boldpricetext}>
//             {pricesymboldata} {item.Price}
//           </Text>
//           <TouchableOpacity 
//             style={[ProductitemList.setplusbgcolorset, { backgroundColor: colorrdata }]} 
//             onPress={() => navigation.navigate(RouteName.CART_SCREEN)}
//           >
//             <Text>{item.iconplusset}</Text> 
//           </TouchableOpacity>
//         </View>

//         {/* Heart Icon to Remove from Favorites */}
//         <TouchableOpacity 
//           onPress={() => removeFromFavorites(item.id)}  
//           style={ProductitemList.HeartIconLike}
//         >
//           <Icon name="heart" size={25} style={{ color: colorrdata }} />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
//       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
//       <View style={ProductitemList.minflexview}>
//         <View style={ProductitemList.minviewsigninscreen}>
//           <View style={ProductitemList.bgcolorwhiteset}>
//             <FlatList
//               data={favoriteItems}
//               numColumns={2}
//               renderItem={({ item }) => <Docterproductdataitem item={item} />}
//               keyExtractor={(item) => item.id} // Updated to use item.id
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default FavoriteTab;
