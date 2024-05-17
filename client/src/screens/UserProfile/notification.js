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
import { addItemToNotifications } from '../../utils/sendNotification.js';
const categorisedImages = {
  "General": "https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-et-d-alerte-violette.png",
  "adoption": "https://i.pinimg.com/736x/01/80/aa/0180aa58526930c0dc0961591fd6a9ef.jpg",
  "appointment": "https://as2.ftcdn.net/v2/jpg/02/68/46/77/1000_F_268467717_vEMz8PfPxLqSA6DkQoqqHQlvut2ofrmQ.jpg",
}

const NotificationScreen = ({navigation}) => {
  const db = firestore();
  const [notifications, setNotifications] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [User, setuser] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
    .collection('notifications')
    .doc(auth().currentUser.uid)
    .collection('items')
    .onSnapshot(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        setNotifications(prevNotifications => [
          ...prevNotifications,
          {
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }
        ]);
      });
      setIsLoading(false);
    });
  }, []);

  const formatElapsedTime = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp?.seconds * 1000);
    const diff = now - time; // difference in milliseconds
  
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
  };
  
  const loadMoreNotifications = () => {
    if (lastDoc) {
      db.collection('notifications')
        .doc(auth().currentUser.uid)
        .collection('items')
        .orderBy('timestamp', 'desc')
        .startAfter(lastDoc)
        // .limit(20)
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

  // const addItemToNotifications = async (user, item) => {
  //   try {
  //     const { url, imageUri, category, message } = item;
  //     const categoryImageUri = categorisedImages[category] || categorisedImages['General'];
  
  //     await db.collection(`notifications/${user.uid}/items`).add({
  //       url: url || 'tab',
  //       imageUri: imageUri || categoryImageUri,
  //       category: category || 'General',
  //       message: message,
  //       timestamp: firestore.FieldValue.serverTimestamp(),
  //     });
  //     console.log('Item added!');
  //   } catch (error) {
  //     console.error('Error adding item: ', error);
  //   }
  // };  
      const handleSendNotification = async (category,message) => {
        const uid = User.uid;
        const deviceToken = "cQSWf4JqSU-TijlwWOVMg9:APA91bFCHikL-Nbd2rUrvsXJAiKhSTCyGtrJq88-t-K9OI6h_8K2zWEB4Z_5p_fuDBsTxg2-kniSAybyydXaDnZyW48-mBTx2T4nwW8a4mVfM2Tfs0doqTJOtxhYKOkdfPQmKZpt3CGa";
        
        const item = {
          category: "adoption",
          message: "You have a new adoption request", // Add your message here
          token: deviceToken, // Add the token to the item
        };
        
        addItemToNotifications(uid, item)
          .then((res) => console.log("Notification sent successfully", res))
          .catch((error) => console.error("Failed to send notification", error));}
  const EmptyCart = () => (
    <View style={NotificationStyle.container}>
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20231004/original/pngtree-simple-bell-line-icon-notification-bell-web-vector-png-image_12953830.png',
        }}
        style={NotificationStyle.image}
      />
      <Text style={NotificationStyle.title}>No Notifications</Text>
      <Text style={NotificationStyle.subtitle}>
        You don't have any notifications at this time.
      </Text>
      <Button title="Go Back" onPress={() => navigation.navigate('tab')} />
    </View>
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAvoidingView enabled style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            padding: 0,
            margin: 0,
          }}>
          <View
            style={[
              NotificationStyle.minstyleviewphotograpgy,
              NotificationStyle.bgcolorset,
              {flex: 1, padding: 0, margin: 0},
            ]}>
            {isLoading ? (
              <ActivityIndicator
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}
                size="large"
                color="#0000ff"
              />
            ) : (
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={handleSendNotification}
                 
               >
                  <Text>add</Text>
                </TouchableOpacity>
                {notifications.length === 0 ? (
                  <EmptyCart />
                ) : (
                  <FlatList
                    data={notifications}
                    keyExtractor={item => item.id}
                    // onEndReached={loadMoreNotifications}
                    // onEndReachedThreshold={0.1}
                    renderItem={({item}) => (
                      <View
                       
                        style={[
                          NotificationStyle.minviewsigninscreen,
                          {
                            width: 370,

                            height: 'auto',
                            margin: 15,
                            marginBottom: 0,
                            backgroundColor: '#ffffff',
                            borderRadius: 10,
                          },
                        ]}>
                        <TouchableOpacity
                         onPress={() => {
                          navigation.navigate(item.url || 'tab');
                          console.log('pressed');
                        }}
                          style={[
                            {
                              justifyContent: 'flex-start',
                              padding: 15,
                              backgroundColor: '#f0f0f0',
                              borderRadius: 10,
                              alignItems: 'center',
                            },
                          ]}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={{
                                uri:
                                  item.imageUri ||
                                  'https://as2.ftcdn.net/v2/jpg/02/68/46/77/1000_F_268467717_vEMz8PfPxLqSA6DkQoqqHQlvut2ofrmQ.jpg',
                              }}
                              style={{
                                width: 40,
                                height: 40,
                                borderRadius: 25,
                                marginRight: 15,
                                marginBottom: 10,
                              }}
                            />
                            <View
                              style={[
                                {
                                  flex: 1,

                                  borderRadius: 10,
                                },
                              ]}>
                              <Text
                                style={[
                                  ,
                                  {
                                    color: '#333333',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                  },
                                ]}>
                                {item.message}
                              </Text>
                              <Text
                                style={[
                                  {
                                    color: '#888888',
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                  },
                                ]}>
                                {item.category || 'General'}
                              </Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'flex-end',
                                  alignItems: 'flex-end',
                                }}>
                                <Text
                                  style={[{color: '#999999', fontSize: 12}]}>
                                             {formatElapsedTime(item.timestamp)}

                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default NotificationScreen;
