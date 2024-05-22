import { Text, View, TextInput, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React, { useState, useEffect } from "react";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const AddBlogs = () => {
  const [Title, setTitle] = useState('');
  const [Body, setBody] = useState('');
  const [ImgUrl, setImg] = useState('');
  const [uploading, setUploading] = useState(false); 
  const [imageUrl, setimageUrl] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setimageUrl(response.assets[0].uri);
        uploadImage(response.assets[0].uri);
      }
    });
  };

  const uploadImage = async (uri) => {
    setUploading(true);
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    try {
      await storage().ref(filename).putFile(uri);
      const url = await storage().ref(filename).getDownloadURL();
      setImg(url);
      setUploading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setImg('');
      setUploading(false);
    }
  };

  const addBlog = async () => {
    if (ImgUrl) {
      firestore().collection('Blog').add({
        Title: Title,
        Description: Body,
        ImgUrl: ImgUrl, 
        IdShoper: user.uid,
      }).then((res) => {
        setTitle('');
        setBody('');
        setimageUrl(null);
        setImg('');
        Alert.alert("Blog posted");
      }).catch((err) => {
        console.log(err);
      });
    } else {
      Alert.alert("Please upload an image");
    }
  };

  return (
    <View style={Styles.mincolorwhite}>
      <View style={Styles.tabminview}>
        <View>
          <Text style={{ color: "#861088", fontWeight: "bold" }}>ADD NEW Blog</Text>

          <View style={styles.imagePickerContainer}>
            <TouchableOpacity style={styles.circleButton} onPress={ImagePicker}>
              {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.uploadedImage} />
              ) : (
                <Icon name="camera" type="font-awesome" color="#fff" size={50} />
              )}
            </TouchableOpacity>
          </View>

          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="Blog Title"
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setTitle(value)}
            />
          </View>

          <View style={Style.inputDescription}>
            <TextInput
              placeholder="Description"
              multiline={true}
              numberOfLines={10}
              style={Style.inputtextstyle}
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              onChangeText={(value) => setBody(value)}
            />
          </View>

          <View style={Styles.flexrowbutton}>
            <Button 
              title={uploading ? "Uploading..." : "Add New Blog"} 
              disabled={uploading} 
              onPress={addBlog}
              buttonStyle={Styles.setbuttonborderradius}
              buttonTextStyle={Styles.textcolorsetwhite}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePickerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circleButton: {
    width: 100, // updated width
    height: 100, // updated height
    borderRadius: 10, // to make the corners rounded
    backgroundColor: '#861088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImage: {
    width: 200, // updated width
    height: 100, // updated height
    borderRadius: 10, // to make the corners rounded
  },
});

export default AddBlogs;










// import { Text, View, TextInput, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import React, { useState, useEffect } from "react";
// import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
// import Style from '../../styles/CommonStyle/Style';
// import Button from '../../components/Button';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { launchImageLibrary } from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';
// import Icon from 'react-native-vector-icons/dist/AntDesign';

// const AddBlogs = () => {
//   const [Title, setTitle] = useState('');
//   const [Body, setBody] = useState('');
//   const [ImgUrl, setImg] = useState('');
//   const [uploading, setUploading] = useState(false); 
//   const [imageUrl, setimageUrl] = useState(null);

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return subscriber;
//   }, []);

//   const ImagePicker = () => {
//     let options = {
//       storageOptions: {
//         path: 'images',
//       },
//     };
//     launchImageLibrary(options, response => {
//       if (response.assets && response.assets.length > 0) {
//         setimageUrl(response.assets[0].uri);
//         uploadImage(response.assets[0].uri);
//       }
//     });
//   };

//   const uploadImage = async (uri) => {
//     setUploading(true);
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     try {
//       await storage().ref(filename).putFile(uri);
//       const url = await storage().ref(filename).getDownloadURL();
//       setImg(url);
//       setUploading(false);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       setImg('');
//       setUploading(false);
//     }
//   };

//   const addBlog = async () => {
//     if (ImgUrl) {
//       firestore().collection('Blog').add({
//         Title: Title,
//         Description: Body,
//         ImgUrl: ImgUrl, 
//         IdShoper: user.uid,
//       }).then((res) => {
//         setTitle('');
//         setBody('');
//         setimageUrl(null);
//         setImg('');
//         Alert.alert("Blog posted");
//       }).catch((err) => {
//         console.log(err);
//       });
//     } else {
//       Alert.alert("Please upload an image");
//     }
//   };

//   return (
//     <View style={Styles.mincolorwhite}>
//       <View style={Styles.tabminview}>
//         <View>
//           <Text style={{ color: "#861088", fontWeight: "bold" }}>ADD NEW Blog</Text>

          
//           <View style={styles.imagePickerContainer}>
//             <TouchableOpacity style={styles.circleButton} onPress={ImagePicker}>
//               {imageUrl ? (
//                 <Image source={{ uri: imageUrl }} style={styles.image} />
//               ) : (
//                 <Icon name="camera" type="font-awesome" color="#fff" size={50} />
//               )}
//             </TouchableOpacity>
//           </View>


//           <View style={Style.inputUnderLine}>
//             <TextInput
//               placeholder="Blog Title"
//               style={Style.inputtextstyle}
//               placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
//               onChangeText={(value) => setTitle(value)}
//             />
//           </View>

//           <View style={Style.inputDescription}>
//             <TextInput
//               placeholder="Description"
//               multiline={true}
//               numberOfLines={10}
//               style={Style.inputtextstyle}
//               placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
//               onChangeText={(value) => setBody(value)}
//             />
//           </View>


//           <View style={Styles.flexrowbutton}>
//             <Button 
//               title={uploading ? "Uploading..." : "Add New Blog"} 
//               disabled={uploading} 
//               onPress={addBlog}
//               buttonStyle={Styles.setbuttonborderradius}
//               buttonTextStyle={Styles.textcolorsetwhite}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imagePickerContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   circleButton: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#861088',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
// });

// export default AddBlogs;