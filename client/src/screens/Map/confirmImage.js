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
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




const WelcomeSumnya2 = ({route}) => {
    const [ImgUrl, setImg] = useState('');
const [imageSource, setImageSource] = useState(null);
const [imageUrl, setimageUrl] = useState('https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg');
const [uploading, setUploading] = useState(false);

const db = firestore();
    
  const  colorrdata = "#861088"
  const navigation = useNavigation();
  const [user, setuser] = useState(null);




  const ImagePicker=()=>{
    let option={
      storageOptions: {
        path: 'image',
      },
    }
    launchImageLibrary(option,response=>{
        console.log("aaaaaaaaa",response.assets[0].uri)
      setimageUrl(response.assets[0].uri)
      uploadImage()
    })

  }

  const uploadImage = async () => {
 const uploadUri=imageUrl;
 let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1); 
      try {
        await storage().ref(filename).putFile(uploadUri);
        const url = await storage().ref(filename).getDownloadURL();
       
        setImg(url)
        setUploading(false);       
      } catch (error) {
        console.error('Error uploading image:', error);
        setImg(null)
      }  
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setuser(user);
        console.log(user)
    });
  }, []);



  const handleContiue = ()=>{
    db.collection('users').doc(user.uid).update({
      ImgUrl: ImgUrl,
    }).then(() => {
      navigation.navigate('WelcomeSumnya');
    
    })
    }
   const Homescreendiraction =()=>{
    navigation.navigate('tab');
   }






  return (
    <View style={[WelcomeSumnaya.minstyleviewphotograpgy, { backgroundColor: colorrdata }]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      {console.log("ii",ImgUrl)}
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
                  <Text style={WelcomeSumnaya.sllectlocationscreen}>chose your photo</Text>
                 
                 
     

                        <Button  style={{top:"15"} } title=" Add Image "
                        onPress={()=>ImagePicker()}
                        buttonStyle={Style.setbuttonborderradius}
                        buttonTextStyle={Style.textcolorsetwhite}
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
export default WelcomeSumnya2;