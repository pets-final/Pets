import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Styles from '../../styles/GetstartedSliderStyle';
import Button from '../../components/Button';
import images from '../../images';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const GetstartedSliderscreen = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);

  const Getstarted = () => {
    setShowRealApp(false);
  };

  const RenderItem = ({ item }) => {
    return (
      <View>
        <View style={[Styles.minstyleviewphotograpgy, { backgroundColor: "#861088" }]}>
          <StatusBar barStyle="dark-content" backgroundColor="#861088" />
          <View>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={Styles.aligncenterview}>
                <View style={Styles.smallimagcenter}>
                  <View style={Styles.imagsetview}>
                    {item.image}
                  </View>
                </View>
                <View style={Styles.textcenterview}>
                  <Text style={Styles.longtitlestyletwo}>
                    {item.longtitle}
                 
                  </Text>
                  <Text style={Styles.longtitlestyletwo}>
                    {item.longtitletwo}
                  </Text>
                </View>
                <View style={Styles.setimagviewtwo}>
                  {item.imagetwo}
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.replace("LoginandRegistrationScreen")} style={Styles.settextstyle}>
              <View style={[Styles.setbgcolorviewtwoview, { backgroundColor: "#861088" }]}>
                <Text style={Styles.textstyle}>
                  <Icon name="chevrons-right" size={27} color="white" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={Styles.setbgbuttondiv}>
        <View style={Styles.buttonCircle}>
          <Button
            title="Get Started"
            onPress={() => {
              navigation.navigate("LoginandRegistrationScreen")
             
            }}
            buttonStyle={Styles.bgwhite}
            buttonTextStyle={{ color: "#861088" }}
          />
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={Styles.setbgbuttondiv}>
        <Text style={Styles.nextbuttoncolorset}></Text>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={Styles.setbgbuttondiv}>
        <TouchableOpacity>
          <Text style={Styles.nextbuttoncolorset}></Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView>
          <View>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={Getstarted}
          renderNextButton={_renderNextButton}
          renderSkipButton={_renderSkipButton}
          renderDoneButton={_renderDoneButton}
          showSkipButton={true}
          activeDotStyle={Styles.activebutonstyleset}
          dotstyle={Styles.dotstyleset}
        />
      )}
    </>
  );
};

export default GetstartedSliderscreen;

const slides = [
  {
    key: 's1',
    text: <Icon name="chevrons-right" size={27} color="white" />,
    longtitle: 'Best Price Guarantee',
    image: <Image style={Styles.logoimg} resizeMode='contain' source={images.app_logo} />,
     imagetwo:  <LottieView
    source={require('../../images/LotteAnimation/FirstimageSlider.json')}
    autoPlay
    loop
    style={{ width: 300, height: 300 }} // Adjust the dimensions as needed
/>
  },

  {
    key: 's2',
    text: <Icon name="chevrons-right" size={27} color="white" />,
    longtitletwo: 'Quality Assurance',
    image: <Image style={Styles.logoimg} resizeMode='contain' source={images.app_logo} />,
     imagetwo:  <LottieView
     source={require('../../images/LotteAnimation/TwoSwiperimage.json')}
     autoPlay
     loop
     style={{ width: 300, height: 300 }} // Adjust the dimensions as needed
 />
  },
  {
    key: 's3',
    text: <Icon name="chevrons-right" size={27} color="white" />,
    longtitle: 'No Minimum Buy',
    image: <Image style={Styles.logoimg} resizeMode='contain' source={images.app_logo} />,
    imagetwo:  <LottieView
    source={require('../../images/LotteAnimation/ThreeAnimation.json')}
    autoPlay
    loop
    style={{ width: 300, height: 300 }} // Adjust the dimensions as needed
/>
  },
];
