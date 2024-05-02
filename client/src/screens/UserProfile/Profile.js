import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, Modal, FlatList, StatusBar, TouchableOpacity, } from "react-native";
import { AccountTabStyle } from '../../styles';
import images from '../../index';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import IconR from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import { Button, SweetaelertModal } from '../../components';
import { useNavigation } from '@react-navigation/native';
// import { RouteName } from '../../../routes';
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
// import { colors } from '../../utils';
// import { useSelector } from "react-redux";

const ProfileTab = () => {
  const  colorrdata = "#feb344"
  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setDisplayAlert(0);
    });
  }, [navigation]);
  const paymentscreen = () => {
    navigation.navigate(RouteName.PAYMENTSCREEN);
  }
  const bookmarkscreen = () => {
    navigation.navigate(RouteName.ALL_BOOK_MARK_SCREEN);
  }
  const settingscreen = () => {
    navigation.navigate(RouteName.SETTTING_SCREEN);
  }
  const notificationscreen = () => {
    navigation.navigate(RouteName.NOTIFICATION_SCREEN);
  }
  const [setuserdata] = useState([
    {
      "id": 1,
      "title": "Your Orders",
      "seticonview": <IconR name="chevron-right" size={20} />,
      "url": '',
    },
    {
      "id": 2,
      "title": "Feedback & Refunds",
      "seticonview": <IconR name="chevron-right" size={20} />,
      "url": '',
    },
    {
      "id": 3,
      "title": "Help",
      "seticonview": <IconR name="chevron-right" size={20} />,
      "url": '',
    }
  ])

  const Userdatatext = (item, index) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.url)}>
        <View style={AccountTabStyle.setbgcolordata}>
          <Text style={[AccountTabStyle.usertextstyle, { color: colorrdata }]}>{item.title}</Text>
          <Text style={{ color: colorrdata }}>{item.seticonview}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={[AccountTabStyle.minstyleviewphotograpgy, AccountTabStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[AccountTabStyle.minflexview, AccountTabStyle.bgcolorset]}>
            <View style={AccountTabStyle.minviewsigninscreen}>
              <View style={[AccountTabStyle.flexrowtwxtspace, AccountTabStyle.bgcolorset]}>
                <Text style={AccountTabStyle.persnaltext}>Personal details</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                  <Text style={[AccountTabStyle.edittextset, { color: colorrdata }]}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={AccountTabStyle.useraccountwhitebox}>
                <View style={AccountTabStyle.fleximageandtext}>
                  <TouchableOpacity>
                    <Image style={AccountTabStyle.imagesetustwo} resizeMode='cover' source={images.Ningthty_img} />
                  </TouchableOpacity>
                  <View style={AccountTabStyle.setviewwidth}>
                    <Text style={AccountTabStyle.sumanyatextset}>Sumanya K.</Text>
                    <Text style={AccountTabStyle.setgimailtext}>sumanyak@gmail.com</Text>
                    <Text style={AccountTabStyle.setgimailtextwo}>+91 xxxxxxxxxxx</Text>
                    <Text style={AccountTabStyle.addreshtext}>1417 Timberbrook Lane, Denver, CO 80204, United States</Text>
                  </View>
                </View>
              </View>
              <View style={AccountTabStyle.flexrowsetbgcolor}>
                <TouchableOpacity onPress={() => bookmarkscreen()} style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconF name="bookmark" size={20} color={colorrdata} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>Bookmarks</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => notificationscreen()} style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconI name="notifications-outline" size={20} color={colorrdata} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>Notifications</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => settingscreen()} style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <Icon name="setting" size={20} color={colorrdata} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>Settings</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => paymentscreen()} style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconI name="md-wallet-outline" size={20} color={colorrdata} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>Payments</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <FlatList
                data={setuserdata}
                renderItem={({ item, index }) => Userdatatext(item, index)}
                keyExtractor={item => item.id}
                numColumns={1}
                style={AccountTabStyle.flatelistGrid}
              />
              <View style={AccountTabStyle.fourtextminview}>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.RATING_SCREEN_SET)}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Send Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Report an Emergency</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Rate us on the Play Store</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Log Out</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={AccountTabStyle.setbgwhiteabout}>
                <IconR name="info-with-circle" size={20} color={colorrdata} />
                <Text style={AccountTabStyle.abouttextstyle}>About</Text>
              </TouchableOpacity>
              <View style={AccountTabStyle.centeredView}>
                {DisplayAlert !== 0 ?
                  <SweetaelertModal message='Update Successful' link={RouteName.OFFERS_TAB} />
                  :
                  null
                }
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* Log out Modal start */}
      <View>
        <View style={Style.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={Style.setbgcolorgrsay}>
              <View style={Style.centeredView}>
                <View style={Style.modalView}>
                  <TouchableOpacity style={Style.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                    <Icon
                      size={25}
                      name="close"
                      color={'gray'}
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
                        onPress={() => navigation.navigate(RouteName.LOGIN_AND_REGISTRATION)}
                      />
                    </View>
                    <View style={Style.setokbuttontwo}>
                      <Button title="Cancel"
                        buttonTextStyle={{ color: colorrdata }}
                        buttonStyle={Style.buttoncolorwhite}
                        onPress={() => setModalVisible(!modalVisible)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};
export default ProfileTab;

