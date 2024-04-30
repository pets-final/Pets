import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent } from '../../utils';
export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: SH(10)
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: SH(10)
    },
    playbtn: {
        width: SH(50),
        height: SH(50),
        position: 'absolute',
        left: '45%',
        top: '35%'
    },
    HeadBoxTextStyle: {
        padding: SH(20),
        width: '100%'
    },
    TimeBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    TimerIcon: {
        marginTop: SH(7),
        marginRight: SH(10)
    },
    itemText: {
        color: '#000',
        fontFamily: Fonts.Metropolis_Medium,
        fontWeight: '600',
        fontSize: SF(18),
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: ColorTheme.sp_Theme,
    },
    setparegraph: {
        fontSize: SF(16),
        fontFamily: Fonts.Poppins_Medium,
        color: '#000',
        paddingTop: SH(20)
    },
    backgroundVideo: {
        width: '100%',
        height: 300,
        maxHeight: '35%',
        marginTop: SH(10),
        backgroundColor: '#000',
        marginTop: 0
    },
    Setimgdetails: {
        width: '100%',
        marginTop: 0,
        height: 170,
        borderRadius: 5
    }

});