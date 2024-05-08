import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native';
// import { RouteName } from '../../routes';
import images from '../../index';
// import { Container, Button } from '../../components';
import { PaymentHistoryStyle, ProductitemList} from '../../styles';
import {ChatDoctorStyle} from '../../styles/ChatDoctorStylemain/ChatDoctorStyle'
import IconA from 'react-native-vector-icons/dist/AntDesign';
import { Button } from '../../components';



const ChatDoctorScreen = (props) => {
    // const { 'colorrdata' } = useSelector(state => state.commonReducer) || {};
    // const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    const { navigation } = props;
    const [checked, setChecked] = React.useState('first');


    return (

        <View style={[PaymentHistoryStyle.setcontainer, { backgroundColor: ProductitemList.bgcolorset }]}>
             <StatusBar barStyle="dark-content" backgroundColor={'colorrdata'} />
            <ScrollView style={{
                height: 'auto',
                width: '100%',
            }}>
                <View style={ChatDoctorStyle}>
                    <View style={[ChatDoctorStyle.bgtopBox, { backgroundColor: 'colorrdata' }]}>
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} style={ChatDoctorStyle.backArrow}>
                            <IconA name="arrowleft" color="#000" style={ChatDoctorStyle.backArrowIcon} />
                        </TouchableOpacity>
                        <Image source={images.Chat_BgCat} resizeMode='contain' style={ChatDoctorStyle.bgImage} />
                        {/* <View style={ChatDoctorStyle.bgbottomimgstyle}></View> */}
                    </View>

                    <View style={[ChatDoctorStyle.petdetailsbox, ChatDoctorStyle.bgcolorset]}>
                        <Text style={ChatDoctorStyle.petname}>Abbie</Text>
                        <View style={ChatDoctorStyle.petdataBoxMain}>
                            <View style={[ChatDoctorStyle.petdataBox, { borderColor: 'colorrdata' }]}>
                                <Text style={ChatDoctorStyle.petheadtext}>2 years</Text>
                                <Text style={ChatDoctorStyle.petsub_headtext}>Age</Text>
                            </View>
                            <View style={[ChatDoctorStyle.petdataBox, { borderColor: 'colorrdata' }]}>
                                <Text style={ChatDoctorStyle.petheadtext}>3,1 kg</Text>
                                <Text style={ChatDoctorStyle.petsub_headtext}>Weight</Text>
                            </View>
                            <View style={[ChatDoctorStyle.petdataBox, { borderColor: 'colorrdata' }]}>
                                <Text style={ChatDoctorStyle.petheadtext}>Female</Text>
                                <Text style={ChatDoctorStyle.petsub_headtext}>Sex</Text>
                            </View>
                        </View>

                        <View style={ChatDoctorStyle.FlewzRowBetween}>
                            <View>
                                <Text style={[ChatDoctorStyle.petheadtext, { color: 'colorrdata' }]}>Recommendation</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={()=> navigation.navigate(RouteName.PRODUCT_TAB)}>
                                    <Text style={ChatDoctorStyle.petsub_headtext}>See all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={ChatDoctorStyle.flexRow}>
                            <View style={ChatDoctorStyle.chatimagsetbox} >
                                <Image source={images.Chat_Product1} style={ChatDoctorStyle.chatimagset} />
                            </View>
                            <View style={ChatDoctorStyle.FlexRowBetween}>
                                <View>
                                    <Text style={[ChatDoctorStyle.petheadtext, { color: 'colorrdata' }]}>Red Meat Recipe</Text>
                                    <Text style={ChatDoctorStyle.Petstime}>1 times/Day</Text>
                                </View>
                                <View>
                                    <Button
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                        color={'colorrdata'}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={ChatDoctorStyle.flexRow}>
                            <View style={ChatDoctorStyle.chatimagsetbox} >
                                <Image source={images.Chat_Product2} style={ChatDoctorStyle.chatimagset} />
                            </View>
                            <View style={ChatDoctorStyle.FlexRowBetween}>
                                <View>
                                    <Text style={[ChatDoctorStyle.petheadtext, { color: 'colorrdata' }]}>Omega 3</Text>
                                    <Text style={ChatDoctorStyle.Petstime}>3 times/Day</Text>
                                </View>
                                <View>
                                    <Button
                                        value="first"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('second')}
                                        color={'colorrdata'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={ChatDoctorStyle.Btnbox}>
                <Button title='Chat With Doctor' onPress={()=> navigation.navigate(RouteName.CHAT_WITH_DOCTOR_SCREEN)} />
            </View>
        </View>

    );
}
export default ChatDoctorScreen;
