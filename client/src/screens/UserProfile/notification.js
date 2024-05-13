import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import Button from '../../components/Button';
import {NotificationStyle} from '../../styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const NotificationScreen = ({navigation}) => {
  const db = firestore();
  const [notifications, setNotifications] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        const unsubscribe = db
          .collection('notifications')
          .doc(user.uid)
          .collection('items')
          .orderBy('timestamp', 'desc')
          .limit(20)
          .onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setNotifications(data);
            setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
            setIsLoading(false);
          });

        return () => unsubscribe();
      }
    });
    return () => subscriber();
  }, []);

  const loadMoreNotifications = () => {
    if (lastDoc) {
      db.collection('notifications')
        .doc(auth().currentUser.uid)
        .collection('items')
        .orderBy('timestamp', 'desc')
        .startAfter(lastDoc)
        .limit(20)
        .get()
        .then(snapshot => {
          const newNotifications = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setNotifications(prevNotifications => [
            ...prevNotifications,
            ...newNotifications,
          ]);
          setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        });
    }
  };
  
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
  const EmptyCart = () => (
    <View style={NotificationStyle.container}>
      <Image 
        source={{ uri: 'https://png.pngtree.com/png-clipart/20231004/original/pngtree-simple-bell-line-icon-notification-bell-web-vector-png-image_12953830.png' }} 
        style={NotificationStyle.image} 
      />
<Text style={NotificationStyle.title}>No Notifications</Text>
<Text style={NotificationStyle.subtitle}>You don't have any notifications at this time.</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('tab')} />
    </View>
  );
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={[
          NotificationStyle.minstyleviewphotograpgy,
          NotificationStyle.bgcolorset,
          {flex: 1, padding: 0, margin: 0},
        ]}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <KeyboardAvoidingView enabled style={{flex: 1}}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              width: '100%',
              height: 'auto',
              padding: 0,
              margin: 0,
            }}
            >
            <View
              style={[
                NotificationStyle.minflexview,
                {flex: 1, padding: 0, margin: 0},
              ]}>
                {isLoading ? (
          <ActivityIndicator style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center',flex:1 }} size="large" color="#0000ff" />
        ) : (
          null
        )}
         <View style={{height:500, marginTop:20}}>
        {isLoading === false && notifications.length === 0 ? <EmptyCart/> : null}
        </View>
              <FlatList
                data={notifications}
                keyExtractor={item => item.id}
                onEndReached={loadMoreNotifications}
  onEndReachedThreshold={0.1}
                renderItem={({item}) => (
                  <View
                    style={[
                      NotificationStyle.minviewsigninscreen,
                      {height: 'auto', padding: 0, margin: 0},
                    ]}>
                    <TouchableOpacity
                      style={[
                        NotificationStyle.flexdiractionrow,
                        {justifyContent: 'flex-start'},
                      ]}>
                      <View
                        style={[
                          NotificationStyle.setparegraphwidthtwo,
                          {width: '100%'},
                        ]}>
                        <Text style={NotificationStyle.textparegraph}>
                          {item.message}
                        </Text>
                        <Text style={NotificationStyle.twonavemberscreen}>
                          {new Date(
                            item.timestamp && item.timestamp.seconds * 1000,
                          ).toLocaleDateString()}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </GestureHandlerRootView>
  );
};

export default NotificationScreen;
