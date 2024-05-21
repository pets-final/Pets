import { Text, View, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from "react";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { Alert } from 'react-native';

const AddBlogs = () => {
  const [Title, setTitle] = useState('');
  const [Body, setBody] = useState('');
  const [ImgUrl, setImg] = useState('');
  const [uploading, setUploading] = useState(false); 
  const [imageUrl, setimageUrl] = useState('https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg');

  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  const ImagePicker=()=>{
    let option={
      storageOptions: {
        path: 'image',
      },
    }
    launchImageLibrary(option,response=>{
      setimageUrl(response.assets[0].uri)
      // console.log(response.assets[0].uri)
      uploadImage()
    })

  }

  const uploadImage = async () => {
 const uploadUri=imageUrl;
 let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1); 
      try {
        await storage().ref(filename).putFile(uploadUri);
        const url = await storage().ref(filename).getDownloadURL();
        // console.log("url imagee ",url)
        setImg(url)
        setUploading(false);       
      } catch (error) {
        console.error('Error uploading image:', error);
        setImg('')
      }

  };

  const addBlog = async () => {
    if (imageUrl) {
      await uploadImage(); 
    } 

    firestore().collection('Blog').add({
      Title: Title,
      Description: Body,
      ImgUrl: ImgUrl, 
      IdShoper: user.uid,
    }).then((res) => {
      setTitle('');
      setBody('');
      setimageUrl('');
      setImg('');
      Alert.alert("Blog posted");
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <View style={Styles.mincolorwhite}>
      <View style={Styles.tabminview}>
        <View>
          <View>
            <Text style={{ color: "#861088", fontWeight: "bold" }}>ADD NEW Blog</Text>
          </View>

          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="Blog Title"
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => { setTitle(value) }}
            />
          </View>

          <View style={Style.inputDescription}>
            <TextInput
              placeholder="Description"
              multiline={true}
              numberOfLines={10}
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => { setBody(value) }}
            />
          </View>

          <View>
            { ImgUrl && (
              <Image source={{ uri: ImgUrl }} style={{ width: 100, height: 100 }} />
            )}
            <Button title=" Add Media"
              onPress={() => ImagePicker()}
              buttonStyle={Styles.setbuttonborderradius}
              buttonTextStyle={Styles.textcolorsetwhite}
            />
          </View>

          <View style={Styles.flexrowbutton}>
            <Button 
              title={uploading ? "Uploading..." : "Add New Blog"} 
              disabled={uploading} 
              onPress={() => addBlog()}
              buttonStyle={Styles.setbuttonborderradius}
              buttonTextStyle={Styles.textcolorsetwhite}
            />
          </View>
        </View>
      </View>
    </View>
  )
};

export default AddBlogs;