import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity ,Alert,AppState} from "react-native";
import { ProductitemList,AccountTabStyle } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { ProductData } from '../../utils/Sliderimagedata';
import { colors } from '../../utils';
import Icon from "react-native-vector-icons/AntDesign";
import auth from '@react-native-firebase/auth'; // Import the auth module
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';


const ProductTab = () => {
 
  const pricesymboldata ='$';
  const navigation = useNavigation();
  const [hearticon, Sethearticon] = useState(0);
  const [liked, setLiked] = useState([]);
  const [adoptPets, setadoptPets] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  const getdata=()=>{
    const subscriber = firestore()
    .collection('Animal')
    .onSnapshot(querySnapshot => {
      

      querySnapshot.forEach(documentSnapshot => {
        adoptPets.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setadoptPets(adoptPets);
      setLoading(false);
    });
  }
 


  useEffect(() => {
    getdata()
  
   
  }, []);

  const Docterproductdataitem = ({ item, index }) => {
    return (
      
      <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>
        {/* {console.log("adopt ",adoptPets)} */}
        <View style={ProductitemList.bgwhiteboxminview2}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={ProductitemList.setimageviewstyle2} onPress={() => doctordata(item)}>
              <Image style={ProductitemList.pharamacyimagestyle} resizeMode="contain" source={{uri:item.ImgUrl}}/>
             {/* { console.log("image url",item.ImgUrl)} */}

            </TouchableOpacity>
          </View>
          <TouchableOpacity >
            <Text style={[ProductitemList.textoftitle, { color: "#861088" }]}>Name : {item.Name} </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={[ProductitemList.textoftitle, { color: "#861088" }]}>Age : {item.Age} </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={[ProductitemList.textoftitle, { color: "#861088" }]}>Sex : {item.Sex}</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={[ProductitemList.textoftitle, { color: "#861088" }]}>Adresse : {item.Adresse} </Text>
          </TouchableOpacity>
          <Text style={ProductitemList.settextcolorcenterlist}></Text>
          <View style={ProductitemList.setflexstadr}>
            {item.ratingsset}
            <Text style={[ProductitemList.setratingtextstyle, { color: "#861088" }]}>{item.ratingtext}</Text>
          </View>
          <View style={ProductitemList.justicenterflexrow}>
          <Text style={ProductitemList.boldpricetext}>06/05/2024</Text>

            <TouchableOpacity style={[ProductitemList.setplusbgcolorset, { backgroundColor: "#861088" }]} onPress={() => navigation.navigate(RouteName.CART_SCREEN)}>
              <Text>{item.iconplusset}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
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
    );
  }

  return (
    <View>
    
      <View style={[AccountTabStyle.flexrowtwxtspace, AccountTabStyle.bgcolorset]}>
                <Text style={AccountTabStyle.persnaltext}>All Pets</Text>
                <TouchableOpacity onPress={() => navigation.replace('AddPetsScreen')}>
                  <Text style={[AccountTabStyle.edittextset, { color: "#861088" }]}>Add your Pets</Text>
                </TouchableOpacity>
              </View>


    <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={ProductitemList.minflexview}>
          <View style={ProductitemList.minviewsigninscreen}>
            <View style={ProductitemList.bgcolorwhiteset}>
              <FlatList
                data={adoptPets}
                numColumns={1}
                renderItem={Docterproductdataitem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
    </View>
  );
};

export default ProductTab;
