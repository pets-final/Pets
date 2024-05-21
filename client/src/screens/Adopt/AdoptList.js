import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity ,Alert,AppState} from "react-native";
import { ProductitemList,AccountTabStyle } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { ProductData } from '../../utils/Sliderimagedata';
import { colors } from '../../utils';
import Icon from "react-native-vector-icons/AntDesign";
import IconP from "react-native-vector-icons/MaterialIcons";
import IconA from "react-native-vector-icons/FontAwesome5";
import IconS from "react-native-vector-icons/FontAwesome";
import IconL from "react-native-vector-icons/Entypo";
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
     
        <View style={ProductitemList.bgwhiteboxminview2}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center',height:270 }}>
            <TouchableOpacity style={ProductitemList.setimageviewstyle2} onPress={() => doctordata(item)}>
              <Image style={[ProductitemList.pharamacyimagestyle,{height:250}]} resizeMode="contain" source={{uri:item.ImgUrl}}/>
             

            </TouchableOpacity>
          </View>
          <TouchableOpacity >
            <Text style={[ProductitemList.textoftitle, { color: "black" }]}>
            <IconP
              name="pets"
              size={25}
              style={{ color:  "#861088" }}
            />
                 {" "+ item.Name} 
              
              </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text  numberOfLines={3} style={[ProductitemList.textoftitle2, { color: "black" }]}>
        
              {" "+ item.Description} 
              
              </Text>
          </TouchableOpacity>
         
          
   
          
          <Text style={ProductitemList.settextcolorcenterlist}></Text>
          <View style={ProductitemList.setflexstadr}>
            {item.ratingsset}
            <Text style={[ProductitemList.setratingtextstyle, { color: "#861088" }]}>{item.ratingtext}</Text>
          </View>
          <View style={ProductitemList.justicenterflexrow}>
          <Text style={[ProductitemList.textoftitle, { color: "black" }]}>
            <IconL
              name="location"
              size={25}
              style={{ color:  "#861088" }}
            />
              { " "+item.Adresse} 
              
              </Text>


          <TouchableOpacity >
            <Text style={[ProductitemList.textoftitle, { color: "black" }]}>
            <IconS
              name="intersex"
              size={25}
              style={{ color:  "#861088" }}
            />
              { " "+item.Sex} 
              
              </Text>
          </TouchableOpacity>
          </View>
      
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
