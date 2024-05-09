import { colors, widthPercent, Fonts, ColorTheme, SH, SW, SF } from '../../utils';
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
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  minstyleviewphotograpgyTwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // alignItems: 'center'
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center'
    // marginHorizontal: '5%',
  },
  minviewsigninscreenTwo: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // height: '100%',
    // width: '100%',
    // alignItems: 'center'
  },
  minflexview: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  pharamacyimagestyle: {
    width: '100%',
    height: '100%',
  },
  Cat_pharamacyimagestyle: {
    width: 90,
    height: 80,
  },
  bgwhiteboxminviewWrap: {
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 12,
    marginTop: 0,
    borderWidth: 0.5,
    borderColor: '#ededed'
  },
  CatbgwhiteboxminviewWrap: {
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    backgroundColor: '#ffffff',
    // marginRight: 20,
    borderRadius: 7,
    marginBottom: 12,
    marginTop: 0,
    width: '30%',
    marginHorizontal: '1.65%',
    borderWidth: 0.5,
    borderColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgwhiteboxminview: {
    color: 'black',
    paddingBottom: 20,
    width: 160,
    flex: 1,
  },
  bgwhiteboxminview2: {
    color: 'black',
    paddingBottom: 20,
    width: 360,
    height: 500,
    flex: 1,
  },
  Catbgwhiteboxminview: {
    color: 'black',
  },
  ListItemHertWrap: {
    position: 'absolute',
    top: 3,
    right: 5
  },
  bgcolorwhiteset: {
    paddingLeft: 10,
  },
  Cat_bgcolorwhiteset: {
    // backgroundColor: 'red',  
    paddingHorizontal: SH(5)
  },
  setimageviewstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: SH(5)
  },
  setimageviewstyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height:300,
    padding: SH(5)
  },
  textstylesimple: {
    paddingRight: 20,
    fontWeight: '700',
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 10,
    marginTop: 10,
  },
  textstylesimpletwo: {
    color: 'black',
    paddingRight: 20,
    fontSize: 17,
    paddingLeft: 15,
  },
  setplusbgcolorset: {
    backgroundColor: colors.theme_backgound,
    width: 30,
    height: 30,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  justicenterflexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderStyle: 'dashed',
    width: '100%',
  },
  setflexstadr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SH(10),
    paddingBottom: SH(5)
  },
  setratingtextstyle: {
    fontSize: 16,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '700',
    marginLeft: 5,
  },
  setherticon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  HeartIconLike: {
    position: 'absolute',
    right: 5,
    top: 3
  },
  settextcolorcenterlist: {
    paddingHorizontal: SF(10),
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 13,
    color: '#000'
  },
  boldpricetext: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#000',
    paddingTop: 5
  },
  textoftitle: {
    paddingLeft: SH(10),
    paddingRight: SH(10),
    fontWeight: 'bold',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(14),
  },
  paddTop: {
    paddingTop: SH(5),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    paddingHorizontal: SH(10),
    paddingBottom:  SH(10),
    fontFamily: Fonts.Metropolis_SemiBold,
    fontSize: SF(16),
    color: '#000'
  }
});
