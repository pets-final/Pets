import React, { useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, ImageBackground,ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AppHeader, VideoView, Button } from '../../components'
import { SH, SW, Fonts, ColorTheme, } from '../../utils';
import images from '../../index';
import { VideoPlayStyle, VideoTabStyle } from '../../styles';
import Video from 'react-native-video';
import IconE from "react-native-vector-icons/Entypo";

const VideoPlay = ({ navigation }) => {
    const  colorrdata = "#861088"
    const route = useRoute();
    const videoPlayer = React.useRef();
    const goFullScreen = () => {
        if (videoPlayer.current) {
            videoPlayer.current.presentFullscreenPlayer();
        }
    };
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);

    const togglePlaying = () => { };
    return (
        <View>
            <View style={VideoPlayStyle.container}>
                <Video
                    ref={ref => (videoPlayer.current = ref)}
                    source={images.Dog_Video}
                    style={VideoPlayStyle.backgroundVideo}
                    repeat={true}
                    paused={!isPlaying}
                    controls={true}
                    muted={isMuted}
                    resizeMode='cover'
                    rate={1.0}
                    ignoreSilentSwitch={"obey"}
                    volume={1.0}                 
                    playInBackground={false}
                    playWhenInactive={false}                   
                />
                <ScrollView>
                    <View style={VideoPlayStyle.HeadBoxTextStyle}>
                        <Text style={VideoPlayStyle.itemText}>It is a long established fact that a reader</Text>
                        <View style={VideoPlayStyle.TimeBox}>
                            <IconE name="back-in-time" size={16} color={colorrdata} style={VideoPlayStyle.TimerIcon} />
                            <Text style={VideoTabStyle.itemTextTime}>23,September 2022</Text>
                        </View>
                        <Text style={VideoPlayStyle.setparegraph}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                        <Image source={images.Videoplaymg} resizeMode='cover' style={VideoPlayStyle.Setimgdetails} />
                        <Text style={VideoPlayStyle.setparegraph}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                </ScrollView>
            </View>

        </View>

    )
}
export default VideoPlay;
