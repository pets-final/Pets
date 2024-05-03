import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, colors, ColorTheme, heightPercent } from '../../utils';

export const ChatDoctorStyle=StyleSheet.create({

    bgtopBox: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#fff7f2',
    },
    bgImage: {
        width: '100%',
        height: SH(250),
        position: 'relative',
        zIndex: 11111111111
    },
    backArrow: {
        position: 'absolute',
        left: 20,
        top: 20,
        zIndex: 1
    },
    backArrowIcon: {
        fontSize: SF(22),
    },
    // bgbottomimgstyle: {
    //     backgroundColor: ColorTheme.BGScreen,
    //     width: '100%',
    //     height: SH(30),
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20,
    //     position: 'absolute',
    //     bottom:0
    // }
    petdetailsbox: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
        top: -20,
        zIndex: 0,
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    petname: {
        fontFamily: Fonts.Metropolis_SemiBold,
        color: colors.TextBlackColor,
        fontSize: SF(22),
        textAlign: 'center',
        paddingVertical: SH(15),
        paddingTop: SH(25)
    },
    bgcolorset: {
        backgroundColor: ColorTheme.BGScreen
    },
    petdataBoxMain: {
        flexDirection: 'row',
        paddingHorizontal: SH(15)
    },
    petdataBox: {
        borderWidth: 0.5,
        width: '30%',
        marginHorizontal: '1.65%',
        justifyContent: 'center',
        paddingVertical: SH(15),
        paddingHorizontal: SH(5),
        borderRadius: 3
    },
    petheadtext: {
        fontFamily: Fonts.Metropolis_SemiBold,
        fontSize: SF(18),
        textAlign: 'center',
        color: colors.TextBlackColor,
    },
    petsub_headtext: {
        fontFamily: Fonts.Nuntion_Regular,
        fontSize: SF(16),
        textAlign: 'center',
        color: colors.gray_text_color,
        paddingTop: SH(5)
    },
    FlewzRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(20),
        paddingTop: SH(25)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SH(20),
        borderColor: 'lightgray',
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: SH(20),        
    },
    chatimagsetbox: {       
        padding: SH(5),
        borderRadius: 3,
        marginRight: SH(5)
    },
    chatimagset: {
        width: SW(60),
        height: SH(60),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Petstime: {
        fontFamily: Fonts.Nuntion_Regular,
        fontSize: SF(16),     
        color: colors.gray_text_color,
        paddingTop: SH(5)
    },
    FlexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '78%'
    },
    Btnbox: {
        marginHorizontal: SH(20),
        width: '90%',
        position: 'absolute',
        bottom: 5
    },
    hightset: {
        height: heightPercent(100)
    }

});