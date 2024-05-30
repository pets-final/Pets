import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Button from '../../components/Button';
import SweetaelertModal from '../../components/SweetAlertModal';
import Style from '../../styles/CommonStyle/Style';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const db = firestore();

const VetForm = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [issuingCountry, setIssuingCountry] = useState('');
  const [schoolAttended, setSchoolAttended] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [EmailSendAlert, setEmailSendAlert] = useState(0);
  const [details, setDetails] = useState('');
  const [user, setUser] = useState(null);


  const signupbutton = async () => {
  
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        // Handle the case where the user is not authenticated
        console.error('User is not authenticated');
        return;
      }
      console.log('currentUser: ', currentUser);
      const uid = currentUser.uid;
      if (currentUser) {
        const userDoc = await firestore().collection('users').doc(currentUser.uid).get();
        
      const vetData = {
        uid,
        fullname: userDoc.data().fullname,
        mobilenumber: userDoc.data().mobilenumber,
        email: userDoc.data().email,
        licenseNumber,
        details: details,
        address: userDoc.data().address,
        issuingCountry,
        schoolAttended,
        graduationDate,
        status: 'pending',
        requestDate: new Date().toISOString()
      }
      console.log('vetData: ', vetData);
      await db.collection('veterinarians').add(vetData);
    }
      setEmailSendAlert(1);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  

  return (
    <View > 
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={Styles.mincolorwhite} behavior="padding" enabled>
        <View style={Styles.tabminview}>
        <Text style={{ color: '#861088', fontSize: 26, fontFamily: 'Arial', margin: 10 }}>Welcome Veterinarians!</Text>
<Text style={{ color: '#861088', fontSize: 20, fontFamily: 'Arial', margin: 10,marginBottom:30 }}>Apply to become a Vet on our App</Text>
        
          <View style={Style.inputUnderLine }>
            <TextInput
              placeholder="Veterinary license number"
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setLicenseNumber(value)}
            />
          </View>
          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="Issuing state or country"
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setIssuingCountry(value)}
            />
          </View>
          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="Veterinary school attended"
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setSchoolAttended(value)}
            />
          </View>
          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="Graduation date"
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setGraduationDate(value)}
            />
          </View>
          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="details ..."
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setDetails(value)}
            />
          </View>
         
          <View style={Styles.flexrowbutton}>
          <Button
  title="apply"
  onPress={signupbutton}
  buttonStyle={{...Styles.setbuttonborderradius, padding: 10, width: '100%', marginTop: 160, backgroundColor: '#861088'}}
  buttonTextStyle={Styles.textcolorsetwhite}
/>
          </View>
        </View>
        <View style={Styles.centeredView}>
          {EmailSendAlert === 1 ?
    <SweetaelertModal message='Request Sent Successfully' link={''} />
    :
            null
          }
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </View>
  )
}

export default VetForm;
