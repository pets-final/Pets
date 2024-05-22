import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import images from '../../../index';
import { PaymentHistoryStyle,ProductitemList } from '../../../styles';
import IconM from 'react-native-vector-icons/dist/MaterialIcons';
import IconF from 'react-native-vector-icons/dist/FontAwesome';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const PaymentHistoryScreen = (props) => {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const fetchOrderData = async () => {
          const user = auth().currentUser;
          const uid = user.uid;
          const orderDataRef = firestore().collection('orders').doc(uid);
          const doc = await orderDataRef.get();
          if (doc.exists) {
            setOrderHistory([...doc.data()]);
            console.log("Document data:", doc.data());
          } else {
            console.log("No such document!");
          }
        };
    
        fetchOrderData();

      }, []);
      console.log(orderHistory);
    return (

        <View style={[PaymentHistoryStyle.setcontainer, { backgroundColor: ProductitemList.bgcolorset }]}>
            <ScrollView style={{
                height: '100%',
                width: '100%',
            }}>
                <View style={PaymentHistoryStyle.ContainerAppointmentWrap}>
                    <View style={PaymentHistoryStyle.PaymentBoxwrap}>
                    <View>
      {orderHistory && orderHistory.cartItems.map((item, index) => (
        <View key={index} style={PaymentHistoryStyle.PaymentBoxPerent}>
          <View style={PaymentHistoryStyle.PaymentBox}>
            <View>
              <Image source={images.NotificationImg} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />
            </View>
            <View style={PaymentHistoryStyle.payemnttimebox}>
              <Text style={PaymentHistoryStyle.PayemnttranferheadText}>{item.name}</Text>
              <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,9 2022 at 11:00 AM</Text>
            </View>
          </View>
          <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
            <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}{item.price}</Text>
            <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
          </View>
        </View>
      ))}
    </View>
                      
                    </View>
                </View>


            </ScrollView>
        </View>

    );
}
export default PaymentHistoryScreen;
