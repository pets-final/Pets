import { StyleSheet } from 'react-native';
import { Fonts, ColorTheme } from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  minviewallcontent: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 10,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center',
    height: '100%',

  },
  minviewallcontent: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 10,
  },
  bgcolorsetwhitetextinput: {
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height: 50,
    marginBottom: 20,
  },
  paddibnglefttextstyle: {
    paddingLeft: 10,
    color: 'gray',
    width: 260,
    padding: 0,
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
  },
  setwhitebox: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 7,
    padding: 10,
    marginBottom: 8,
  },
  textContainer: {
    fontSize: 13,
    fontFamily: Fonts.Poppins_Medium,
    color: 'white',
    textAlign: 'center',
  },
  setimagerstylewidth: {
    width: '100%',
    height: 200,
    borderRadius: 7,
  },
  textContainertwo: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 20,
    paddingBottom: 10,
    color: 'white',
  },
  textContainertwosetlive: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    color: 'white',
  },

  blacktitleunderlineset: {
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
    color: 'black',
    paddingTop: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    marginRight: 15,
    marginBottom: 10,
    height: 60,
  },
  setflexrowarrowleftthree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,

  },
  sebgcolorwhiyte: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
  },
  flexrowcreditcard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsetborderwidth: {
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 5,
  },
  settextwidth: {
    width: '80%',
  },
  creditcardtext: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,

    fontWeight: '600',
    marginLeft: 0,
    color: 'black'
  },
  youneedstext: {
    fontSize: 13,
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '600',
    marginLeft: 0,
    paddingTop: 5,
    lineHeight: 19,
    color: 'gray'
  },
  setparegraphviewstyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  paregraphtextstyleset: {
    fontSize: 14.5,
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '600',
    paddingTop: 5,
    lineHeight: 22,
    color: 'gray',
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: 'lightgray',
    paddingTop: 10,
  },
});
