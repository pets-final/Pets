import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { ChatScreenStyle } from '../../styles/ChatDoctorStylemain/ChatScreenStyle';
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/Foundation';
import firestore from '@react-native-firebase/firestore';
import 'firebase/database';

const ChartScreenset = () => {
  const [colorrdata] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const messagesRef = firestore().collection('Chats');
    const unsubscribe = messagesRef.onSnapshot(querySnapshot => {
      const messagesData = [];
      querySnapshot.forEach(doc => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return; // Prevent sending empty messages
    const newMessage = {
      senderId: "3",
      receiverId: "1",
      senderName: "Johndd Doe",
      receiverName: "Jane Doe",
      message: message,
      timestamp: firestore.FieldValue.serverTimestamp() // Auto-generated timestamp
    };
    firestore().collection('Chats').add(newMessage);
    setMessage('');
  };

    
  return (
    <View style={ChatScreenStyle.minstyleviewphotograpgy}>
      <ScrollView
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ChatScreenStyle.scrollViewContent}
      >
        {messages.map((msg, index) => (
          <View key={msg.id} style={[ChatScreenStyle.messageContainer, { alignSelf: msg.senderId === "1" ? 'flex-end' : 'flex-start' }]}>
            <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: msg.senderId === "1" ? '#DCF8C6' : '#E5E5EA' }]}>
              <Text style={ChatScreenStyle.textcolormessage}>
                {msg.message}
              </Text>
              <Text style={ChatScreenStyle.textcolormessagetwoset}>
                {msg.timestamp ? msg.timestamp.toDate().toLocaleString() : ''}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    </View>
  );
};

export default ChartScreenset;
