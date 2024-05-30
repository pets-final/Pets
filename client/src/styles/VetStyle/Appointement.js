import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f4ff', // Light lavender background
    },
    title: {
      fontSize: 28, 
      fontWeight: '700', // Bolder font weight
      marginBottom: 25,
      color: '#333', 
      textAlign: 'center', // Center the title
    },
    appointmentItem: {
      marginBottom: 20, 
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#fff', 
      shadowColor: '#555',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, 
    },
    appointmentDetails: {
      flex: 1, 
      marginBottom: 10, 
    },
    detailText: {
      marginBottom: 5,
      fontSize: 16,
      color: '#444', 
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'flex-end', // Align buttons to the right
    },
    statusContainer: {
      alignItems: 'center',
    },
    button: {
      padding: 12,
      borderRadius: 8, 
      marginHorizontal: 8, 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 4, 
    },
    approvedButton: {
      backgroundColor: '#4CAF50', 
    },
    declineButton: {
      backgroundColor: '#F44336', 
    },
    contactButton: {
      backgroundColor: '#800080', // Purple
    },
    buttonText: {
      color: '#fff', 
      fontSize: 16,
      fontWeight: '600',
    },
    approvedText: {
      color: '#4CAF50',
      fontSize: 16,
    },
  });