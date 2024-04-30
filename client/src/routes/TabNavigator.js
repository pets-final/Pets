// import React from 'react';
// import { TouchableOpacity, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Feather';
// import { HomeTab, FavoriteTab, ProductTab, ProfileTab, CategoryTab, VideoTab } from '../screens';
// import IconP from 'react-native-vector-icons/FontAwesome';
// import IconO from 'react-native-vector-icons/MaterialIcons';
// import IconE from 'react-native-vector-icons/EvilIcons';
// import IconH from 'react-native-vector-icons/AntDesign';
// import IconF from 'react-native-vector-icons/Fontisto';
// import IconOC from 'react-native-vector-icons/Octicons';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
// // import CustomSidebarMenu from '../components/commoncomponets/CustomSidebarMenu';
// import Style from '../styles/CommonStyle/Style';
// // import HeaderScreenAddresh from '../components/commoncomponets/HeaderScreenAddresh';
// import { ColorPicker, HeaderScreenAddresh, CustomSidebarMenu } from '../components';
// import { useSelector } from "react-redux";
// import { RouteName } from '../routes';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerSidebarScreen(props) {
//   return (
//     <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
//       <CustomSidebarMenu {...props} />
//     </DrawerContentScrollView>
//   );
// }
// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
//       <Drawer.Screen name="HomeScsreenTabAll"
//         options={{ headerShown: false }}
//         component={HomeScsreenTabAll} />
//     </Drawer.Navigator>
//   );
// }
// function Root() {
//   return (
//     <Stack.Navigator headerMode="screen">
//       <Stack.Screen
//         name="Drawer"
//         component={MyDrawer}
//         options={{
//           title: '',
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen name="Homese" component={HomeScsreenTabAll}
//         options={{
//           title: '',
//           headerShown: false
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// export default Root;


// function HomeTabScreenStack({ navigation }) {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Stack.Navigator initialRouteName="HomeTab">
//       <Stack.Screen
//         name="HomeTab"
//         component={HomeTab}
//         options={{
//           title: null, headerShown: true,
//           headerShadowVisible: false,
//           headerLeft: () => (
//             <View style={Style.flexrowsetaddresh}>
//               <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//                 <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
//               </TouchableOpacity>
//               <HeaderScreenAddresh />
//             </View>
//           ),
//           headerRight: () => (
//             <View style={{ flexDirection: 'row', alignItems: "center", }}>
//               <TouchableOpacity onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)}>
//                 <IconE name="search" size={30} color="black" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate(RouteName.CART_SCREEN)}>
//                 <IconH name="shoppingcart" style={{ marginRight: 5 }} size={23} color="black" />
//               </TouchableOpacity>
//               <ColorPicker />
//             </View>
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function CategoryTabScreenStack({ navigation }) {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Stack.Navigator initialRouteName="CategoryTab">
//       <Stack.Screen
//         name="CategoryTab"
//         component={CategoryTab}
//         options={{
//           title: 'Category', headerShown: true,
//           headerShadowVisible: false,
//           headerTitleStyle: {
//             color: colorrdata,
//             fontWeight: '700',
//           },
//           headerStyle: {

//             fontWeight: '700',
//           },
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//               <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <ColorPicker />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function ProductTabScreenStack({ navigation }) {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Stack.Navigator initialRouteName="ProductTab">
//       <Stack.Screen
//         name="ProductTab"
//         component={ProductTab}
//         options={{
//           title: 'Product', headerShown: true,
//           headerShadowVisible: false,
//           headerTitleStyle: {
//             color: colorrdata,
//             fontWeight: '700',
//           },
//           headerStyle: {
//             backgroundColor: '#fff',
//           },
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//               <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <ColorPicker />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function FaviroutTabScreenStack({ navigation }) {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Stack.Navigator initialRouteName="FavoriteTab">
//       <Stack.Screen
//         name="FavoriteTab"
//         component={FavoriteTab}
//         options={{
//           title: 'Favorite', headerShown: true,
//           headerShadowVisible: false,
//           headerTitleStyle: {
//             color: colorrdata,
//             fontWeight: '700',
//           },
//           headerStyle: {
//             backgroundColor: '#fff',
//           },
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//               <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <ColorPicker />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function VideoTabTabScreenStack({ navigation }) {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Stack.Navigator initialRouteName="VideoTab">
//       <Stack.Screen
//         name="VideoTab"
//         component={VideoTab}
//         options={{
//           title: 'Video', headerShown: true,
//           headerShadowVisible: false,
//           headerTitleStyle: {
//             color: colorrdata,
//             fontWeight: '700',
//           },
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//               <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
//             </TouchableOpacity>
//           ),

//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function ProfileTabTabScreenStack({ navigation }) {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Stack.Navigator initialRouteName="ProfileTab">
//       <Stack.Screen
//         name="ProfileTab"
//         component={ProfileTab}
//         options={{
//           title: 'Profile', headerShown: true,
//           headerShadowVisible: false,
//           headerTitleStyle: {
//             color: colorrdata,
//             fontWeight: '700',
//           },
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//               <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
//             </TouchableOpacity>
//           ),

//         }}
//       />
//     </Stack.Navigator>
//   );
// }



// const TabBarIcon = (props) => {
//   return (
//     <Icon
//       name={props.name}
//       size={props.size ? props.size : 24}
//       color={props.tintColor}
//     />
//   )
// }
// const TabBarIcontwo = (props) => {
//   return (
//     <IconO
//       name={props.name}
//       size={props.size ? props.size : 24}
//       color={props.tintColor}
//     />
//   )
// }
// const Favirouticon = (props) => {
//   return (
//     <IconF
//       name={props.name}
//       size={props.size ? props.size : 24}
//       color={props.tintColor}
//     />
//   )
// }
// const TabBarIconoffer = (props) => {
//   return (
//     <IconP
//       name={props.name}
//       size={props.size ? props.size : 24}
//       color={props.tintColor}
//     />
//   )
// }
// const TabBarIconorder = (props) => {
//   return (
//     <IconH
//       name={props.name}
//       size={props.size ? props.size : 24}
//       color={props.tintColor}
//     />
//   )
// }
// const TabBarIconVideo = (props) => {
//   return (
//     <IconOC
//       name={props.name}
//       size={props.size ? props.size : 24}
//       color={props.tintColor}
//     />
//   )
// }


// export function HomeScsreenTabAll() {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   return (
//     <Tab.Navigator initialRouteName="Homes"
//       tabBarOptions={{
//         activeTintColor: colorrdata,
//         inactiveTintColor: "#302F3C",
//         activeBackgroundColor: "white"
//       }}
//     >
//       <Tab.Screen
//         name={RouteName.HOME_TAB}
//         component={HomeTabScreenStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIcon
//               focused={focused}
//               tintColor={color}
//               name="home"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={RouteName.CATEGORY_TAB}
//         component={CategoryTabScreenStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIcontwo
//               focused={focused}
//               tintColor={color}
//               name="category"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={RouteName.PRODUCT_TAB}
//         component={ProductTabScreenStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIconoffer
//               focused={focused}
//               tintColor={color}
//               name="product-hunt"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={RouteName.Favorite_TAB}
//         component={FaviroutTabScreenStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color }) => (
//             <Favirouticon
//               focused={focused}
//               tintColor={color}
//               name="favorite"
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name={RouteName.VIDEO_TAB}
//         component={VideoTabTabScreenStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIconVideo
//               focused={focused}
//               tintColor={color}
//               name="video"
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name={RouteName.PROFILE_TAB}
//         component={ProfileTabTabScreenStack}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIcon
//               focused={focused}
//               tintColor={color}
//               name="user"
//             />
//           ),
//         }}
//       />


//     </Tab.Navigator>
//   )
// }
