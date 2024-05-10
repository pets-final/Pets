import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity } from "react-native";
import { Conformlocation } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import IconH from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useSelector } from "react-redux";
import Geocoder from 'react-native-geocoding';
import env from '../../../env'
Geocoder.init(env.GOOGLE_MAPS_API_KEY);
const ConformLocation = () => {
  const colorrdata = "#861088";
  const navigation = useNavigation();
  const OnLoginPress = () => {
    navigation.replace('');
  }
  const Homescreenonpress = () => {
    navigation.replace('');
  }

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const [address, setAddress] = useState('');

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      if (crd) {
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });

        getAddressFromCoords(crd.latitude, crd.longitude);
      }
    })
  }, []);

  const getAddressFromCoords = async (latitude, longitude) => {
    try {
      const addressResponse = await Geocoder.from({ latitude, longitude });
      const formattedAddress = addressResponse.results[0].formatted_address;
      setAddress(formattedAddress);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={Conformlocation.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="#89b4f8" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Conformlocation.minflexview}>
            <View style={Conformlocation.bgwhiteview}>
              <View style={Conformlocation.mapviewstyle}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={Conformlocation.mapConformlocationet}
                  scrollEnabled={true}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  zoomEnabled={true}
                  pitchEnabled={true}
                  rotateEnabled={true}
                  region={position}
                  onRegionChangeComplete={(region) => {
                    setPosition(region);
                    getAddressFromCoords(region.latitude, region.longitude);
                  }}
                >
                  <Marker
                    title='You are here'
                    description='This is a description'
                    coordinate={position} />
                </MapView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <TouchableOpacity onPress={() => OnLoginPress()} style={Conformlocation.settextstyle}>
        <View style={[Conformlocation.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
          <Text style={Conformlocation.textstyle}>
            <IconH name="chevrons-left" size={27} color="white" />
          </Text>
          <Text style={Conformlocation.textstyle}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={Conformlocation.positonabsolute}>
        <View style={Conformlocation.setwhiteboxwidth}>
          <View style={Conformlocation.centerpencileicon}>
            <TouchableOpacity style={Conformlocation.setpencileicon} onPress={() => navigation.replace(RouteName.EDIT_LOCATION_SCREEN)}>
              <IconP name="pencil-alt" size={17} color={'#8D8D8D'} />
            </TouchableOpacity>
          </View>
          <View style={Conformlocation.flexrowhomeimage}>
            <View style={Conformlocation.marginright}>
              <IconH name="home" size={28} color="#2E3A59" />
            </View>
            <View>
              <Text style={Conformlocation.satyanilaym}>Home</Text>
              <View style={Conformlocation.setwhiteboxwidthtwo}>
                <Text style={Conformlocation.satyanilaymtwo}>{address}</Text>
              </View>
            </View>
          </View>
          <View>
            <Button title="Confirm Location "
              buttonStyle={{ backgroundColor: colorrdata }}
              onPress={() => navigation.navigate('WelcomeSumnya', { address })}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ConformLocation;