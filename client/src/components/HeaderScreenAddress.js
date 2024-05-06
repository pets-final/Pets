import React from 'react';
import { Text, View, TouchableOpacity, } from "react-native";
import Styles from '../styles/Tab/HometabStyle';
import IconM from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SearchHeaderScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.minheaderflexview}>
        {/* <TouchableOpacity style={Styles.flexhomeimgandtext} onPress={() => navigation.navigate(RouteName.EDIT_LOCATION_SCREEN)}> */}
        <TouchableOpacity style={Styles.flexhomeimgandtext} onPress={() => navigation.navigate()}>
          <View>
            <IconM style={Styles.homeimagstyle} name="home" size={25} color={"#861088"} />
          </View>
          <View>
            <Text style={[Styles.hometext, { color: "#861088" }]}>Home</Text>
            <Text style={[Styles.addreshtext, { color: "#861088" }]}>1417 Timberbrook...</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchHeaderScreen;