import React, { useEffect,useState } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, AppState, Alert } from "react-native";
import { NotificationStyle } from '../../styles';
import images from '../../index';
import 'firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { FlatList,GestureHandlerRootView } from "react-native-gesture-handler";
const NotificationScreen = () => {
  const db = firestore();
  const [notifications, setNotifications] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setuser(user);
      console.log(user);
      if (user) {
        const unsubscribe = db.collection('notifications')
        .doc(user.uid)
        .collection('items')
        .orderBy('timestamp')
        .onSnapshot(snapshot => {
          console.log('getted');
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setNotifications(data);
          console.log(data.length);
        });
        return () => unsubscribe();
      }
    });
    return () => subscriber();
  }, []);
  
  const addItemToNotifications = async (user, item) => {
    try {
      await db.collection(`notifications/${user.uid}/items`).add({
        ...item,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });
      console.log('Item added!');
    } catch (error) {
      console.error('Error adding item: ', error);
    }
  };
  const item = {
    title: 'Notification Title',
    message: 'Notification Message',
    // other item data...
  };
  
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={[NotificationStyle.minstyleviewphotograpgy, NotificationStyle.bgcolorset, { flex: 1, padding: 0, margin: 0 }]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
            padding: 0,
            margin: 0,
          }}>
          <View style={[NotificationStyle.minflexview, { flex: 1, padding: 0, margin: 0 }]}>
            {notifications.map((item) => (
              <View key={item.id} style={[NotificationStyle.minviewsigninscreen, { height: 'auto', padding: 0, margin: 0 }]}>
                <TouchableOpacity style={[NotificationStyle.flexdiractionrow, { justifyContent: 'flex-start' }]}>
                  <View style={[NotificationStyle.setparegraphwidthtwo, { width: '100%' }]}>
                    <Text style={NotificationStyle.textparegraph}>{item.message}</Text>
                    <Text style={NotificationStyle.twonavemberscreen}>{new Date(item.timestamp.seconds * 1000).toLocaleDateString()}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}  
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  </GestureHandlerRootView>

  );
};
export default NotificationScreen;
