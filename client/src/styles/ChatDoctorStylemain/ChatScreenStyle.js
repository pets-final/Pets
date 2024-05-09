import { SH, Fonts, ColorTheme, colorsset} from '../../utils';
import { StyleSheet, Dimensions, Platform } from 'react-native';

export const ChatScreenStyle= StyleSheet.create({

  minstyleviewphotograpgy: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  chartviewsetbgcolor: {
    padding: 10,
    maxWidth: '70%',
    borderRadius: 20,
  },
  textcolormessage: {
    fontSize: 16,
    color: 'black',
  },
  textcolormessagetwoset: {
    fontSize: 12,
    color: 'black',
    textAlign: 'right',
    paddingTop: 6,
  },
  postionabsoluteview: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textmessageview: {
    marginTop: 10,
  },
  flexrowsetsendmesasagew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textinputborderbottom: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    fontSize: 16,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
