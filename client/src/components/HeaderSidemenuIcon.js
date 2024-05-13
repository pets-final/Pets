import React from "react";
import { View, TouchableOpacity} from "react-native";
import IconE from 'react-native-vector-icons/EvilIcons';
import Styles from '../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';

const NavigationDrawerStructure = (props) => {
  const navigation = useNavigation();

  console.log('props',props.navigationProps.toggleDrawer);
  const {marginrighthome} = props;
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{}}>
      <View style={{}}>
        <View style={{}}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <IconE style={[{},{...marginrighthome}]}  color={"#861088"}  name="navicon"  size={35} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default NavigationDrawerStructure;