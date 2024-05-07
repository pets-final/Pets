import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import {styles} from '../../styles/VetStyle/Appointement'
import { useNavigation } from '@react-navigation/native';

const AppointmentView = ({ appointment }) => {
const navigation = useNavigation();

  const [approved, setApproved] = useState(false);
  const [declined, setDeclined] = useState(false);

  const handleApprove = () => {
    setApproved(true);
    setDeclined(false);
  };

  const handleDecline = () => {
    setApproved(false);
    setDeclined(true);
  };
  const handleContact = () => {
    console.log('Navigating to chat room');
    // Navigate to the chat room screen
    navigation.navigate('ChatScreen', { appointment })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>
      <Text>Patient Name: {'appointment.patientName'}</Text>
      <Text>Date: {'appointment.date'}</Text>
      <Text>Time: {'appointment.time'}</Text>
      <Text>Reason: {'appointment.reason'}</Text>

      {!approved && !declined && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.approveButton]} onPress={handleApprove}>
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={handleDecline}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      )}

{approved && (
        <View>
          <Text style={styles.approvedText}>Appointment Approved</Text>
          <TouchableOpacity style={[styles.button, styles.buttonContact]} onPress={handleContact}>
            <Text style={styles.button}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}

      {declined && <Text style={styles.declinedText}>Appointment Declined</Text>}
    </View>
  );
};

export default AppointmentView;