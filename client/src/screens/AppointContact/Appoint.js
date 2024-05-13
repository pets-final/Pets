import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/VetStyle/Vet';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const AppointContact = ({route}) => {
  const {id} = route.params
  console.log('cccccccccccc',id);
  // onsole.log('cccccccccccc',user.id);

  const [showContactButton, setShowContactButton] = useState(false);
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const doctor = {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    location: 'New York',
    image: 'https://placeimg.com/100/100/people',
    id: 1,
  };

  const db = firestore();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => subscriber();
  }, []);

  const sendAppointment = () => {
    if (user && user.uid) {
      db.collection(`Appointments`).doc(doctor.id.toString()).collection('appoint').doc(user.uid.toString).add({
        userId: user.uid,
        doctorId: doctor.id,
        state: false,
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setRefresh(true);
        Keyboard.dismiss();
      })
      .catch(error => {
        console.error('Error adding appointment: ', error);
      });
    }
  };

  const handleAppointment = () => {
    console.log("sssss");
    setShowContactButton(true);
    sendAppointment();
  };

  const handleContact = () => {
    navigation.navigate('ChatScreen', { doctor });
    console.log('Contact the doctor');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: doctor.image }} style={styles.photo} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.description}>{doctor.description}</Text>
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
