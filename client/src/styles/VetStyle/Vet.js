import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialization: {
    fontSize: 18,
    marginBottom: 10,
    color: '#888',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
  appointmentButton: {
    backgroundColor: '#6a0dad', // Purple color for appointment button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: '#6a0dad', // Purple color for contact button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
