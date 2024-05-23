import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../../styles/VetStyle/Appointement'; // Make sure to import your styles
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons'; // You'll need to install this package: npm install react-native-vector-icons

const AppointmentView = ({ route }) => {
  const { DoctorListData, User } = route.params;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
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
        .update({ state: true });
      console.log('Appointment approved:', appointmentId);
    } catch (error) {
      console.error('Error updating appointment state:', error);
    }
  };

  const handleDecline = async (appointmentId) => {
    try {
      // Show a confirmation alert before deleting
      Alert.alert(
        'Decline Appointment',
        'Are you sure you want to decline this appointment?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Decline',
            style: 'destructive',
            onPress: async () => {
              await db
                .collection('Appointments')
                .doc('3') // Replace '3' with your actual Doctor ID
                .collection('hVWlGICXAoMc4c25O95QIdq2JVi1') // Replace with your actual User ID
                .doc(appointmentId)
                .delete();
              console.log('Appointment declined and deleted:', appointmentId);
            },
          },
        ]
      );
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleContact = (userId) => {
    // Navigate to the chat screen, passing the User ID (if needed)
    navigation.navigate('ChatScreen', { userId }); 
  };

  const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY');
  };

  const formatTime = (time) => {
    return moment(time).format('h:mm A');
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.appointmentItem}>
      <View style={styles.appointmentContent}>
        <View style={styles.userAvatarContainer}>
          <Image 
            source={{ uri: 'https://placeimg.com/100/100/people' }} // Replace with actual user avatar
            style={styles.userAvatar}
          />
        </View>

        <View style={styles.appointmentDetails}>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>User:</Text> {item.userName} 
          </Text> 
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Date:</Text> {formatDate(item.date)}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Time:</Text> {formatTime(item.time)}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Pet:</Text> {item.pet} 
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Breed:</Text> {item.breed}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Gender:</Text> {item.gender}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Reason:</Text> {item.reason}
          </Text>

          {/* Display feedback and rating if available */}
          {item.feedback && (
            <View style={styles.feedbackContainer}> 
              <Text style={styles.detailLabel}>Feedback:</Text>
              <Text style={styles.detailText}>{item.feedback.text}</Text>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={18} 
                readonly={true}
                startingValue={item.feedback.rating}
                style={styles.rating}
              />
            </View>
          )}
        </View>
      </View>

      {item.state ? (
        <View style={styles.statusContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.contactButton]} 
            onPress={() => handleContact(item.userId)} // Pass userId to ChatScreen
          >
            <Icon name="chatbubbles-outline" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Contact User</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.button, styles.approvedButton]}
            onPress={() => handleApprove(item.id)}
          >
            <Icon name="checkmark-circle-outline" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.declineButton]} 
            onPress={() => handleDecline(item.id)} 
          >
            <Icon name="close-circle-outline" size={20} color="#fff" style={styles.buttonIcon} />
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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#800080" /> 
          <Text style={styles.loadingText}>Loading Appointments...</Text>
        </View>
      ) : appointments.length === 0 ? ( 
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>No appointments found.</Text>
        </View>
      ) : (
        <FlatList
          data={appointments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default AppointmentView;