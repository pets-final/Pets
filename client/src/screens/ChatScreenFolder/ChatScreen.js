import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, } from "react-native";
import { ChatScreenStyle } from '../../styles/ChatDoctorStylemain/ChatScreenStyle';
// import { useSelector } from "react-redux";
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/Foundation';

const ChartScreenset = () => {
  const { colorrdata } = 'black';
  return (
    <View style={ChatScreenStyle.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={ChatScreenStyle.minflexview}>
            <View style={ChatScreenStyle.minviewsigninscreen}>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <Text style={ChatScreenStyle.textcolormessage}> Good morning, I'm here for my cat's check-up. He's been having some trouble with his digestion</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:16</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Oct,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Chat_With_Doctor} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>I see, well let's take a look at him. Can you tell me a bit more about the symptoms?</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:18</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <Text style={ChatScreenStyle.textcolormessage}> Sure, he's been throwing up a lot and has been having diarrhea. He also doesn't seem to have much of an appetite.</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:19</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Oct,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Chat_With_Doctor} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>Alright, I'll take a look at him and run some tests. In the meantime, have you noticed any changes in his diet or environment?</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:19</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <Text style={ChatScreenStyle.textcolormessage}>No, nothing has changed.</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:20</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Oct,2022</Text>
              </View>
              {/* <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={ChatScreenStyle.seticonrevirview}>
                    <View style={ChatScreenStyle.leftimagelike}>
                      <IconM name="like" color={'#ffcc5b'} size={55} />
                    </View>
                  </View>
                </View>
              </View> */}
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.seticonrevirview}>
                  <View style={ChatScreenStyle.flexrowjucentertwo}>
                    <View style={ChatScreenStyle.leftimage}>
                      <Image source={images.Chat_With_Doctor} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatScreenStyle.messageminviewowner}>
                      <Text style={ChatScreenStyle.textcolormessage}>Dr.Geeta Typing...</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={ChatScreenStyle.postionabsoluteview}>
        <View style={ChatScreenStyle.textmessageview}>
          <View style={ChatScreenStyle.flexrowsetsendmesasagew}>
            <View>
              <TextInput
                style={ChatScreenStyle.textinputborderbottom}
                placeholder="Write a reply..."
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={ChatScreenStyle.flexrowimaginations}>
              <TouchableOpacity>
                <IconP name="grin" size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={ChatScreenStyle.setmarginrightlikeicon}>
                <IconO name="send" color={colorrdata} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChartScreenset;
