import { SF, SW, wp, hp, colors, Fonts, ColorTheme } from '../../utils';
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
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: colors.theme_backgound,
    fontWeight: '700',
    fontSize: 21,
    fontFamily: Fonts.Metropolis_Medium,
  },
  setbgcolorwhitedata: {
    backgroundColor: ColorTheme.BGWhiteColor,
    color: 'black',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',  
    fontFamily: 'DMSans-Medium',
    marginLeft: 5,
    marginBottom: 20,
    paddingVertical: 7,
    paddingHorizontal: 7,
    marginRight: 2,
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    borderWidth: 0.5,
    borderColor: '#ededed'
  },
  padinghorizontal: {
    paddingHorizontal: 20,
    paddingLeft: 7,
  },
  paddingtopset: {
    marginTop: 10,
  },
  yourorderdata: {
    height: 60,
    width: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  Frutnamrtextstyle: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowsetstarsignup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: -5,
    alignItems: 'center'
  },
  fourratingtextstyle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins_Medium,
    color: 'gray',
    position: 'relative',
    top: 3,
    marginLeft: 7,
  },
  Setweighttextcolor: {
    fontWeight: '700',
    color: 'black',
    fontSize:12,
    opacity: 0.7,
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowtextstyle: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  flexrowtwxtstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '78%',
    justifyContent: 'space-between',
  },
  setmiimagevistyle: {
    flexDirection: 'row',
    width: '22%',
  },
  flexrowrejected: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  flexrowrejectedtwo: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    marginTop:5,
  },
  Repeatordertextstyle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins_Medium,
    color: 'gray',
    marginLeft:10,
    width:70,
  }

});
