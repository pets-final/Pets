import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../../styles/VetStyle/Appointement';
import moment from 'moment'; // Import Moment

const AppointmentView = ({ route }) => {
  const { DoctorListData, User } = route.params;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null); // Track selected appointment
  const navigation = useNavigation();
  const db = firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection('Appointments')
      .doc('3') // Replace '3' with your actual Doctor ID
      .collection('hVWlGICXAoMc4c25O95QIdq2JVi1') // Replace with your actual User ID
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setAppointments(data);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const handleApprove = async (appointmentId) => {
    try {
      await db
        .collection('Appointments')
        .doc('3') // Replace '3' with your actual Doctor ID
        .collection('hVWlGICXAoMc4c25O95QIdq2JVi1') // Replace with your actual User ID
        .doc(appointmentId)
        .update({ state: true }); // Update state to true in Firestore
      console.log('Appointment approved:', appointmentId); // Log for debugging
    } catch (error) {
      console.error('Error updating appointment state:', error);
    }
  };

  const handleDecline = () => {
    setSelectedAppointmentId(null); // Clear selection on decline
  };

  const handleContact = () => {
    navigation.navigate('ChatScreen');
  };

  const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY'); 
  };

  const formatTime = (time) => {
    return moment(time).format('h:mm A');
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.appointmentItem}>
      <View style={styles.appointmentDetails}>
        <Text style={styles.detailText}>User ID: {item.userId}</Text>
        <Text style={styles.detailText}>Date: {formatDate(item.date)}</Text>
        <Text style={styles.detailText}>Time: {formatTime(item.time)}</Text>
        <Text style={styles.detailText}>Pet: {item.pet}</Text>
        <Text style={styles.detailText}>Breed: {item.breed}</Text>
        <Text style={styles.detailText}>Gender: {item.gender}</Text>
        <Text style={styles.detailText}>Reason: {item.reason}</Text>

        {/* Display feedback and rating if available */}
        {item.feedback && (
          <View>
            <Text style={styles.detailText}>Feedback: {item.feedback.text}</Text>
            <Text style={styles.detailText}>Rating: {item.feedback.rating} stars</Text>
          </View>
        )}
      </View>
      {item.state ? (
        <View style={styles.statusContainer}>
          <TouchableOpacity style={[styles.button, styles.contactButton]} onPress={handleContact}>
            <Text style={styles.buttonText}>Contact User</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.button, styles.approvedButton]}
            onPress={() => handleApprove(item.id)}
            disabled={selectedAppointmentId === item.id}
          >
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={handleDecline}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>
      {loading ? (
        <Text>Loading Appointments...</Text>
      ) : (
        <FlatList
          data={appointments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }} // Make the FlatList scrollable
        />
      )}
    </View>
  );
};

export default AppointmentView;