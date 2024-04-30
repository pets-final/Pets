import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, colors, widthPercent, ColorTheme } from '../../utils';

export default StyleSheet.create({
  setimageviewstyle: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  backgroundimagstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUnderLine: {
    backgroundColor: 'hsl(0, 0%, 94.9%)',
    color: ColorTheme.TextBlackColor,
    width: '100%',
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 12,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  inputtextstyle: {
    color: ColorTheme.TextBlackColor,
    fontSize: 16,
    // fontWeight:'600',
    fontFamily: Fonts.Metropolis_Medium,
    width: '100%'
  },
  textpassworedsert: {
    color: ColorTheme.TextBlackColor,
    paddingRight: 30,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    width: '100%'
  },
  minboxview: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 0,
  },
  boldtextstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 17,
    fontWeight: '600',
    color: ColorTheme.TextBlackColor,
  },
  textgraystyle: {
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 15,
    fontWeight: '600',
    color: ColorTheme.TextGreyColor,
  },
  flexiconview: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: colors.theme_backgound,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    borderRadius: 20,
    paddingLeft: 15,
  },
  setdigitaltext: {
    fontSize: 14,
    color: ColorTheme.TextWhiteColor,
    textAlign: 'center',
    paddingRight: 10,
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Bold,
  },
  flexrowtwxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  setwidthboldtext: {
    width: '70%'
  },
  flexrowtwxtTWO: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED'
  },
  flexrupidigitaltext: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  firstrupisstext: {
    fontSize: 14,
    color: ColorTheme.TextBlackColor,
    textDecorationLine: 'line-through',
    textDecorationColor: ColorTheme.TextGreyColor,
    paddingRight: 10,
    fontWeight: '600',
    fontFamily: Fonts.Roboto_Regular,
  },
  fiesttextsettwo: {
    fontSize: 22,
    color: colors.theme_backgound,
    paddingRight: 10,
    fontWeight: '600',
    fontFamily: Fonts.Roboto_Regular,
    position: 'relative',
    top: -7,
  },
  flrxfireiocnview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caltextstyle: {
    fontSize: 15,
    color: '#9E9E9E',
    paddingRight: 10,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  paregraphtextbox: {
    color: '#A7A7A7',
    fontSize: 14,
    fontFamily: Fonts.Roboto_Regular,
    paddingTop: 10,
  },
  flexviewheader: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    height: 90,
  },
  textstylemenage: {
    color: ColorTheme.TextBlackColor,
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    marginLeft: 17,
  },
  settingtext: {
    fontWeight: '600',
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    paddingRight: 15,
  },
  foodlogoimage: {
    width: 82,
    height: 82,
    borderRadius: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  setbgcolorwhitelogo: {
    backgroundColor: ColorTheme.BGWhiteColor,
    height: 120,
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
  },
  setpasswordwidtbg: {
    width: '70%',
  },
  splshimg: {
    height: 80,
    width: 80,
   
  },
  cornertitlestyletwo: {
    backgroundColor: colors.theme_backgound,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 15,
    height: 30,
    paddingRight: 10,
    position: 'absolute',
    left: -3,
    top: 70,
  },
  simpletextstylenewbox: {
    color: ColorTheme.TextWhiteColor,
    fontSize: 13.5,
    paddingLeft: 10,
    fontFamily: Fonts.Metropolis_Medium,
  },
  cornertitlestyle: {
    backgroundColor: colors.theme_backgound,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 15,
    height: 30,
    paddingRight: 10,
    position: 'absolute',
    left: -3,
    top: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: ColorTheme.BGGreyColor,
    opacity: 0.9,
  },
  modalView: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 15,
    paddingTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: ColorTheme.BtnOpenBGColor,
  },
  buttonClose: {
    backgroundColor: ColorTheme.BtnCloseBGColor,
  },
  textStyle: {
    color: ColorTheme.TextWhiteColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  setdeleverylocationstyle: {
    color: ColorTheme.LocanColor,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 17,
    fontWeight: '700',
    position: 'relative',
    top: 7,
    paddingBottom: 10,
  },
  flexrowsetlocationmap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  setmarginleftgps: {
    marginLeft: 15,
  },
  cureentlocationtext: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 17,
    fontWeight: '700',
  },
  usingtextlocation: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 13,
  },
  textandclosebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
  },
  marginright: {
    marginRight: 20,
  },
  satyanilaym: {
    color: ColorTheme.TextBlackColor,
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  satyanilaymtwo: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 13,
    width: '99%',
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowhomeimage: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    // width:'90%'
  },
  minstyleviewphotograpgys: {
    backgroundColor: 'white',
    height: '100%'
  },
  locationsurchinputshadow: {
    backgroundColor: ColorTheme.BGWhiteColor,
    color: 'black',
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 12,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 3,
  },
  inputtextstylelocation: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    width: 270,
    marginLeft: 10,
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: ColorTheme.BGWhiteColor
  },
  seticonborder: {
    borderWidth: 1,
    padding: 12,
    borderColor: ColorTheme.BorderColor,
    borderRadius: 13,
    marginLeft: 20,
  },
  placeholder: {
    height: 200,
    margin: 50,
    backgroundColor: ColorTheme.BGGreyColor,
  },
  stickyComponent: {
    height: 30,
    backgroundColor: ColorTheme.BgRed,
  },
  searchBarContainer: {
    backgroundColor: ColorTheme.BgRed,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: ColorTheme.InputBG,
    borderRadius: 13,
    width: '79%',
    height: Platform.OS === 'ios' ? 50 : 50,
  },
  searcjtextcolorstyle: {
    color: ColorTheme.SrchText,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 16,
    marginLeft: 15,
  },
  setwidthviewinput: {
    width: '93%',
    marginHorizontal: '5%',
  },
  setbgcolorborder: {
    backgroundColor: ColorTheme.BGWhiteColor,
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    zIndex: 1,
    borderRadius: 100,
    shadowColor: '#52006A',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 3,
    position: 'absolute',
    right: 20,
    top: -20
  },
  imagsetstyle: {
    width: 90,
    height: 80,
    marginTop: 10,
    borderRadius: 13,
    marginRight: 12,
  },
  imagsetstylefoodyitemdata: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  setboximage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  iconbookmark: {
    position: 'relative',
    left: 10,
  },
  setboxtopimage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  imagsetstylefredrice: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20,
  },
  foodedetailestextstyle: {
    width: widthPercent(86),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 160,
  },
  foodylistingpagedata: {
    width: widthPercent(89),
    borderRadius: 10,
    height: 160,
  },
  yourorderdata: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  imagsetstyleyoyrperfrom: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  imageroundyorgrprrfromance: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  resetordersetbox: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(33),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'center',
    color: ColorTheme.TextWhiteColor,
  },
  setbgcolorviewtwoview: {
    borderRadius: 14,
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settextstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: 20,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 17,
  },
  settextstyletwo: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 17,
  },
  setbariconmarginright: {
    paddingLeft: 5,
  },
  flexrowsetaddresh: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  repeatordericon: {
    color: ColorTheme.TextGreyColor
  },
  cancelbtn: {
    backgroundColor: ColorTheme.BGWhiteColor
  },
  icomvloseselectwrap: {
    width: '100%',
    direction: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingHorizontal: '5%'
  },
  icomvloseselectwraptwo: {
    position: 'absolute',
    right: 0,
    top: -7
  },
  icomvloseselect: {
    width: 'auto',
  }
});