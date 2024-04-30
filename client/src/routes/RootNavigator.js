import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, Fonts } from '../utils';
import { StatusBar } from "react-native";
import {
  LoginandRegistrationScreen, WelcomePhrmacy, LocationHomeOfficeScreen, ConformLocation, PopularMedicine
  , HospitalsSMedicinecreen, ProductItemList, ProductDetailesScreen, PaymentScreen, AllBookMarkScreen,
  CreditCardScreen, PaytmSuccessFully, RatingScreen, EditLocationScreen, DrawerFAQ, EditProfileScreen, SplashScreen, GetstartedSliderscreen,  DrawerNavigationNotification, DrawerSettingsScreen, DrawerTrackOrder, DrawerNavigationYourOrderScreen, OtpVeryfyScreen, AddOrderitemScreen, CheckOutScreen, ForgotPassword, OffersTab, PaymentHistoryScreen, ChatDoctorScreen, ProductCategory, VideoPlay, Cart, ChatScreen,HelpScreen
} from '../screens';

import { RouteName, TabNavigator } from '../routes';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const RootNavigator = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  // <StatusBar barStyle="light-content" backgroundColor={colorrdata} />
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen name={RouteName.GET_STARTED_SCREEN} component={GetstartedSliderscreen} options={{ headerShown: false }} />

        <Stack.Screen name={RouteName.LOGIN_AND_REGISTRATION} options={{ headerShown: false }} component={LoginandRegistrationScreen} />

        <Stack.Screen name={RouteName.WELCOME_SUMANYA} options={{ headerShown: false }} component={WelcomePhrmacy} />

        <Stack.Screen name={RouteName.LOCATION_HOME_OFFICE_SCREEN} options={{ headerShown: false }} component={LocationHomeOfficeScreen} />

        <Stack.Screen name={RouteName.CONFORMLOCATION_SET} options={{ headerShown: false }} component={ConformLocation} />

        <Stack.Screen name={RouteName.HOME_SCREEN} options={{ headerShown: false }} component={TabNavigator} />

        <Stack.Screen name={RouteName.POPULAR_SCREEN}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Search',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}

          component={PopularMedicine} />

        <Stack.Screen name={RouteName.HOSPITAL_MEDICINE_SCREEN}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Search by popular',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={HospitalsSMedicinecreen} />

        <Stack.Screen name={RouteName.NOTIFICATION_SCREEN} options={{ headerShown: false }} component={DrawerNavigationNotification} />

        <Stack.Screen name={RouteName.PRODUCT_LIST_ITEM} options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'Fruits Store',
          headerTintColor: colorrdata,
          headerTitleStyle: {
            color: colorrdata,
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          },
        }} component={ProductItemList} />

        <Stack.Screen name={RouteName.PRODUCT_DETAILS_SCREEN} options={{ headerShown: false }} component={ProductDetailesScreen} />

        <Stack.Screen name={RouteName.DRAWER_HELP_SCREEN}  options={{
            headerShadowVisible: false,
            title: 'Help',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }} component={HelpScreen} />

        <Stack.Screen name={RouteName.PAYMENTSCREEN}
          options={{
            headerShadowVisible: false,
            title: 'Manage Payment Methods',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={PaymentScreen} />

        <Stack.Screen name={RouteName.SETTTING_SCREEN}
          options={{
            headerShown: false,
          }}
          component={DrawerSettingsScreen} />

        <Stack.Screen name={RouteName.ALL_BOOK_MARK_SCREEN}
          options={{
            headerShadowVisible: false,
            title: 'All Bookmarks',

            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={AllBookMarkScreen} />

        <Stack.Screen name={RouteName.YOUR_ORDER_SCREEN}
          options={{
            headerShadowVisible: false,
            headerShown: false,
            title: null,
            headerTintColor: colors.theme_backgound,

          }}
          component={DrawerNavigationYourOrderScreen} />

        <Stack.Screen name={RouteName.OTP_VERIFY_SCREEN} options={{ headerShown: false }} component={OtpVeryfyScreen} />

        <Stack.Screen name={RouteName.ORDER_TAB_SCREEN}
          options={{
            headerShown: true,
            headerTintColor: colorrdata,
            headerShadowVisible: false,
            title: 'Order',
            headerTitleStyle: {
              fontWeight: '700',
              color: colorrdata,
            },
          }}
          component={AddOrderitemScreen} />

        <Stack.Screen name={RouteName.CHECK_OUT}
          options={{
            headerShown: true,
            headerTintColor: colorrdata,
            headerShadowVisible: false,
            title: 'Confirm Order',
            headerTitleStyle: {
              fontWeight: '700',
              color: colorrdata,
            },
          }}
          component={CheckOutScreen} />

        <Stack.Screen name={RouteName.CREDIT_CARD_SCREEN_SET} options={{
          headerShown: true,
          headerTintColor: colorrdata,
          headerShadowVisible: false,
          title: 'Save Card',
          headerTitleStyle: {
            fontWeight: '700',
            color: colorrdata,
          },
        }} component={CreditCardScreen} />

        <Stack.Screen name={RouteName.PAYMENT_SUCCESSFULLY} options={{
          headerShadowVisible: false,
          headerShown: true,
          title: null,
          headerTitleStyle: {
            fontWeight: '700'
          },
        }} component={PaytmSuccessFully} />

        <Stack.Screen name={RouteName.RATING_SCREEN_SET}  options={{
            headerShadowVisible: false,
            title: 'Feedback',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }} component={RatingScreen} />       

        <Stack.Screen name={RouteName.EDIT_LOCATION_SCREEN}
          options={{
            headerShadowVisible: false,
            title: 'SET DELIVERY LOCATION',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={EditLocationScreen} />

        <Stack.Screen name={RouteName.EDIT_PROFILE_SCREEN}
          options={{
            headerShadowVisible: false,
            title: 'Edit Profile',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={EditProfileScreen} />

        <Stack.Screen name={RouteName.FORGET_PASSWORD_SCREEN}
          options={{
            headerShadowVisible: true,
            title: 'Forget Password',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={ForgotPassword}
        />
        <Stack.Screen name={RouteName.PAYMENT_HISTORY}
          options={{
            headerShadowVisible: true,
            title: 'Payment History',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={PaymentHistoryScreen}
        />

        <Stack.Screen name={RouteName.DOCTOR_CONSULTANT_SCREEN}
          options={{ headerShown: false }}
          component={ChatDoctorScreen}
        />

        <Stack.Screen name={RouteName.PRODUCT_CATEGORY} options={{
          headerShown: true,
          headerTintColor: colorrdata,
          headerShadowVisible: false,
          title: 'Product Category',
          headerTitleStyle: {
            fontWeight: '700',
            color: colorrdata,
          },
        }} component={ProductCategory} />

        <Stack.Screen name={RouteName.VIDEO_PLAY_SCREEN} options={{
          headerShown: true,
          headerTintColor: colorrdata,
          headerShadowVisible: false,
          title: 'Video Play',
          headerTitleStyle: {
            fontWeight: '700',
            color: colorrdata,
          },
        }} component={VideoPlay} />

        <Stack.Screen name={RouteName.CART_SCREEN} options={{
          headerShown: true,
          headerTintColor: colorrdata,
          headerShadowVisible: false,
          title: 'Cart',
          headerTitleStyle: {
            fontWeight: '700',
            color: colorrdata,
          },
        }} component={Cart} />



        <Stack.Screen name={RouteName.FAQ_SCREEN} options={{ headerShown: false }} component={DrawerFAQ} />

        <Stack.Screen name={RouteName.CHAT_WITH_DOCTOR_SCREEN}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Araminta',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={ChatScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;