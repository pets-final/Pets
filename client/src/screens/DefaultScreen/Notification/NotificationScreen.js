import React from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { NotificationStyle } from '../../../styles';
import images from '../../../index';

const NotificationScreen = () => {
  return (
    <View style={[NotificationStyle.minstyleviewphotograpgy, NotificationStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={NotificationStyle.minflexview}>
            <View style={NotificationStyle.minviewsigninscreen}>
              <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
                <View style={NotificationStyle.setparegraphwidth}>
                  <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.NotificationImg} />
                </View>
                <View style={NotificationStyle.setparegraphwidthtwo}>
                  <Text style={NotificationStyle.textparegraph}>Don't forget to give your furry friend their medication at 12 PM today. Keep them healthy and happy with our app.</Text>
                  <Text style={NotificationStyle.twonavemberscreen}>02 Nov</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
                <View style={NotificationStyle.setparegraphwidth}>
                  <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.NotificationImg} />
                </View>
                <View style={NotificationStyle.setparegraphwidthtwo}>
                  <Text style={NotificationStyle.textparegraph}>Don't forget to schedule Fido's annual check-up with the vet. He'll be due for his vaccinations soon!</Text>
                  <Text style={NotificationStyle.twonavemberscreen}>04 Nov</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={NotificationStyle.flexdiractionrowtwo}>
               <View>
               <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.NotificationImg} />
               </View>
               <View style={NotificationStyle.setparegraphwidthtwo}>
                 <Text style={NotificationStyle.textparegraph}>Don't forget to schedule Fido's annual check-up with the vet. He'll be due for his vaccinations soon!</Text>
               <Text style={NotificationStyle.twonavemberscreen}>04 Nov</Text>
               </View>
             </TouchableOpacity> */}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
