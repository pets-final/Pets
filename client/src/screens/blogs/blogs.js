import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { VideoTabStyle, ProductitemList } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import images from "../../../index";
import { colors } from '../../utils';
import IconE from "react-native-vector-icons/Entypo";

const VideoTab = () => {
  const colorrdata = "#861088";
  const navigation = useNavigation();
  const [hearticon, Sethearticon] = useState(0);
  const [liked, setLiked] = useState([]);

  const [exerciseList, setExerciseList] = useState([
    {
      "title": "It is a long established fact that a reader",
      "post": "24,September 2022",
      "img": images.videoimg1
    },
    {
      "title": "Encourage your dog with gentle praising",
      "post": "25,September 2022",
      "img": images.videoimg2
    },
    {
      "title": "Dogs can also be encouraged to play with toys by using",
      "post": "27,September 2022",
      "img": images.videoimg3
    },
    {
      "title": "Show your dog the toy, let your dog sniff",
      "post": "28,November 2022",
      "img": images.videoimg4
    },
    {
      "title": "All the Lorem Ipsum generators on the Internet tend to repeat predefined",
      "post": "20,Octomber 2022",
      "img": images.videoimg5
    },
    {
      "title": "It has survived not only five centuries",
      "post": "25,Octomber 2022",
      "img": images.videoimg6
    },
    {
      "title": "Various versions have evolved over the years",
      "post": "23,December 2022",
      "img": images.videoimg1
    },
  ]);

  const ItemRender = ({ item }) => {
    return (
      <TouchableOpacity style={VideoTabStyle.itemChildeBox} onPress={() => navigation.navigate('blogDetails', { title: item.title })}>
        <View style={VideoTabStyle.itemChilde}>
          <Image source={item.img} style={VideoTabStyle.itemImg} resizeMode={'cover'} />
          <View style={VideoTabStyle.textWidthset}>
            <Text style={VideoTabStyle.itemText}>{item.title}</Text>
            <Text style={VideoTabStyle.itemTextTime}><IconE name="back-in-time" size={16} color={colorrdata} /> {item.post}</Text>
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
        keyExtractor={item => item.title}
        style={VideoTabStyle.flatelist}
      />
    </View>
  );
};

export default VideoTab;
