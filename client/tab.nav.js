import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import Profile from './src/screens/UserProfile/Profile';
import FavoriteTab from './src/screens/Favorites/Favorite';
import Category from './src/screens/Categories/Categories';
import blogs from './src/screens/blogs/blogs';
import ProductTab from './src/screens/ProductList/ProductList';
import VetProfileTab from './src/screens/VetProfile/VetProfile'; 
import IconP from 'react-native-vector-icons/FontAwesome';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconH from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Fontisto';
import IconOC from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Tab = createBottomTabNavigator();

// TabBarIcon components
const TabBarIcon = (props) => (
  <Icon
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const TabBarIcontwo = (props) => (
  <IconO
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const Favirouticon = (props) => (
  <IconF
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const TabBarIconoffer = (props) => (
  <IconP
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const TabBarIconaddopt = (props) => (
  <IconE
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const TabBarIconorder = (props) => (
  <IconH
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const TabBarIconVideo = (props) => (
  <IconOC
    name={props.name}
    size={props.size ? props.size : 24}
    color={props.tintColor}
  />
);

const Nav = () => {
  const [isUserVet, setIsUserVet] = React.useState(false);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              const userData = documentSnapshot.data();
              setIsUserVet(userData.accepted || false);
              console.log(userData,'zzzzzzzz');
            }
          })
          .catch(error => {
            console.error('Error fetching user data: ', error);
          });
      } else {
        setIsUserVet(false);
      }
    });

    return () => subscriber(); 
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#861088', 
      }}
    >
      <Tab.Screen 
        name="Home"  
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="home"
            />
          ),
        }} 
      />

      <Tab.Screen 
        name="FavoriteTab"  
        component={FavoriteTab} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Favirouticon
              focused={focused}
              tintColor={color}
              name="favorite"
            />
          ),
        }} 
      />

      <Tab.Screen 
        name="blogs"  
        component={blogs}  
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIconVideo
              focused={focused}
              tintColor={color}
              name="video"
            />
          ),
        }} 
      />

      <Tab.Screen 
        name="ProductTab"   
        component={ProductTab} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIconoffer
              focused={focused}
              tintColor={color}
              name="product-hunt"
            />
          ),
        }} 
      />

      <Tab.Screen 
        name="Profile" 
        component={isUserVet ? VetProfileTab : Profile} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}     
              tintColor={color}
              name="user"
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default Nav;

const styles = StyleSheet.create({});