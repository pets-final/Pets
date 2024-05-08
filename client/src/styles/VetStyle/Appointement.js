import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContact: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor:'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    approveButton: {
      backgroundColor: 'green',
    },
    declineButton: {
      backgroundColor: 'red',
    },
    approvedText: {
      color: 'green',
      fontWeight: 'bold',
      marginTop: 10,
    },
    declinedText: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: 10,
    },
  });