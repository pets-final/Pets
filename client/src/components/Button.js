import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, SF, SH, SW,colors } from '../utils';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';



function Button(props) {
  const { title, onPress, buttonStyle, disable,iconname, buttonTextStyle, imagesource, spacedImages , color } = props;

  // const dispatch = useDispatch();
  
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: color || "#feb344" ,
          alignItems: 'center',
          borderRadius: 100,
          justifyContent: 'center',
          width: '100%',
          height:56,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 0 : 0,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 0 : 0,
          elevation: Platform.OS === 'ios' ? 0 : 0,
        },
        buttonTextStyle: {
          color: "white",
          fontFamily:Fonts.Poppins_Medium,
          fontSize: SF(19),
          fontWeight: '600',
          lineHeight: SH(26)
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%'
        },
        leftImageStyle: {
          marginVertical: SW(5),
          width:30,
          height:30,
        }
      }),
    [disable, spacedImages, colors],
  );
  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles.buttonStyle, { ...buttonStyle }]}
      onPress={() => onPress()}>
      <View style={styles.buttonViewStyle}>
        {imagesource ? <Image source={imagesource} style={styles.leftImageStyle} resizeMode='cover' /> : null}
        {iconname ? <Icon name={iconname}  size={40} color="white" /> : null}
        <Text style={[styles.buttonTextStyle, { ...buttonTextStyle }]}>{title}</Text>
        {imagesource ? <View /> : null}
      </View>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disable: false,
  imagesource: null,
  buttonTextStyle: {},
  spacedImages: false,
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disable: PropTypes.bool,
  imagesource: PropTypes.any,
  buttonTextStyle: PropTypes.shape({}),
  spacedImages: PropTypes.bool
};

export default Button;
