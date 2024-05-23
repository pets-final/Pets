import React,{useEffect,useState} from 'react';
import { Text, View, TouchableOpacity, } from "react-native";
import Styles from '../styles/Tab/HometabStyle';
import IconM from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/FontAwesome';
import NavigationDrawerStructure from './HeaderSidemenuIcon'
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // Import the auth module

const SearchHeaderScreen = ({navigation,user}) => {
  const db = firestore();
  const [User, setUser] = useState(null); // State to hold the user object
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((authUser) => {
      if(authUser){
        const unsubscribe = db.collection('users').doc(authUser.uid).onSnapshot((doc) => {
          if (doc.exists) {
            const userData = doc.data()
            setUser(userData);
            console.log("Current data: ", userData);
          } else {
            console.log("No such document!");
          }
        });
        return () => unsubscribe();
      }
    });
    return subscriber;
  }, []);
  return (
    <View>
      <View style={Styles.minheaderflexview}>
        <TouchableOpacity style={Styles.flexhomeimgandtext} onPress={() => navigation.navigate()}>
        {/* <NavigationDrawerStructure navigationProps={navigation} /> */}
          <View>
            <IconM style={Styles.homeimagstyle} name="home" size={25} color={"#861088"} />
          </View>
          <View>
            <Text style={[Styles.hometext, { color: "#861088" }]}>Home</Text>
            <Text style={[Styles.addreshtext, { color: "#861088" }]}> { User && User.address}</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginRight:30}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('cart')
          }}>
            <IconF name="shopping-cart" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SearchHeaderScreen;