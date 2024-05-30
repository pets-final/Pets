import { StyleSheet } from 'react-native';

export
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f4ff', // Light lavender background 
  },
  // Doctor Info Section
  doctorInfoContainer: {
    alignItems: 'center', // Center horizontally
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#555', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4, 
    shadowRadius: 6, 
    elevation: 8, 
    overflow: 'hidden', 
  },
  doctorImage: {
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    borderWidth: 3,
    borderColor: '#800080',
    marginBottom: 15, // Space below the image
  },
  doctorDetails: {
    // No need for flex: 1 here as elements are stacked vertically
    alignItems: 'center', // Center the text elements
  },
  doctorName: {
    fontSize: 22,
    fontWeight: '700', 
    marginBottom: 6,
    color: '#222', 
  },
  doctorSpecialty: {
    fontSize: 18,
    color: '#663399', 
    marginBottom: 4,
  },
  doctorLocation: {
    fontSize: 16,
    color: '#777',
  },

  // Buttons
  button: {
    backgroundColor: '#800080', // Purple 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4, // For Android shadow 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4CAF50', // Green
  },
  contactButton: {
    backgroundColor: '#007bff', // Blue - example, you can customize
  },

  // Appointment Form
  appointmentForm: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd', 
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    fontSize: 16,
  },
  dateTimePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  datePickerButton: {
    backgroundColor: '#e9ecef', // Light gray
    padding: 12,
    borderRadius: 6,
    flex: 1,
    marginRight: 10,
  },
  checkmarkContainer: {
    marginLeft: 10, // Adjust spacing as needed
  },
  checkmarkText: {
    fontSize: 20,
    color: 'green',
  }, 

  // Appointments List
  userAppointmentsContainer: {
    marginTop: 20,
  },
  userAppointmentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appointmentItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, 
  },
  appointmentState: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },

  // Feedbacks Section
  feedbacksContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  feedbacksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feedbackItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee', 
    paddingBottom: 15,
    marginBottom: 15,
  },
  feedbackText: {
    fontSize: 16,
    marginBottom: 8, 
  }, 

  // Feedback Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    fontSize: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10, 
  },
});

export default styles; 