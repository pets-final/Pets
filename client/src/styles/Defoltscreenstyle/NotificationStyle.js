import { SF, SW, wp, hp, widthPercent, Fonts, ColorTheme, SH } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
    borderRadius: 100
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 16, 
    textAlign: 'center',
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    paddingBottom: 5,
    paddingTop: 5,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: 'red',
    fontWeight: '600',
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
  },
  settingtexttitle: {
    color: 'black',
    fontWeight: '700',
    fontSize: 21,
    paddingHorizontal: '5%',
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexviewheader: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
  },
  imagesetus: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginRight: 20,
  },
  flexdiractionrow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorTheme.BGFEF7DC,
    paddingHorizontal: '5%',
    paddingVertical: 10,
    borderBottomColor: ColorTheme.LighGrey,
    borderBottomWidth: 1,
  },
  flexdiractionrowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: '5%',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  textparegraph: {
    fontSize: 13,
    color: 'black',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 19,
  },
  twonavemberscreen: {
    fontSize: 13,
    color: ColorTheme.TextGreyColor,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 19,
    paddingTop: 3,
  },
  setparegraphwidth: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  setparegraphwidthtwo: {
    width: '70%',    
  }
});
