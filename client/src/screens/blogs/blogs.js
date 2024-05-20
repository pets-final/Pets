import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { VideoTabStyle, ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import images from "../../../index"; // Assuming this is a fallback if imgUrl is not available
import { colors } from '../../utils';
import IconE from "react-native-vector-icons/Entypo";
import IconS from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
const VideoTab = () => {
  const colorrdata = "#861088";
  const navigation = useNavigation();
  const [exerciseList, setExerciseList] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setExerciseList(blogs);
      });
    return () => subscriber();
  }, []);
  const ItemRender = ({ item }) => {
    console.log(item)
    return (
      <TouchableOpacity 
        style={VideoTabStyle.itemChildeBox} 
        onPress={() => navigation.navigate('blogDetails', { title: item.Title, blogId: item.id })} 
      >
        <View style={VideoTabStyle.itemChilde}>
          {/* Use item.ImgUrl if available, otherwise fallback to images.videoimg1 */}
          <Image 
            source={item.ImgUrl ? { uri: item.ImgUrl } : images.videoimg1} 
            style={VideoTabStyle.itemImg} 
            resizeMode={'cover'} 
          />
          <View style={VideoTabStyle.textWidthset}>
            <Text style={VideoTabStyle.itemText}>{item.Title}</Text>
            <Text style={VideoTabStyle.itemTextTime}>{item.Description}
              <IconE name="back-in-time" size={16} color={colorrdata} /> {/* Format date from item if needed */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <FlatList
        data={exerciseList}
        renderItem={ItemRender}
        keyExtractor={item => item.id}
        style={VideoTabStyle.flatelist}
      />
      <TouchableOpacity 
        style={[ProductitemList.setplusbgcolorset2, { backgroundColor: "#861088" }]} 
        onPress={() => navigation.navigate('addBlogs')}
      >
        <Text><IconS name="plus" size={40} color={'white'} /></Text>
      </TouchableOpacity>
    </View>
  );
};
export default VideoTab;