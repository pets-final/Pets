import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, Modal, FlatList, StatusBar, TouchableOpacity, } from "react-native";
import { AccountTabStyle } from '../../styles';
import images from '../../index';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import IconR from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import Button  from '../../components/Button';
import SweetaelertModal  from '../../components/SweetAlertModal';
import { useNavigation } from '@react-navigation/native';
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const db = firestore();
const ProfileTab = ({route}) => {

  const  colorrdata = "#861088"
  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [User,setUser] = useState('')
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoginandRegistrationScreen' }],
        })
      );
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };
  useEffect(() => {
    console.log("User");
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


  const paymentscreen = () => {
    navigation.navigate('');
  }
  const bookmarkscreen = () => {
    navigation.navigate('');
  }
  const settingscreen = () => {
    navigation.navigate('');
  }
  const notificationscreen = () => {
    navigation.navigate('NotificationScreen');
  }
  const [setuserdata] = useState([
    {
      "id": 1,
      "title": "Your Orders History",
      "seticonview": <IconR name="chevron-right" size={20} />,
      "url": 'PaymentHistoryScreen',
    },
    {
      "id": 2,
      "title": "Feedback & Refunds",
      "seticonview": <IconR name="chevron-right" size={20} />,
      "url": '',
    },
    {
      "id": 3,
      "title": "Cart",
      "seticonview": <IconR name="chevron-right" size={20} />,
      "url": 'cart',
    }
  ])

  const Userdatatext = (item, index) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.url,{user:User})}>
        <View style={AccountTabStyle.setbgcolordata}>
          <Text style={[AccountTabStyle.usertextstyle, { color: colorrdata }]}>{item.title}</Text>
          <Text style={{ color: colorrdata }}>{item.seticonview}</Text>
        </View>
      </TouchableOpacity>
    )
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
                  <Text style={[AccountTabStyle.edittextset, { color: "#861088" }]}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={AccountTabStyle.useraccountwhitebox}>
                <View style={AccountTabStyle.fleximageandtext}>

                  <TouchableOpacity>
                    <Image style={AccountTabStyle.imagesetustwo} resizeMode='cover' source={{ uri: User.ImgUrl}} />
                  </TouchableOpacity>
                  <View style={AccountTabStyle.setviewwidth}>
                    <Text style={AccountTabStyle.sumanyatextset}>{ User?.fullname}</Text>
                    <Text style={AccountTabStyle.setgimailtext}>{ User?.email}</Text>
                    <Text style={AccountTabStyle.setgimailtextwo}>{User?.mobilenumber}</Text>
                    <Text style={AccountTabStyle.addreshtext}>{User?.address}</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate('NewProduct')} style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <Icon name="plus" size={20} color={colorrdata} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>Add Product</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => paymentscreen()} style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconI name="wallet" size={20} color={colorrdata} />
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
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Send Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Report an Emergency</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Rate us on the Play Store</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Slider')}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Become A Vet</Text>
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
                  <SweetaelertModal message='Update Successful' link={''} />
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
                        onPress={() => handleLogout()}
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

