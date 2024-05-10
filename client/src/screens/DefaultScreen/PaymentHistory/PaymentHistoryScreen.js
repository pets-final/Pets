import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RouteName } from '../../../routes';
import images from '../../../index';
import { Container, Button } from '../../../components';
import { PaymentHistoryStyle,ProductitemList } from '../../../styles';
import IconM from 'react-native-vector-icons/dist/MaterialIcons';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import { colorsset } from '../../../utils';


const PaymentHistoryScreen = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    const { navigation } = props;

    return (

        <View style={[PaymentHistoryStyle.setcontainer, { backgroundColor: ProductitemList.bgcolorset }]}>
            <ScrollView style={{
                height: '100%',
                width: '100%',
            }}>
                <View style={PaymentHistoryStyle.ContainerAppointmentWrap}>
                    <View style={PaymentHistoryStyle.PaymentBoxwrap}>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View>
                                    <Image source={images.payapalicon} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />
                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Paypal</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,9 2022 at 11:00 AM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}90</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.applepay} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Apple Pay</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,8 2022 at 12:00 AM</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}30</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.applepay} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Apple Pay</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,8 2022 at 01:00 PM</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}30</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementFaild]}>failed</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.payapalicon} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Paypal</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,7 2022 at 02:00 PM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}40</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementPending]}>Pending</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.cardpayment} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>G Pay</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,6 2022 at 03:00 PM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}23</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.visapayment} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Visa</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,5 2022 at 04:00 PM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}55</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.payapalicon} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Paypal</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,1 2022 at 8:00 PM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}90</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.applepay} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Apple Pay</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,2 2022 at 11:00 PM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}30</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementFaild]}>failed</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.payapalicon} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Paypal</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,3 2022 at 05:00 PM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}40</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementPending]}>Pending</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.cardpayment} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />

                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>G Pay</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,4 2022 at 05:00 AM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}23</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                        <View style={PaymentHistoryStyle.PaymentBoxPerent}>
                            <View style={PaymentHistoryStyle.PaymentBox}>
                                <View >
                                    <Image source={images.visapayment} style={PaymentHistoryStyle.PaymentIcon} resizeMode='contain' />
                                </View>
                                <View style={PaymentHistoryStyle.payemnttimebox}>
                                    <Text style={PaymentHistoryStyle.PayemnttranferheadText}>Visa</Text>
                                    <Text style={PaymentHistoryStyle.PaymentTimeText}>Dec,5 2022 at 8:00 AM</Text>
                                </View>
                            </View>
                            <View style={PaymentHistoryStyle.PaymentAounttextpadright}>
                                <Text style={PaymentHistoryStyle.PaymentAounttext}><IconF name="dollar" style={PaymentHistoryStyle.PaymentAountIcon} />{' '}55</Text>
                                <Text style={[PaymentHistoryStyle.PayemntStatus, PaymentHistoryStyle.PayementSuccess]}>Successfull</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </ScrollView>
        </View>

    );
}
export default PaymentHistoryScreen;
