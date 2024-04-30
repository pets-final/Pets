
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, colors, Strings, widthPercent } from '../../utils';

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%'   
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minflexview: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  whiteboxshadow: {
    height: 204,
    width: '100%',
    overflow: 'hidden',
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 345,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setimagviewlogin: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imagesetus: {
    width: 70,
    height: 70,
    // tintColor:colors.theme_backgound,
  },
  bgcolortabset: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 72,
  },
  tabsettext: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Bold,
  },
  bordersetactive: {
    position: 'absolute',
    height: Platform.OS === 'ios' ? 3 : 3,
    width: 150,
    left: Platform.OS === 'ios' ? 20 : 20,
    top: Platform.OS === 'ios' ? -3 : -3,
    borderRadius: 40,
  },
  bordersetactivetwo: {
    position: 'absolute',
    height: Platform.OS === 'ios' ? 3 : 3,
    width: 150,
    top: Platform.OS === 'ios' ? -3 : -3,
    right: Platform.OS === 'ios' ? 60 : 30,
    borderRadius: 40,
  },
  tabminview: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: ColorTheme.BGWhiteColor,
  },
  mincolorwhite: {
    backgroundColor: 'white',
  },
  textstyle: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  buttonStyle: {
    height: 56,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  buttonimagtext: {
    color: 'white',
    position: 'relative',
    left: 10,
    paddingTop: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonview: {
    paddingTop: 15,
    paddingBottom: 7,
  },
  textcolorset: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 12,
  },
  bluebuttonstyle: {
    backgroundColor: ColorTheme.DroptextColor,
    height: 56,
    marginBottom: 20,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  setbuttonborderradiuswhite: {
    borderRadius: 100,
    backgroundColor: 'hsl(0, 0%, 94.9%)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    paddingbottom: 5,
    paddingTop: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  buttonimagtexthree: {
    marginLeft: 35,
    fontFamily: Fonts.Poppins_Medium,
    position: 'relative',
    left: -15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: ColorTheme.TextBlackColor
  },
  setbuttonborderradius: {
    borderRadius: 150,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  // Sign-UP //
  flexrowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  allreadylogintext: {
    width: '100%',
    // paddingRight: 40,
    // marginLeft: 30,
    paddingHorizontal: SH(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  AlinSet: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
 
  settextstyle: {
    fontSize: 17,
    color: ColorTheme.ColoRGBTwo,
    fontWeight: '400',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: SH(10),
  },
  setbuttonviestylesinup: {
    width: '50%',
  },
  logintext: {
    color: ColorTheme.ColoRGBTwo,
    fontWeight: '400',
    fontFamily: Fonts.Metropolis_Medium,    
  },
  flexrowtwxtandgoogle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  flexrowtwxtanimage: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  googleimage: {
    width: 35,
    height: 35,
  },
  facebbokimgsignup: {
    width: 28,
    height: 28,
  },
  registertextstyle: {
    fontSize: 30,
    fontFamily: Fonts.Nuntion_midum,
    fontWeight: '700'
  },
  gooleiconsetwhiteshadow: {
    backgroundColor: 'white',
    marginLeft: 20,
    height: 45,
    width: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 4,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  paddingbottom: {
    paddingBottom: 10,
  },
  // forget password 
  setbackarror: {
    width: 15,
    height: 15
  },
  setminviewforgetpassword: {
    width: '100%',
  },
  setforgettext: {
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 20,
  },
  forgettextset: {
    fontSize: 36,
    fontFamily: Fonts.Metropolis_Medium,
    textAlign: 'center'
  },
  messageboxstyle: {
    width: 30,
    height: 25,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 7
  },
  settextstyleforget: {
    color: ColorTheme.Color676767,
    fontSize: 14,
    fontFamily: Fonts.Metropolis_Medium,
  },
  starcolor: {
    color: ColorTheme.ColorFF4B26,
    fontSize: 14,
  },
  sendcode: {
    paddingTop: 30,
    fontSize: 24,
    fontFamily: Fonts.Metropolis_Medium,
  },
  bottomaerrowimg: {
    width: 110,
    height: 110
  },
  flexrowsetsendcode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setpositionabsolute: {
    marginTop: 20,
    height: 60,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 4,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  loginviewmin: {
    marginTop: 20,
  },
  textcolorsetwhite: {
    color: 'white'
  },
  marginright: {
    marginRight: 6,
  },
  centerarrow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  positionsetabsoluteincon: {
    position: 'absolute',
    top: 13.5,
    left: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  facbookbgcolorset: {
    width: 30,
    height: 30,
    backgroundColor: ColorTheme.BGColor395185,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexrowsetminview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    paddingbottom: 5,
    paddingTop: 3,
    width: '100%',
    borderRadius: 100,
    marginBottom: 15,
  },
  setbuttviewtopspace: {
    paddingTop: 20,
  },
  loginwithfacebboktext: {
    marginLeft: 10,
  },
  iconbgcolorwhite: {
    backgroundColor: 'white',
    borderRadius: 100,
    height: 30,
    width: 30,
    marginRight: 10,
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pleseentername: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    position: 'relative',
    top: -10,
    fontFamily: Fonts.Metropolis_Medium,
  },
  paregraphotpbottom: {
    color: ColorTheme.TextGreyColor,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 13,
    marginBottom: '8%',
    marginRight: 10,
  },
  paregraph: {
    color: ColorTheme.LighColorSix,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 12,
  },
  signintextset: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15,
    fontFamily: Fonts.Metropolis_Medium,
  },
  accountbutton: {
    width: '100%',
    marginBottom: 15,
  },
  flexrowsettext: {
    flexDirection: 'row',
  },

  otpbuttonstyle: {
    width: SW(50),
    height: SH(61),
    borderWidth: 2.5,
    color: '#000000',
    fontSize: SF(28),
    fontWeight: '700',
    borderRadius: SH(7),
  },
  textinputcolorbutton: {
    color: 'white'
  },
  resendtextbold: {
    fontSize: 13,
    color: 'black',
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },

  topimage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: ColorTheme.TextGreyColor
  },
  otpinputstyleaet: {
    height: 100,
    width: '100%',
  },
  eyeiconset: {
    color: ColorTheme.TextGreyColor,
  },
});
