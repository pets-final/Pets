import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Button from '../../components/Button';
import SweetaelertModal from '../../components/SweetAlertModal';
import Style from '../../styles/CommonStyle/Style';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const VetForm = () => {
  const [fullname, setfullname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [fullnameaerror, setfullnameaerror] = useState(0);
  const [mobilenumbererror, setmobilenumbererror] = useState(0);
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState(0);
  const [emailValidError1, setEmailValidError1] = useState(0);
  const [maxPatients, setMaxPatients] = useState('');
  const [patientsPerWeek, setPatientsPerWeek] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [issuingCountry, setIssuingCountry] = useState('');
  const [schoolAttended, setSchoolAttended] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [previousEmployer, setPreviousEmployer] = useState('');
  const [employmentDates, setEmploymentDates] = useState('');
  const [coursesAttended, setCoursesAttended] = useState('');
  const [references, setReferences] = useState('');
  const [legalDocument, setLegalDocument] = useState('');
  const [EmailSendAlert, setEmailSendAlert] = useState(0);

  const validateIsEmail = (item) => {
    setEmail(item);
  };
  
  const options = {
    title: 'Select Document',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleDocumentUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setLegalDocument(response.uri);
      }
    });
  };

  const signupbutton = () => {
    // if (!fullname.trim()) {
    //   setfullnameaerror(1)
    //   return;
    // }
    
    // if (!mobilenumber.trim()) {
    //   setmobilenumbererror(1)
    //   return;
    // }
    // if (!email.trim()) {
    //   setEmailValidError(1);
    // } else {
    //   let emaildata = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    //   if (!emaildata) {
    //     setEmailValidError1(1);
    //     return;
    //   }
    // }
    // if (!maxPatients.trim()) {
    //   return;
    // }
    // if (!patientsPerWeek.trim()) {
    //   return;
    // }
    // if (!licenseNumber.trim()) {
    //   return;
    // }
    // if (!issuingCountry.trim()) {
    //   return;
    // }
    // if (!schoolAttended.trim()) {
    //   return;
    // }
    // if (!graduationDate.trim()) {
    //   return;
    // }
    // if (!previousEmployer.trim()) {
    //   return;
    // }
    // if (!employmentDates.trim()) {
    //   return;
    // }
    // if (!coursesAttended.trim()) {
    //   return;
    // }
    // if (!references.trim()) {
    //   return;
    // }
    // if (!legalDocument.trim()) {
    //   return;
    // }
    
   
    setEmailSendAlert(1);
  }

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
         
          <View style={Styles.flexrowbutton}>
          <Button
  title="Update"
  onPress={signupbutton}
  buttonStyle={{...Styles.setbuttonborderradius, padding: 10, width: '100%', marginTop: 160, backgroundColor: '#861088'}}
  buttonTextStyle={Styles.textcolorsetwhite}
/>
          </View>
        </View>
        <View style={Styles.centeredView}>
          {EmailSendAlert === 1 ?
    <SweetaelertModal message='Request Sent Successfully' link={'Profile'} params={{ key: true }} />
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
