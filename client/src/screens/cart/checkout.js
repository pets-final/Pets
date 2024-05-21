import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView,FlatList, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity,Pressable } from "react-native";
import Styles from '../../styles/Tab/CartTabStyle';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconW from 'react-native-vector-icons/Ionicons';
import IconC from 'react-native-vector-icons/AntDesign';
import  Button from '../../components/Button';
import  SweetaelertModal from '../../components/SweetAlertModal';
import { useNavigation } from '@react-navigation/native';
import { CartTabStyle } from '../../styles';
import IconA from 'react-native-vector-icons/Entypo';
import { useStripe } from '@stripe/stripe-react-native';

import images from '../../index';

const CheckOutScreen = ({ route }) => {
  const totalPrice = route.params?.totalPrice;
  const cartItems = route.params?.cartItems;
  // console.log('dddddddddddddd',route.params.address);
  const colorrdata = "#861088"
  const  pricesymboldata = '$'
  const navigation = useNavigation();
  const stripe = useStripe();

  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [count, setCount] = useState(1);
  const [Applycoupon, setApplycoupon] = useState(0);
  const [userAddress, setuserAddress] = useState(0);
  const [isLoading, setIsLoading] = useState(0);
  let PriceSymbol = '$'
  useEffect(() => {
    if(route.params.address){
      setuserAddress(route.params.address);
    }
    else { 
      setuserAddress(route.params.user.address);
    }
  }, [route.params.address])
  const createPaymentIntent = async (paymentInfo) => {
    // Implement your backend call here
    // Replace with your server endpoint to create a payment intent
    try {
      const response = await fetch('http://10.0.2.2:3000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentInfo),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  const onCheckout = async () => {
    setIsLoading(true);

    // 1. Create a payment intent
    const response = await createPaymentIntent({
      amount: Math.floor(totalPrice * 100),
    });

    if (response.error) {
      Alert.alert('Something went wrong');
      setIsLoading(false);
      return;
    }

    // 2. Initialize the Payment sheet
    const { error: initError } = await stripe.initPaymentSheet({
      paymentIntentClientSecret: response.clientSecret,
      merchantDisplayName: 'Pets',
    });

    if (initError) {
      Alert.alert('Something went wrong', initError.message);
      setIsLoading(false);
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const { error: paymentError } = await stripe.presentPaymentSheet();

    if (paymentError) {
      Alert.alert(`Error code: ${paymentError.code}`, paymentError.message);
      setIsLoading(false);
      return;
    }

    // 4. If payment is successful -> create the order
    onCreateOrder();
    setIsLoading(false);
  };

  const onCreateOrder = async () => {
    // Implement your order creation logic here
    // Alert.alert('Order has been submitted', 'Your order reference is: 12345');
    // Clear cart and navigate to the success screen or another screen if necessary
    navigation.navigate('paymentSucces');
  };
  const Render = ({item,index})=>{
    return (
      <View style={[CartTabStyle.flexminviewcount, CartTabStyle.bgcolorset]}> 
      <View style={CartTabStyle.flexiconandimagetext}>
        <View>
          <Image style={CartTabStyle.setimagehightwidth} resizeMode="contain" source={item.image} />
        </View>
        <View>

          <Text style={CartTabStyle.pistahouse}>{item.name}</Text>
        </View>
      </View>
      <View style={[CartTabStyle.flexiconandimagetext, CartTabStyle.bgcolorset]}>
        <View style={[ { borderColor: colorrdata }]}>

          <Text style={[CartTabStyle.minustextstyle, { color: colorrdata }]}>{item.count}</Text>
        
        </View>
      
          <TouchableOpacity>
            <Text style={[CartTabStyle.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {item.price}</Text>
          </TouchableOpacity>
      </View>
    </View>
    )
  }

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
                        <Text style={Styles.satyanilayam}>{userAddress}</Text>
                        
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('map',{back:'checkout'})}>
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
                <FlatList
        data={cartItems}
        renderItem={Render}
        keyExtractor={item => item.id}
      />

                 
                  
                 
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
                        <Text style={Styles.digitaltext}>{pricesymboldata} {route.params.totalPrice} </Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Subtotal</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} {route.params.totalPrice}</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Delivery</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} 10</Text>
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
                        <Text style={Styles.digitaltextsettwo}> $ {route.params.totalPrice + 10}</Text>
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
          <Pressable onPress={onCheckout} style={Styles.button}>
                  <Text style={Styles.buttonText}>
                    Checkout
                    
                  </Text>
                </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CheckOutScreen;
