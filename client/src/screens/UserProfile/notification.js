import React, { useEffect } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, AppState, Alert } from "react-native";
import { NotificationStyle } from '../../styles';
import images from '../../index';
import messaging from '@react-native-firebase/messaging';

const NotificationScreen = () => {
  useEffect(() => {
    // Requesting permission to use push notifications
    const requestUserPermission = async () => {
      const settings = await messaging().requestPermission();
  
      if (settings) {
        console.log('Permission settings:', settings);
      }
    };
  
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      // You can also display the notification here
      // Alert.alert('Background Message', JSON.stringify(remoteMessage));
    });
  
    // Register foreground handler for both notification and data messages
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      console.log('Message handled in the foreground!', remoteMessage);
      // Display the notification if it's a notification message
      if (remoteMessage.notification) {
        Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
      }
    });

    requestUserPermission();

    // Get the device token
    const getDeviceToken = async () => {
      const token = await messaging().getToken();
      console.log('Device Token:', token);
    };

    getDeviceToken();

    return () => {
      unsubscribeForeground();
    };

  }, []);

  useEffect(() => {
    // Handle app state change
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
              );
              // Display the notification if it's a notification message
              if (remoteMessage.notification) {
                Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
              }
            }
          });
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const sendNotification = async () => {
    try {
      // Get the device token
      const token = await messaging().getToken()
      
      // Construct the message
      const message = {
        notification: {
          title: 'Title of your notification',
          body: 'Body of your notification',
        },
        token: "ccqn95b2Ryy3Dm1gdAYR2r:APA91bGt6Rmei5v1ghZHGUpGKwDilLBF2n3oBycdQuKfOKP-LWxv6Q4g8QARaA1BgYGbmRoNMo9zBrb7lK6AfRLovDJI3ukK3-Vne5ZA_clhiNeyS-uXJHq0becDQZv3PieAH1tXhD7f",
      };
  
      // Send the message
      await messaging().sendMessage(message);
      console.log('Notification sent successfully!');
    } catch (error) {
      console.log('Error sending notification:', error);
    }
  };

  useEffect(() => {
    sendNotification();
  }, []);

  return (
    <View style={[NotificationStyle.minstyleviewphotograpgy, NotificationStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={NotificationStyle.minflexview}>
            <View style={NotificationStyle.minviewsigninscreen}>
              <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
                <View style={NotificationStyle.setparegraphwidth}>
                  <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.NotificationImg} />
                </View>
                <View style={NotificationStyle.setparegraphwidthtwo}>
                  <Text style={NotificationStyle.textparegraph}>Don't forget to give your furry friend their medication at 12 PM today. Keep them healthy and happy with our app.</Text>
                  <Text style={NotificationStyle.twonavemberscreen}>02 Nov</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
                <View style={NotificationStyle.setparegraphwidth}>
                  <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.NotificationImg} />
                </View>
                <View style={NotificationStyle.setparegraphwidthtwo}>
                  <Text style={NotificationStyle.textparegraph}>Don't forget to schedule Fido's annual check-up with the vet. He'll be due for his vaccinations soon!</Text>
                  <Text style={NotificationStyle.twonavemberscreen}>04 Nov</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
