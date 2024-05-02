import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home'
import Profile from './src/screens/UserProfile/Profile'
import FavoriteTab from './src/screens/Favorites/Favorite';
import Category from './src/screens/Categories/Categories';
import blogs from './src/screens/blogs/blogs';
import ProductTab from './src/screens/ProductList/ProductList';
import IconP from 'react-native-vector-icons/FontAwesome';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconH from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Fontisto';
import IconOC from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabBarIcon = (props) => {
    return (
      <Icon
        name={props.name}
        size={props.size ? props.size : 24}
        color={props.tintColor}
      />
    )
  }
  const TabBarIcontwo = (props) => {
    return (
      <IconO
        name={props.name}
        size={props.size ? props.size : 24}
        color={props.tintColor}
      />
    )
  }
  const Favirouticon = (props) => {
    return (
      <IconF
        name={props.name}
        size={props.size ? props.size : 24}
        color={props.tintColor}
      />
    )
  }
  const TabBarIconoffer = (props) => {
    return (
      <IconP
        name={props.name}
        size={props.size ? props.size : 24}
        color={props.tintColor}
      />
    )
  }
  const TabBarIconorder = (props) => {
    return (
      <IconH
        name={props.name}
        size={props.size ? props.size : 24}
        color={props.tintColor}
      />
    )
  }
  const TabBarIconVideo = (props) => {
    return (
      <IconOC
        name={props.name}
        size={props.size ? props.size : 24}
        color={props.tintColor}
      />
    )
  }
const Nav = () => {

  return (
   
   <Tab.Navigator>
     
   <Tab.Screen name="Home"  options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="home"
            />
          ),
        }} component={Home} />
      <Tab.Screen name="Profile" options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="user"
            />
          ),
        }} component={Profile} />
      <Tab.Screen name="FavoriteTab"  options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Favirouticon
              focused={focused}
              tintColor={color}
              name="favorite"
            />
          ),
        }} component={FavoriteTab} />
      <Tab.Screen name="Category"  options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcontwo
              focused={focused}
              tintColor={color}
              name="category"
            />
          ),
        }} component={Category} />
      <Tab.Screen name="blogs"  options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIconVideo
              focused={focused}
              tintColor={color}
              name="video"
            />
          ),
        }}  component={blogs}  />
      <Tab.Screen name="ProductTab"   options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabBarIconoffer
              focused={focused}
              tintColor={color}
              name="product-hunt"
            />
          ),
        }} component={ProductTab} />

</Tab.Navigator>

 
  )
}

export default Nav

const styles = StyleSheet.create({})