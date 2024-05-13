import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, colors, Strings, widthPercent } from '../../utils';

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingBottom: 50,
  },
   bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f8f8f8',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  minviewsigninscreen: {
    width: '100%',
    height: '100%'
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  checkoutboxwrap: {
    marginTop: 10
  },
  heartimagstyle: {
    height: 160,
    width: '100%',
    borderRadius: 7,
  },
  setheightviewfit: {
    height: 200,
  },
  setwhitebox: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 30,
    marginTop: -40,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 20,
    paddingRight: 20,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  cartboxwrap: {
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    height: '100%'
  },
  flexicondighit: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  twoflexview: {
    flexDirection: 'row'
  },
  flexsetviewwhitebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  yourordertextset: {
    fontSize: 25,
    color: ColorTheme.Color0A191E,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: 30,
  },
  twodigitset: {
    fontSize: 15,
    color: ColorTheme.Color0A191E,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: Fonts.Metropolis_Medium,
  },
  bgcolorhomeaddresh: {
    padding: 15,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 15,
    overflow: 'hidden',
  },
  flexhomeaddresh: {
    flexDirection: 'row',
    width: '50%'
  },
  flexhomeaddreshtwo: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  minflehomeandedit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 18,
  },
  minflehomeandedittwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  satyanilayam: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    marginLeft: 8,
    fontFamily: Fonts.Metropolis_Medium,
  },
  satyanilayamtwo: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  homeaddreshtext: {
    flexDirection: 'row',
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
    lineHeight: 17,
    fontSize: 12,
    fontFamily: Fonts.Metropolis_Medium,
  },
  editaddreshtext: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: Fonts.Metropolis_Medium,
  },
  setclockbgview: {
    backgroundColor: ColorTheme.BGE6B64E,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    borderRadius: 5,
    marginRight: 10,
  },
  setimagehightwidth: {
    height: 50,
    width: 50,
    borderRadius: 15,
    marginRight: 15,
  },
  flexiconandimagetext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setplusminusflex: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 100,
    paddingTop: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 90,
    paddingBottom: 3,
    paddingHorizontal: 5,
    paddingRight: 5,
  },
  minustextstyle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: Fonts.Metropolis_Medium,
  },
  digitalsawtwext: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 12,
    fontFamily: Fonts.Metropolis_Medium,
  },
  friedricetext: {
    fontSize: 12,
    color: ColorTheme.Color050505,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  pistahouse: {
    fontSize: 12,
    color: ColorTheme.Color050505,
    fontWeight: '600',
    width: 90,
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexminviewcount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    paddingRight: 5,
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 15,
    overflow: 'hidden',
    borderRadius: 5
  },
  applybutton: {
    borderRadius: 100,
    height: 50,
  },
  paymentbutton: {
    backgroundColor: ColorTheme.LocanColor,
    borderRadius: 100,
    height: 50,
  },
  textstyle: {
    color: 'white'
  },
  textstylepayment: {
    color: 'white',
  },
  textstylepaymenttwo: {
    color: 'white',
    marginRight: 40,
  },
  setbutttonview: {
    width: '40%',
  },
  textinputandbuttonflex: {
    color: 'black',
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 17,
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 15,
    overflow: 'hidden',
    marginBottom: 20
  },
  inputcarttextstyle: {
    fontSize: 15,
    color: ColorTheme.Color838383,
    fontWeight: '700',
    width: 160,
    fontFamily: Fonts.Metropolis_Medium,
  },
  setviewlistbill: {
    color: 'black',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 17,
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 5,
    elevation: Platform.OS === 'ios' ? 1 : 15,
    overflow: 'hidden',
  },
  flexrowspacebeetveen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 20,
  },
  subtotaltext: {
    color: ColorTheme.Color0A191E,
    fontSize: 15,
    fontWeight: '700',
    width: 160,
    fontFamily: Fonts.Metropolis_Medium,
  },
  digitaltext: {
    color: ColorTheme.Color0A191E,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  digitaltextsettwo: {
    color: ColorTheme.Color0A191E,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  centerviewbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%'
  },
  flexdiractionrowbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  flexdiractionrowbuttontwo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  positiontoarrowsset: {
    position: 'absolute',
    right: 30,
  },
  flotbuttonright: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 60,
  },
  positionabsolutesetbutton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 5 : 25,
    elevation: 3,
  },
  accountbutton: {
    marginBottom: 15,
    position: 'relative',
    top: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  textcenyet: {
    flexDirection: 'row',
    paddingLeft: 20,
    width: '45%'
  },
  dolardtextset: {
    color: 'black',
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
  },
  viewdetailesbilltext: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  setbuttonwidthview: {
    width: '50%',
  },
});
