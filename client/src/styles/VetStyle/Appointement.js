import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0', // Light background
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333', // Primary text color
    },
    appointmentItem: {
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      // backgroundColor: '#fff', // White background for better contrast
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appointmentDetails: {
      flex: 1,
    },
    detailText: {
      marginBottom: 5,
      fontSize: 16,
      color: '#333', // Secondary text color
    },
    actionButtons: {
      flexDirection: 'row',
    },
    button: {
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    approvedButton: {
      backgroundColor: '#4CAF50', // Green for approved
    },
    declineButton: {
      backgroundColor: '#F44336', // Red for declined
    },
    contactButton: {
      backgroundColor: '#3F51B5', // Blue for contact
    },
    buttonText: {
      color: '#fff', // White text for buttons
      textAlign: 'center',
    },
    statusContainer: {
      alignItems: 'center',
    },
    approvedText: {
      color: '#4CAF50',
    },
  });
  