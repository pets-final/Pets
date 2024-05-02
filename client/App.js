
import * as React from 'react';
import { SF, SH, SW, Fonts, colors, Strings, widthPercent, ColorTheme } from './src/utils';

import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import GetstartedSliderscreen from './src/screens/GetstartedSliderscreen/GetstartedSliderscreen'
import LoginandRegistrationScreen from './src/screens/RegistrationScreen/LoginandRegistrationScreen'
import OTP_VERIFY_SCREEN from './src/screens/RegistrationScreen/OtpVerifyScreen'
import FORGET_PASSWORD_SCREEN from './src/screens/RegistrationScreen/ForgotPassword'
import EDIT_PROFILE_SCREEN from './src/screens/EditProfile/EditProfileScreen'
import ProductList from './src/screens/ProductList/ProductList'
import Category from './src/screens/Categories/Categories';
import FavoriteTab from './src/screens/Favorites/Favorite';
import ProfileTab from './src/screens/UserProfile/Profile';
import EditProfileScreen from './src/screens/UserProfile/EditProfile';
import map from './src/screens/Map/map'
import Nav from './tab.nav'
import blogDetails from './src/screens/blogs/blogDetails'import TabNavigator from './src/routes/TabNavigator'

const Stack = createNativeStackNavigator();

function App() {  
  return (  

    <NavigationContainer>
      <Stack.Navigator>
        
      {/* <Stack.Screen name="EDIT_PROFILE_SCREEN"
          options={{
            headerShadowVisible: false,
            title: 'Edit Profile',
            headerTintColor: "#feb344",
            headerTitleStyle: {
              color: "#feb344",
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={EDIT_PROFILE_SCREEN} />  */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetstartedSliderscreen" component={GetstartedSliderscreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginandRegistrationScreen" options={{ headerShown: false }} component={LoginandRegistrationScreen} />
      <Stack.Screen name="tab"  options={{ headerShown: false }} component={Nav} />
      <Stack.Screen options={{ headerShown: false }}  name="Home" component={Home} />

      <Stack.Screen name="map"  options={{ headerShown: false }} component={map} />
      <Stack.Screen name="blogDetails" options={{
            headerShadowVisible: true,
            title: 'Blog',
            headerTintColor:  "#feb344",
            headerTitleStyle: {
              color:  "#feb344",
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}  component={blogDetails} /> 


        {/* <Stack.Screen name="FORGET_PASSWORD_SCREEN"
          options={{
            headerShadowVisible: true,
            title: 'Forget Password',
            headerTintColor:  "#feb344",
            headerTitleStyle: {
              color:  "#feb344",
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={FORGET_PASSWORD_SCREEN}
        /> */}

        {/* <Stack.Screen name={RouteName.WELCOME_SUMANYA} options={{ headerShown: false }} component={WelcomePhrmacy} />

        <Stack.Screen name={RouteName.LOCATION_HOME_OFFICE_SCREEN} options={{ headerShown: false }} component={LocationHomeOfficeScreen} />

        <Stack.Screen name={RouteName.CONFORMLOCATION_SET} options={{ headerShown: false }} component={ConformLocation} />

        <Stack.Screen name={RouteName.HOME_SCREEN} options={{ headerShown: false }} component={TabNavigator} />    */}


       
      <Stack.Screen  options={{
            headerShadowVisible: false,
            title: 'Category',
            headerTintColor: "#feb344",
            headerTitleStyle: {
              color: "#feb344",
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}  name="Categories" component={Category} />
      <Stack.Screen options={{ headerShown: false }}  name="Favorites" component={FavoriteTab} />
     
      <Stack.Screen options={{
          headerShown: true,
          headerShadowVisible: false,
          title: 'Edit Profile',
          headerTintColor: "#feb344",
          headerTitleStyle: {
            color: "#feb344",
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
          },
        }}  name="EditProfile" component={EditProfileScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;