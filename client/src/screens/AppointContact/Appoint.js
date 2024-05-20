import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/VetStyle/Vet';
import ChatScreen from '../ChatScreenFolder/ChatScreen';
const AppointContact = ({ doctor }) => {
  const [showContactButton, setShowContactButton] = useState(false);
  const navigation = useNavigation();

  const handleAppointment = () => {
    // navigation.navigate('AppointmentPage', { doctor });
    setShowContactButton(true)
    // console.log(showContactButton);
  };

  const handleContact = () => {
      navigation.navigate('ChatScreen');
      // console.log('Contact the doctor');

  };

  return (
    <View style={styles.container}>
      {/* <Image source={{ }} style={styles.photo} /> */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{"doctor.name"}</Text>
        <Text style={styles.specialization}>{"doctor.specialization"}</Text>
        <Text style={styles.description}>{"doctor.description"}</Text>
      </View>
      <TouchableOpacity style={styles.appointmentButton} onPress={handleAppointment}>
        <Text style={styles.buttonText}>Make an Appointment</Text>
      </TouchableOpacity>
      {showContactButton && (
        <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
          <Text style={styles.buttonText}>Contact Doctor</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppointContact;
