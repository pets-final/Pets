import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from '../../styles/VetStyle/Appointement';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'; // Import firestore

const AppointmentView = ({ appointments, DoctorListData }) => {
  console.log('wwwwww', appointments);
  const [approved, setApproved] = useState(false);
  const [declined, setDeclined] = useState(false);
  const navigation = useNavigation();

  const db = firestore(); // Initialize firestore

  const handleApprove = (appointmentId) => {
    // Update appointment state in Firestore
    db.collection('Appointments').doc(appointmentId).update({
      state: true
    })
      .then(() => {
        setApproved(true);
        setDeclined(false);
      })
      .catch(error => {
        console.error('Error updating appointment state: ', error);
      });
  };

  const handleDecline = () => {
    setApproved(false);
    setDeclined(true);
  };

  const handleContact = () => {
    console.log('Contact to chat');
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>
      {appointments.map(appointment => (
        <View key={appointment.id}>
          <Text>Patient Name: {DoctorListData[appointment.doctorId].name}</Text>
          <Text>User ID: {appointment.userId}</Text> {/* Display user ID */}
          {/* <Text>Date: {appointment.date}</Text> */}
          <Text>Time: {appointment.time}</Text>
          {/* <Text>Reason: {appointment.reason}</Text> */}

          {!approved && !declined && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => handleApprove(appointment.id)} // Pass appointmentId
              >
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
                <Text style={styles.buttonText}>Contact</Text>
              </TouchableOpacity>
            </View>
          )}

          {declined && <Text style={styles.declinedText}>Appointment Declined</Text>}
        </View>
      ))}
    </View>
  );
};

export default AppointmentView;
