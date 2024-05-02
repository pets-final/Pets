import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View } from "react-native";
import Style from '../styles/CommonStyle/SweetaelertModalStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';
// import { useSelector } from "react-redux";

function SweetaelertModal(props) {
    const { link, onPress, buttonTextStyle, imagesource, spacedImages,color,iconName } = props;
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();
    return (
        
        <View>
            <View style={Style.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={Style.setbgcolorgrsay}>
                        <View style={Style.centeredView}>
                            <View style={Style.modalView}>
                                <View style={Style.setroundcenter}>
                                    <View style={[Style.checkiconright,{ borderColor:props.color || "#feb344" }]}>
                                        <IconF style={[Style.setbackgroundicon,{color: props.color || "#feb344"}]} name={  'block' || 'check'} size={45} />
                                    </View>
                                </View>
                                <View style={Style.registertextset}>
                                    <Text style={Style.settext}>{props.message}</Text>
                                </View>
                                <View style={Style.buttonminviewdettwo}>
                                    <View style={Style.setokbutton}>
                                        <Button title="Ok"
                                            color={color || "#feb344"}
                                            buttonTextStyle={Style.setbuttontextstyle}
                                            buttonStyle={Style.setbuttonstyletwo}
                                            onPress={() => { setModalVisible(!modalVisible);  if (link){ navigation.navigate(props.link)} }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};
export default SweetaelertModal;

