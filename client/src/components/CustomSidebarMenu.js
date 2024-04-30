// import React, { useState } from "react";
// import { Text, View, TouchableOpacity, ScrollView, Modal } from "react-native";
// import IconG from 'react-native-vector-icons/Ionicons';
// import IconE from 'react-native-vector-icons/Feather';
// import IconF from 'react-native-vector-icons/AntDesign';
// import IconK from 'react-native-vector-icons/FontAwesome5';
// import IconP from 'react-native-vector-icons/FontAwesome';
// import Styles from '../../styles/CommonStyle/CustomeSlidebar';
// import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
// import IconH from 'react-native-vector-icons/AntDesign';
// import IconO from 'react-native-vector-icons/MaterialIcons';
// import IcoMI from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconC from 'react-native-vector-icons/Ionicons';
// import IconZ from 'react-native-vector-icons/Fontisto';
// import { useSelector } from "react-redux";
// import { Button } from '../../components';
// import { RouteName } from '../../routes';

// const CustomSidebarMenu = (props) => {
//   const { colorrdata } = useSelector(state => state.commonReducer) || {};
//   // const [modalVisible, setModalVisible] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const { navigation } = props;
//   const Onpressfunction = (e) => {
//     navigation.toggleDrawer();
//     navigation.navigate(e)
//   };
//   return (
//     <ScrollView>
//       <View style={Styles.customslidebarmenu}>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.HOME_TAB)
//         }>
//           <IconE name="home" style={Styles.setwidth} size={23} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.CATEGORY_TAB)
//         }>
//           <IconO name="pets" style={Styles.setwidth} color={colorrdata} size={23} />
//           <Text style={Styles.hometextstyle}>Pets Category</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.PRODUCT_TAB)
//         }>
//           <IconP name="product-hunt" style={Styles.setwidth} color={colorrdata} size={23} />
//           <Text style={Styles.hometextstyle}>Product</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.Favorite_TAB)
//         }>
//           <IconZ name="favorite" style={Styles.setwidth} color={colorrdata} size={23} />
//           <Text style={Styles.hometextstyle}>Favorite</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.PROFILE_TAB)
//         }>
//           <IconE name="user" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.EDIT_LOCATION_SCREEN)
//         }>
//           <IconP name="map-marker" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Saved Addresses</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.PRODUCT_CATEGORY)
//         }>
//           <IconO name="category" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Product Category</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.YOUR_ORDER_SCREEN)
//         }>
//           <IconG name="refresh" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>My Orders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.ORDER_TAB_SCREEN)
//         }>
//           <IconO name="track-changes" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Track Order</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.NOTIFICATION_SCREEN)
//         }>
//           <IconG name="notifications-outline" style={Styles.setwidth} size={23} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Notification</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.SETTTING_SCREEN)
//         }>
//           <IconH name="setting" style={Styles.setwidth} size={23} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Setting</Text>
//         </TouchableOpacity>      

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.DRAWER_HELP_SCREEN)
//         }>
//           <IconK name="hands-helping" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Help</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.FAQ_SCREEN)
//         }>
//           <IconK name="question-circle" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>FAQ</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.PAYMENT_HISTORY)
//         }>
//           <IcoMI name="contactless-payment" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Paymnet History</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={Styles.flexrowset} onPress={
//           () => Onpressfunction(RouteName.DOCTOR_CONSULTANT_SCREEN)
//         }>
//           <IcoMI name="chat" size={23} style={Styles.setwidth} color={colorrdata} />
//           <Text style={Styles.hometextstyle}>Doctor Chat</Text>
//         </TouchableOpacity>

//         <View style={Styles.settingandlogout}>
//           <TouchableOpacity style={Styles.flexrowset} onPress={()=> setModalVisible(true)}>
//             <IconE name="log-out" style={Styles.setwidth} size={23} color={colorrdata} />
//             <Text style={Styles.hometextstyle}>Logout</Text>
//           </TouchableOpacity>
//         </View>

//       </View>
//       <View style={Styles.modalcontainerwrap}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//           }}
//           style={Styles.modalogout}
//         >
//           <View style={Styles.centeredView}>
//             <View style={Styles.modalView}>
//               <View style={Styles.setshadowstylemodaltwo}>
//                 <View style={Styles.setiallpaddingmodal}>
//                   <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
//                     <IconF
//                       size={25}
//                       name="close"
//                       color={'black'}
//                     />
//                   </TouchableOpacity>
//                   <View style={Style.margintop}>
//                     <View style={Style.registertextset}>
//                       <Text style={Style.settext}>Are You Sure You Want To Sign Out ?</Text>
//                     </View>
//                   </View>
//                   <View style={Style.buttonminview}>
//                     <View style={Style.setokbuttontwo}>
//                       <Button title="Signout"
//                         buttonTextStyle={Style.setbuttontextstyle}
//                         buttonStyle={Style.setbuttonstyletwo}
//                         onPress={() => {navigation.navigate(RouteName.LOGIN_AND_REGISTRATION); setModalVisible(!modalVisible)}}
//                       />
//                     </View>
//                     <View style={Style.setokbuttontwo}>
//                       <Button title="Cancel"
//                         buttonTextStyle={{ color: colorrdata }}
//                         buttonStyle={Style.buttoncolorwhite}
//                         onPress={() => setModalVisible(!modalVisible)}
//                       />
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ScrollView>
//   );
// };
// export default CustomSidebarMenu;

