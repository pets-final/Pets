import { StyleSheet, Text,TextInput,Alert, TouchableOpacity, View, ScrollView,KeyboardAvoidingView } from 'react-native'
import React,{useEffect} from 'react'
// import { styles } from './style'
import PushNotification from 'react-native-push-notification';

import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
  useEffect(() => {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'default-channel-id',
      title: 'My Notification Title',
      message: 'My Notification Message',
      playSound: true,
      soundName: 'default',
    });
  };
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }
  return (
    <View>
    <Text>categorieBox</Text>
    <ScrollView contentContainerStyle={styles.container}>
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <View style={styles.container}>
        <Text>categorieBox</Text>
        <TextInput
          style={styles.input}
          // onChangeText={setText}
          // value={text}
          placeholder="Type here..."
          keyboardType="default"
          maxLength={20}
        />
      </View>
    </KeyboardAvoidingView>
      <ScrollView
        horizontal={true}
        
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
        style={{ marginVertical: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => handleNotification()}>
          <View style={styles.box}>
            <Text>hhh</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>

        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
        <View style={styles.box}>
          <Text>hhh</Text>
        </View>
      </ScrollView>

      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
      <Text>Deals of the day</Text>
      <View style={{ flex: 2, backgroundColor: 'darkorange', margin: 20 }}></View>
      <Text>Top selling</Text>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 20 }}></View>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  box: {
    backgroundColor: 'green',
    flex: 1,
    marginRight: 33,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '80%',
    maxWidth:200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  }
});
export default Home
