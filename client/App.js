import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Fonts, ColorTheme} from './src/utils';
import Home from './src/screens/Home/Home';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import GetstartedSliderscreen from './src/screens/GetstartedSliderscreen/GetstartedSliderscreen';
import LoginandRegistrationScreen from './src/screens/RegistrationScreen/LoginandRegistrationScreen';
import OTP_VERIFY_SCREEN from './src/screens/RegistrationScreen/OtpVerifyScreen';
import FORGET_PASSWORD_SCREEN from './src/screens/RegistrationScreen/ForgotPassword';
import EDIT_PROFILE_SCREEN from './src/screens/EditProfile/EditProfileScreen';
import ProductList from './src/screens/ProductList/ProductList';
import Category from './src/screens/Categories/Categories';
import FavoriteTab from './src/screens/Favorites/Favorite';
import EditProfileScreen from './src/screens/UserProfile/EditProfile';
import EditVetProfileScreen from './src/screens/VetProfile/EditVetProfile'
import MyVet from './src/screens/VetProfile/Myvet'
// import AppointContact from '';
import AppointContact from './src/screens/AppointContact/Appoint'
import VetProfileTab from './src/screens/VetProfile/VetProfile'
import map from './src/screens/Map/map';
import Nav from './tab.nav';
import blogDetails from './src/screens/blogs/blogDetails';
import Cart from './src/screens/cart/cart';
import CheckOutScreen from './src/screens/cart/checkout';
import PaytmSuccessFully from './src/screens/cart/paymentSucces';
import {ProductDetailesScreen} from './src/screens/ProductList/Productdetails';
import {PetsDetailesScreen} from './src/screens/Adopt/Adoptdetails'
import ChatDoctorScreen from './src/screens/ChatScreen/ChatDoctorScreen';
import ChatScreen from './src/screens/ChatScreenFolder/ChatScreen'
// import DrawerChatScreen from './src/screens/ChatScreenFolder/DrawerChatScreen'
import DoctorList from './src/screens/doctorList/DoctoList';
import WelcomeSumnya from './src/screens/Map/ConfirmAdress'
import UpdateImage from './src/screens/Map/confirmImage'
import Slider from './src/screens/vetSliderScreen/Slider';
import VetForm from './src/screens/vetSliderScreen/VetForm';
import NewProduct from './src/screens/ProductList/NewProduct'
import AdoptList from './src/screens/Adopt/AdoptList';
// import AppointContact from './src/screens/AppointContact/Appoint';
// import VetProfile from './src/screens/vetProfile/VetProfile';
import AddPetsScreen from './src/screens/Adopt/AddPets';
import NotificationScreen from './src/screens/UserProfile/notification';
import AddBlogs from './src/screens/blogs/addBlogs'
// import DrawerNavigationNotification from './src/screens/DefaultScreen/Notification/DrawerNavigationNotification'
import messaging from '@react-native-firebase/messaging';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentHistoryScreen from './src/screens/DefaultScreen/PaymentHistory/PaymentHistoryScreen';
// Function to request permission for receiving notifications
const requestUserPermission = async () => {
  const settings = await messaging().requestPermission();

  if (settings) {
    console.log('Permission settings:', settings);
  }
};

// Initialize Firebase Messaging
const initializeMessaging = async () => {
  await requestUserPermission();

  // Get the device token
  const token = await messaging().getToken();
  console.log('Device Token:', token);

  // Handle messages when the app is in the foreground
  messaging().onMessage(async remoteMessage => {
    console.log('Foreground Message:', remoteMessage);
  });

  // Handle messages when the app is in the background
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background Message:', remoteMessage);
  });
};

// Call initializeMessaging when the app starts
initializeMessaging();

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <StripeProvider publishableKey="pk_test_51Ox8ao00Q5gLy9r769FH3jifVru8SWzlPsV9txFatQ4I9uMn9duqFIQNtE4sSriKrdmcUxkEIfSfdni0zrwoQN1c00jfBr7of6">
    <NavigationContainer>
      <Stack.Navigator>
    
       
      
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />


        <Stack.Screen
          name="GetstartedSliderscreen"
          component={GetstartedSliderscreen}
          options={{headerShown: false}}
        />
       
       <Stack.Screen
          name="LoginandRegistrationScreen"
          options={{headerShown: false}}
          component={LoginandRegistrationScreen}
        />

        <Stack.Screen
          name="WelcomeSumnya"
          component={WelcomeSumnya}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="UpdateImage"
          component={UpdateImage}
          options={{headerShown: false}}
        />


        
        <Stack.Screen
          name="tab"
          options={{headerShown: false}}
          component={Nav}
        />
               
      <Stack.Screen
          name="map"
          options={{headerShown: false}}
          component={map}
        />
           <Stack.Screen
            options={{headerShown: false}}
            name="cart"
            component={Cart}
          />
      <Stack.Screen
          options={{headerShown: false}}
          name="checkout"
          component={CheckOutScreen}
        />
        <Stack.Screen
          name="NewProduct"
          component={NewProduct}
          options={{
            headerShadowVisible: true,
            title: 'New Product',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            }, 
          }}
        />
         <Stack.Screen
          name="addBlogs"
          component={AddBlogs}
          options={{
            headerShadowVisible: true,
            title: 'addBlogs',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
        />
        
        <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{
                  headerShadowVisible: true,
                  title: 'NotificationScreen',
                  headerTintColor: '#861088',
                  headerTitleStyle: {
                    color: '#861088',
                    fontFamily: Fonts.Metropolis_Medium,
                    fontSize: 17,
                    fontWeight: '700',
                  },
                }}
              />
          <Stack.Screen
          name="PaymentHistoryScreen"
          component={PaymentHistoryScreen}
           options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'DoctorList',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          }}}
        />
        
         <Stack.Screen options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'DoctorList',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          },
        }}  name="DoctorList" component={DoctorList} />

        <Stack.Screen
          options={{headerShown: false}}
          name="Slider"
          component={Slider}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="paymentSucces"
          component={PaytmSuccessFully}
        />

     
        <Stack.Screen
          options={{
            headerShadowVisible: true,
            title: 'Form',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          name="VetForm"
          component={VetForm}
        />
     
        <Stack.Screen
          options={{headerShown: false}}
          name="productDetails"
          component={ProductDetailesScreen}
        />
     
        <Stack.Screen
          options={{headerShown: false}}
          name="PetsDetailesScreen"
          component={PetsDetailesScreen}
        />
       
        {/* <Stack.Screen 
        name="DrawerNavigationNotification" 
        options={{ headerShown: false }} 
        component={DrawerNavigationNotification} /> */}

        <Stack.Screen
          name="blogDetails"
          options={{
            headerShadowVisible: true,
            title: 'Blog',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={blogDetails}
        />
        <Stack.Screen
          name="FORGET_PASSWORD_SCREEN"
          options={{
            headerShadowVisible: true,
            title: 'Forget Password',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={FORGET_PASSWORD_SCREEN}
        />
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            title: 'Category',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          name="Categories"
          component={Category}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Favorites"
          component={Category}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Edit Profile',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              color: "#861088",
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          name="EditProfile"
          component={EditProfileScreen}
        /> 
          <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Doctor Page',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: '#861088',
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          name="AppointContact"
          component={AppointContact}
        />
             <Stack.Screen options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'Edit Vet Profile',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 20,
            marginLeft: 17,
          },
        }}  name="EditVetProfile" component={EditVetProfileScreen} />
   <Stack.Screen options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'VetProfileTab',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          },
        }}  name="VetProfileTab" component={VetProfileTab} />
                   <Stack.Screen options={{
          headerShown: true,  
          headerShadowVisible: false,
          title: 'MyVet',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          }, 
        }}  name="Myvet" component={MyVet} />
         
         
          <Stack.Screen
          
          name="AdoptList"
          component={AdoptList}
          options={{
            headerShown: true,
            headerShadowVisible: true,
            title: 'AddPets',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: "#861088",
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
        />
         <Stack.Screen options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'ChatScreen',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          },
        }}  name="ChatScreen" component={ChatScreen} />
        <Stack.Screen
          name="AddPetsScreen"
          component={AddPetsScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'AddPets',
            headerTintColor: '#861088',
            headerTitleStyle: {
              color: "#861088",
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
    </StripeProvider>
  );
}

export default App;
