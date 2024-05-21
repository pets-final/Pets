import React,{useState,useEffect} from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { WelcomeSumnaya } from '../../styles';
import images from '../../index';
import  Button  from '../../components/Button';
import { Style } from '../../styles';
import IconF from 'react-native-vector-icons/Feather';
import { Fonts } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const db = firestore();
const WelcomeSumnya = ({route}) => {



  const { address } = route.params || {}
   
        console.log('address',address);
    
  const  colorrdata = "#861088"
  const navigation = useNavigation();
  const [user, setuser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setuser(user);
        console.log(user)
    });
  }, []);
  const handleContiue = ()=>{
    db.collection('users').doc(user.uid).update({
      address: address,
     
    }).then(() => {
      navigation.navigate('tab');
    
    })
    }
   const Homescreendiraction =()=>{
    navigation.navigate('tab');
   }

  
  return (
    <View style={[WelcomeSumnaya.minstyleviewphotograpgy, { backgroundColor: colorrdata }]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
          }}>
          <KeyboardAvoidingView enabled>
            <View style={WelcomeSumnaya.minflexview}>
              <View style={WelcomeSumnaya.minviewsigninscreen}>
                <View style={WelcomeSumnaya.smallimagcenter}>
                  <View style={WelcomeSumnaya.imagsetview}>
                    <Image style={WelcomeSumnaya.logoimgonee} resizeMode='contain' source={images.app_logo} />
                  </View>
                </View>
                <View style={WelcomeSumnaya.textcenterview}>
                  <Text style={WelcomeSumnaya.longtitlestyle}>
                    Welcome,
                  </Text>
                  <Text style={WelcomeSumnaya.longtitlestyle}>
                    Pets Care!
                  </Text>
                </View>
                <View style={WelcomeSumnaya.textcenterviewlongtext}>
                  <Text style={WelcomeSumnaya.longtitlestyletwo}>
                    Unlock the world of regular and rescued Pets Care by setting up your delivery address.
                  </Text>
                </View>
                <View style={WelcomeSumnaya.setbottomviewwidth}>
                  <Text style={WelcomeSumnaya.sllectlocationscreen}>SELECT LOCATION</Text>
                 
                  <Button title="Provide Delivery Location"
                    onPress={() =>navigation.navigate('map') }
                    imagesource={images.Location_image}
                    buttonStyle={WelcomeSumnaya.buttonsearchstyle}
                    buttonTextStyle={{
                      marginLeft: 14,
                      position: 'relative',
                      fontSize: 17,
                      fontFamily: Fonts.Poppins_Medium,
                      color: colorrdata,
                    }}

                  />
                   </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

                  <Button title="continue"
                    onPress={() =>handleContiue() }
                    imagesource={images.Three_Slider}
                    buttonStyle={WelcomeSumnaya.buttonsearchstyle}
                    buttonTextStyle={{
                      marginLeft: 14,
                      position: 'relative',
                      fontSize: 17,
                      fontFamily: Fonts.Poppins_Medium,
                      color: colorrdata,
                      disable:true
                    
                    }}

                  />
        <TouchableOpacity onPress={() => Homescreendiraction()} style={Style.settextstyletwo}>
          <View style={[Style.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
            <Text style={Style.textstyle} >
              <IconF name="chevrons-right" size={27} color="white" />
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};
export default WelcomeSumnya;