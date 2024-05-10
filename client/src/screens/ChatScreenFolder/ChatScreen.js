import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { ChatScreenStyle } from '../../styles/ChatDoctorStylemain/ChatScreenStyle';
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/Foundation';
import 'firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const doctor = {
  name: 'Dr. John Doe',
  specialty: 'Cardiologist',
  location: 'New York',
  image: 'https://placeimg.com/100/100/people',
  id: 'Qg183pzPiycd8HKclBHWquVFH9b2',
};

const db = firestore();

const ChatScreen = () => {
  const [colorrdata] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setuser] = useState([]);
const [refresh,setrefresh]=useState(false)
  useEffect(() => {
    const unsubscribe = db.collection(`chats/${user.uid}_${doctor.id}/messages`)
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(data);
        setrefresh(true)
      });

    const subscriber = auth().onAuthStateChanged((user) => {
      setuser(user);
        console.log(user);
      if (user) {
      
          const unsubscribe = db.collection(`chats/SLSwA3222ndTMGd8aKK6qKmdX2G2_${doctor.id}/messages`)
          .orderBy('timestamp')
          .onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setMessages(data);
           
          });
       
        
  
        // Cleanup subscription on unmount
        return () => unsubscribe();
      }
    });
  }, []);
  
  const sendMessage = async () => {
    if (message.trim() !== '') {
      db.collection(`chats/${user.uid}_${doctor.id}/messages`).add({
        senderId: doctor.id,
        text: message,
        timestamp: localTimestamp
      };

      await db.collection(`chats/${user.uid}_${doctor.id}/messages`).add({
        ...newMessage,
        timestamp: firestore.FieldValue.serverTimestamp()
      });
      setMessage('');
      setrefresh(false)
      Keyboard.dismiss()
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  }, [messages]);

  return (

    <View style={ChatScreenStyle.minstyleviewphotograpgy}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 0.9 }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ChatScreenStyle.scrollViewContent}
      >
        {messages.map((msg, index) => (
          <View key={msg.id} style={[ChatScreenStyle.messageContainer, { alignSelf: msg.senderId === doctor.id ? 'flex-end' : 'flex-start' }]}>
            <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: msg.senderId === doctor.id ? '#DCF8C6' : '#E5E5EA' }]}>
              <Text style={ChatScreenStyle.textcolormessage}>{msg.text}</Text>
              <Text style={ChatScreenStyle.textcolormessagetwoset}>{msg.timestamp ? msg.timestamp.toDate().toLocaleString() : ''}</Text>
            </View>
          </View>
        ))}
       <View style={ChatScreenStyle.postionabsoluteview}>
        <View style={ChatScreenStyle.textmessageview}>
          <View style={ChatScreenStyle.flexrowsetsendmesasagew}>
            <TextInput 
              style={ChatScreenStyle.textinputborderbottom}
              placeholder="Write a reply..."
              placeholderTextColor={'gray'}
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
            <TouchableOpacity onPress={sendMessage} style={ChatScreenStyle.sendButton}>
              <IconO name="send" color={colorrdata} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;