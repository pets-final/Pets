import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Keyboard, 
  TextInput, 
  Modal, 
  ScrollView, 
  Alert 
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/VetStyle/Vet'; // Import your styles
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Rating } from 'react-native-ratings';
import moment from 'moment'; 

const AppointContact = ({route}) => {

  const {doctorname,spec   } = route.params.item;
  // console.log("uuuuuuuuuuuuu",spec)


  const [showContactButton, setShowContactButton] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(null); 
  const [appointmentTime, setAppointmentTime] = useState(null); 
  const [appointmentReason, setAppointmentReason] = useState('');
  const [appointmentPet, setAppointmentPet] = useState(''); 
  const [appointmentPetBreed, setAppointmentPetBreed] = useState('');
  const [appointmentPetGender, setAppointmentPetGender] = useState(''); 
  const [userName, setUserName] = useState(''); 
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false); 
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const [userAppointments, setUserAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [showFeedbackSection, setShowFeedbackSection] = useState(false)
  const [doctorFeedbacks, setDoctorFeedbacks] = useState([]);
  const [doctor, setDoctor] = useState({
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    location: 'New York',
    image: 'https://placeimg.com/100/100/people',
    id: 3, 
  });
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);

  // State to control appointment form visibility
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showAppointmentsList, setShowAppointmentsList] = useState(false);

  // State to store appointments with their feedbacks
  const [appointmentsWithFeedbacks, setAppointmentsWithFeedbacks] = useState([]);
  const navigation = useNavigation();
  const database = firestore();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user && user.uid) {
        fetchUserAppointments('KJj0XAbDGDc98a3tJ8SiwdeSVrD2');
        database.collection('users').doc(user.uid).get()
          .then(snapshot => {
            if (snapshot.exists) {
              setUserName(snapshot.data().name); 
            }
          })
          .catch(error => console.error("Error fetching user name: ", error));
      }
    });

    return () => subscriber();
  }, []);
  

  const fetchUserAppointments = (userId) => {
    database.collection('Appointments')
      .doc('3') 
      .collection("KJj0XAbDGDc98a3tJ8SiwdeSVrD2") 
      .orderBy('timestamp', 'desc')
      .get()
      .then((querySnapshot) => {
        const appointments = [];
        querySnapshot.forEach((document) => {
          const appointmentData = document.data();

          // Check if feedback exists for the appointment
          if (appointmentData.feedback) {
            appointments.push({ id: document.id, ...appointmentData });
          }
        });

        setAppointmentsWithFeedbacks(appointments);
      })
      .catch((error) => {
        console.error('Error fetching appointments: ', error);
      });
  };
  

  const sendAppointment = () => {
    if (user && user.uid) {
      database.collection('Appointments')
        .doc(doctor.id.toString())
        .collection(user.uid)
        .add({
          userId: user.uid,
          doctorId: doctor.id,
          userName: 'userName', 
          state: false, 
          date: appointmentDate,
          time: appointmentTime, 
          reason: appointmentReason,
          pet: appointmentPet, 
          breed: appointmentPetBreed,
          gender: appointmentPetGender, 
          timestamp: firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setShowSubmitButton(false);
          setShowContactButton(true);
          Keyboard.dismiss();
          fetchUserAppointments(user.uid);
          setAppointmentDate(null); 
          setAppointmentTime(null); 
          setAppointmentReason('');
          setAppointmentPet(''); 
          setAppointmentPetBreed('');
          setAppointmentPetGender(''); 
          setDateSelected(false);
          setShowAppointmentForm(false); // Hide the form after submission
        })
        .catch((error) => {
          console.error('Error adding appointment: ', error);
        });
    }
  };

  const handleAppointment = () => {
    setAppointmentDate(new Date()); 
    setAppointmentTime(new Date());
    setShowDatePicker(true);
    setShowSubmitButton(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) { 
      setShowDatePicker(false);
      setAppointmentDate(selectedDate); 
      setDateSelected(true); 
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) { 
      setShowTimePicker(false);
      setAppointmentTime(selectedTime); 
    }
  };

  const handleContact = () => {
    navigation.navigate('ChatScreen', { doctor });
    console.log('Contact the doctor');
  };

  const handleFeedback = (appointment) => {
    if (appointment.state) {
      setSelectedAppointment(appointment);
      setShowFeedbackModal(true);
    } else {
      Alert.alert(
        "Appointment Not Approved",
        "You can submit feedback only after the appointment has been approved.",
        [{ text: "OK" }]
      );
    }
  };

  const submitFeedback = () => {
    if (selectedAppointment.state) {
      database.collection('Appointments')
        .doc('3')
        .collection("KJj0XAbDGDc98a3tJ8SiwdeSVrD2")
        .doc(selectedAppointment.id)
        .update({
          feedback: {
            text: feedbackText,
            rating: rating,
          },
        })
        .then(() => {
          console.log('Feedback added successfully');
          setShowFeedbackModal(false);
          fetchUserAppointments(user.uid);
          setFeedbackText('');
          setRating(0);
        })
        .catch((error) => {
          console.error('Error adding feedback: ', error);
        });
    } else {
      console.log('Appointment not approved');
    }
  };

  const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY'); 
  };

  const formatTime = (time) => {
    return moment(time).format('h:mm A');
  };


  // Function to toggle the appointment form
  const handleMakeAppointment = () => {
    setShowAppointmentForm(!showAppointmentForm); 
  };
  const toggleAppointmentsList = () => {
    if (userAppointments.length === 0) {
      Alert.alert('No Appointments', 'You have no appointments scheduled.');
    } else {
      setShowAppointmentsList(!showAppointmentsList);
    }
  };
  
  const toggleFeedbackSection = () => {
    if (appointmentsWithFeedbacks.length === 0) {
      Alert.alert('No Feedbacks', 'There are no feedbacks for your appointments yet.');
    } else {
      setShowFeedbackSection(!showFeedbackSection);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>


      <Image source={{ uri: doctor.image }} style={styles.doctorImage} />

      <View style={styles.doctorInfoContainer}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
        <Text style={styles.doctorLocation}>{doctor.location}</Text>
      </View>

      {/* Make Appointment Button */}
      <TouchableOpacity style={styles.button} onPress={handleMakeAppointment}>
        <Text style={styles.buttonText}>Make Appointment</Text>
      </TouchableOpacity>

      {/* Appointment Form (Conditionally Rendered) */}
      {showAppointmentForm && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter reason for appointment"
            value={appointmentReason}
            onChangeText={setAppointmentReason}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your pet's name"
            value={appointmentPet}
            onChangeText={setAppointmentPet}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your pet's breed"
            value={appointmentPetBreed}
            onChangeText={setAppointmentPetBreed}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your pet's gender"
            value={appointmentPetGender}
            onChangeText={setAppointmentPetGender}
          />

          <TouchableOpacity style={styles.button} onPress={handleAppointment}>
            <Text style={styles.buttonText}>Pick a Date</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={appointmentDate}
              mode="date"
              display="default"
              minimumDate={new Date()}
              maximumDate={new Date(2024, 12, 31)}
              onChange={handleDateChange}
            />
          )}

          <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
            <Text style={styles.buttonText}>Pick a Time</Text>
          </TouchableOpacity>

          {showTimePicker && (
            <DateTimePicker
              value={appointmentTime}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}

          {dateSelected && (
            <View style={styles.checkmarkContainer}>
              <Text style={styles.checkmarkText}>✓</Text>
            </View>
          )}

          {showSubmitButton && (
            <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={sendAppointment}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      

      {showContactButton && (
        <TouchableOpacity style={[styles.button, styles.contactButton]} onPress={handleContact}>
          <Text style={styles.buttonText}>Contact Doctor</Text>
        </TouchableOpacity>
      )}

<TouchableOpacity style={styles.button} onPress={toggleAppointmentsList}>
        <Text style={styles.buttonText}>Show Appointments</Text> 
      </TouchableOpacity>

      {/* Appointments List (Conditionally Rendered) */}
      {showAppointmentsList && (
        <View style={styles.userAppointmentsContainer}>
          <Text style={styles.userAppointmentsTitle}>Your Appointments:</Text>
          {userAppointments.map((appointment) => ( 
            <TouchableOpacity
              key={appointment.id}
              style={styles.appointmentItem}
              onPress={() => handleFeedback(appointment)}
            >
            <Text>{`Date: ${formatDate(appointment.date)}`}</Text>
            <Text>{`Time: ${formatTime(appointment.time)}`}</Text>
            <Text>{`Pet: ${appointment.pet}`}</Text>
            <Text>{`Breed: ${appointment.breed}`}</Text>
            <Text>{`Gender: ${appointment.gender}`}</Text>
            <Text>{`User: ${appointment.userName}`}</Text>
            <Text>{`User: ${appointment.feedback}`}</Text>

            {appointment.state && (
              <Text style={styles.appointmentState}>Appointment Approved</Text>
            )}
            {!appointment.state && (
              <Text style={styles.appointmentState}>Appointment Pending</Text>
            )}
        </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showFeedbackModal}
        onRequestClose={() => setShowFeedbackModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Give Feedback</Text>
            <TextInput
              style={styles.modalTextInput}
              placeholder="Enter your feedback"
              multiline={true}
              value={feedbackText}
              onChangeText={setFeedbackText}
            />
            <Text style={styles.modalText}>Rate:</Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={20}
              startingValue={rating}
              onFinishRating={(value) => setRating(value)}
              style={{ padding: 20 }}
            />
            <TouchableOpacity style={styles.submitButton} onPress={submitFeedback}>
              <Text style={styles.button}>Submit Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Show Feedbacks Button */}
      <TouchableOpacity style={styles.button} onPress={toggleFeedbackSection}>
        <Text style={styles.buttonText}>Show Feedbacks</Text>
      </TouchableOpacity>

      {/* Doctor Feedbacks Section (Conditionally Rendered) */}
      {showFeedbackSection && (
        <View style={styles.feedbacksContainer}>
          <Text style={styles.feedbacksTitle}>Feedbacks for Your Appointments:</Text>
          {appointmentsWithFeedbacks.map((appointment) => (
            <View key={appointment.id} style={styles.feedbackItem}>
              {/* Make sure appointment.feedback exists before accessing its properties */}
              {appointment.feedback && ( 
                <>
                  <Text style={styles.feedbackText}>Feedback: {appointment.feedback.text}</Text>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                    readonly={true}
                    startingValue={appointment.feedback.rating}
                    style={{ paddingVertical: 10 }}
                  />
                </>
              )}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default AppointContact;