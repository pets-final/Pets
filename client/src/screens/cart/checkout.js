import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, } from "react-native";
import Styles from '../../styles/Tab/CartTabStyle';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconW from 'react-native-vector-icons/Ionicons';
import IconC from 'react-native-vector-icons/AntDesign';
import  Button from '../../components/Button';
import  SweetaelertModal from '../../components/SweetAlertModal';
import { useNavigation } from '@react-navigation/native';
import images from '../../index';

const CheckOutScreen = ({ route }) => {
  const colorrdata = "#feb344"
  const  pricesymboldata = '$'
  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [count, setCount] = useState(1);
  const [Applycoupon, setApplycoupon] = useState(0);
  let PriceSymbol = '$';

 

  return (
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fffffff'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[Styles.minflexview, Styles.checkoutboxwrap, Styles.bgcolorset]}>
            <View style={[Styles.minviewsigninscreen, Styles.bgcolorset]}>
              <View style={[Styles.setwhitebox, Styles.bgcolorset]}>
                <View style={[Styles.flexsetviewwhitebox, Styles.bgcolorset]}>
                  <View style={[Styles.twoflexview, Styles.bgcolorset]}>
                    <View style={[Styles.settextflexview, Styles.bgcolorset]}>
                      <Text style={Styles.yourordertextset}>Order</Text>
                    </View>
                    <View style={Styles.flexicondighit}>
                      <Text><Icon name="shopping-bag" size={20} color={'#010101'} /></Text>
                      <Text style={Styles.twodigitset}>4</Text>
                    </View>
                  </View>
                </View>
                <View style={[Styles.bgcolorhomeaddresh, { backgroundColor: colorrdata }]}>
                  <View style={Styles.minflehomeandedit}>
                    <View style={Styles.flexhomeaddresh}>
                      <View>
                        <IconW name="md-home-outline" size={27} color={'white'} />
                      </View>
                      <View>
                        <Text style={Styles.satyanilayam}>1417 Timberbrook Lane</Text>
                        <Text style={Styles.homeaddreshtext}>Denver, CO 80204, United States</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.EDIT_LOCATION_SCREEN)}>
                      <Icon name='edit' size={25} color={'white'} />
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.minflehomeandedittwo}>
                    <View style={Styles.flexhomeaddreshtwo}>
                      <View style={Styles.setclockbgview}>
                        <IconC name="clockcircleo" size={20} color={'#2E3A59'} />
                      </View>
                    </View>
                    <TouchableOpacity>
                      <IconM name='schedule' size={27} color={'white'} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <View>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Cart_screen_img1} />
                      </View>
                      <View>
                        <Text style={Styles.pistahouse}>Barks & Wags Plaid Pet House</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {15 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <View>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Cart_screen_img2} />
                      </View>
                      <View>
                        <Text style={Styles.pistahouse}>Dog Food - Chicken & Egg, Puppy</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {10 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <View>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Cart_screen_img3} />
                      </View>
                      <View>
                        <Text style={Styles.pistahouse}>Moochie Beauty skin & coat</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {3 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <View>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Cart_screen_img4} />
                      </View>
                      <View>
                        <Text style={Styles.pistahouse}>Summer Sunglasses</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {11 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.textinputandbuttonflex}>
                    <View>
                      <TextInput
                        placeholder="Enter Promo Code"
                        placeholderTextColor={'#838383'}
                        style={Styles.inputcarttextstyle}
                        keyboardType={'number-pad'}
                      />
                    </View>
                    <View style={Styles.setbutttonview}>
                      <Button buttonStyle={{ backgroundColor: colorrdata }} onPress={() => { setDisplayAlert(1); setApplycoupon(); }} buttonTextStyle={Styles.textstyle} title="Apply" />
                    </View>
                  </View>
                  <View style={Styles.centeredView}>
                    {DisplayAlert !== 0 ?
                      <SweetaelertModal message='Applied Successful' link={RouteName.CHECK_OUT} />
                      :
                      null
                    }
                  </View>
                  <View style={Styles.setviewlistbill}>
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Subtotal</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} 175 (4) </Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Subtotal</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} {105 * count}</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Delivery</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} 50</Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Delivery</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} 35</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.digitaltextsettwo}>Total</Text>
                        <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {750 * count}</Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.digitaltextsettwo}>Total</Text>
                        <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {140 * count}</Text>
                      </View>
                    }
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[Styles.positionabsolutesetbutton, Styles.bgcolorset]}>
        <View style={Styles.accountbutton}>
          {Applycoupon === 0 ?
            <View style={Styles.textcenyet}>
              <View>
                <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {39 * count}</Text>
                <Text style={[Styles.viewdetailesbilltext, { color: colorrdata }]}>View Details Bill</Text>
              </View>
            </View>
            :
            <View style={Styles.textcenyet}>
              <View>
                <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {140 * count}</Text>
                <Text style={[Styles.viewdetailesbilltext, { color: colorrdata }]}>View Details Bill</Text>
              </View>
            </View>
          }
          <View style={Styles.setbuttonwidthview}>
            <Button title="Proceed to Pay"
              buttonTextStyle={Styles.textstylepayment}
              buttonStyle={{ backgroundColor: colorrdata }}
              onPress={() => navigation.navigate('paymentSucces')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CheckOutScreen;
