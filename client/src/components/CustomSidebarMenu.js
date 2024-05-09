import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Modal } from "react-native";
import IconG from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/AntDesign';
import IconK from 'react-native-vector-icons/FontAwesome5';
import IconP from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles/CommonStyle/CustomeSlidebar';
import Style from '../styles/CommonStyle/SweetaelertModalStyle';
import IconH from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IcoMI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconC from 'react-native-vector-icons/Ionicons';
import IconZ from 'react-native-vector-icons/Fontisto';
import  Button  from './Button';

const CustomSidebarMenu = (props) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props;
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Styles.customslidebarmenu}>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconE name="home" style={Styles.setwidth} size={23} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconO name="pets" style={Styles.setwidth} color={"#861088"} size={23} />
          <Text style={Styles.hometextstyle}>Pets Category</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconP name="product-hunt" style={Styles.setwidth} color={"#861088"} size={23} />
          <Text style={Styles.hometextstyle}>Product</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconZ name="favorite" style={Styles.setwidth} color={"#861088"} size={23} />
          <Text style={Styles.hometextstyle}>Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconE name="user" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconP name="map-marker" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Saved Addresses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconO name="category" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Product Category</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconG name="refresh" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconO name="track-changes" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconG name="notifications-outline" style={Styles.setwidth} size={23} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconH name="setting" style={Styles.setwidth} size={23} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Setting</Text>
        </TouchableOpacity>      

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconK name="hands-helping" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IconK name="question-circle" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>FAQ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IcoMI name="contactless-payment" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Paymnet History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction()
        }>
          <IcoMI name="chat" size={23} style={Styles.setwidth} color={"#861088"} />
          <Text style={Styles.hometextstyle}>Doctor Chat</Text>
        </TouchableOpacity>

        <View style={Styles.settingandlogout}>
          <TouchableOpacity style={Styles.flexrowset} onPress={()=> setModalVisible(true)}>
            <IconE name="log-out" style={Styles.setwidth} size={23} color={"#861088"} />
            <Text style={Styles.hometextstyle}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={Styles.modalcontainerwrap}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          style={Styles.modalogout}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.setshadowstylemodaltwo}>
                <View style={Styles.setiallpaddingmodal}>
                  <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                    <IconF
                      size={25}
                      name="close"
                      color={'black'}
                    />
                  </TouchableOpacity>
                  <View style={Style.margintop}>
                    <View style={Style.registertextset}>
                      <Text style={Style.settext}>Are You Sure You Want To Sign Out ?</Text>
                    </View>
                  </View>
                  <View style={Style.buttonminview}>
                    <View style={Style.setokbuttontwo}>
                      <Button title="Signout"
                        buttonTextStyle={Style.setbuttontextstyle}
                        buttonStyle={Style.setbuttonstyletwo}
                        onPress={() => {navigation.navigate(EGISTRATION); setModalVisible(!modalVisible)}}
                      />
                    </View>
                    <View style={Style.setokbuttontwo}>
                      <Button title="Cancel"
                        buttonTextStyle={{ color: "#861088" }}
                        buttonStyle={Style.buttoncolorwhite}
                        onPress={() => setModalVisible(!modalVisible)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

