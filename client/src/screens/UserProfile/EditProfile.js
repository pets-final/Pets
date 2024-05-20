import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Button from '../../components/Button';
import SweetaelertModal from '../../components/SweetAlertModal';
import Style from '../../styles/CommonStyle/Style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const EditProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [fullname, setFullname] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [mobilenumberError, setMobilenumberError] = useState('');
  const [EmailSendAlert, setEmailSendAlert] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);
console.log("this is user data ",user)
  const signupbutton = async () => {
    if (!fullname.trim()) {
      setFullnameError('Please enter your full name.');
      return;
    }

    if (!mobilenumber.trim()) {
      setMobilenumberError('Please enter your mobile number.');
      return;
    }

    try {
      const userId = user.uid;
      const docRef = firestore().collection('users').doc(userId);
      const doc = await docRef.get();

      if (doc.exists) {
        await docRef.update({
          fullname:fullname,
          mobilenumber:mobilenumber,
        });
        setEmailSendAlert(true);
      } else {
        console.error('Document does not exist');
        // Handle the case where the document does not exist
      }
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle other errors
    }
  };

  return (
    <View style={Styles.mincolorwhite}>
      <View style={Styles.tabminview}>
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder={user?.fullname}
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setFullnameError(''); setFullname(value); }}
          />
        </View>
        {fullnameError !== '' &&
          <Text style={Styles.pleseentername}>* {fullnameError}</Text>
        }
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder={user?.phoneNumber || "+21698000000" }
            style={Style.inputtextstyle}
            keyboardType="numeric"
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setMobilenumberError(''); setMobilenumber(value); }}
          />
        </View>
        {mobilenumberError !== '' &&
          <Text style={Styles.pleseentername}>* {mobilenumberError}</Text>
        }

        <View style={Styles.flexrowbutton}>
          <Button title="Update"
            onPress={signupbutton}
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>

      </View>
      <View style={Styles.centeredView}>
        {EmailSendAlert &&
          <SweetaelertModal message='Profile Update Successfully' link={'UserProfile'} />
        }
      </View>
    </View>
  );
};
export default EditProfileScreen;