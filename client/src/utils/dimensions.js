import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const SW = dimension => {
  return (dimension / 375) * SCREEN_WIDTH;
};

export const SH = dimension => {
  return (dimension / 812) * SCREEN_HEIGHT;
};

export const SF = dimension => {
  return (dimension / 812) * SCREEN_HEIGHT;
};

export const heightPercent = percent => {
  return (percent / 100) * SCREEN_HEIGHT;
};

export const widthPercent = percent => {
  return (percent / 100) * SCREEN_WIDTH;
};

export const fontPercent = percent => {
  return (percent / 100) * SCREEN_HEIGHT;
};
