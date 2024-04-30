import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, colors, Strings, widthPercent, ColorTheme } from '../../utils';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },
    titelText: {
        marginTop: SH(15),
        fontFamily: Fonts.Poppins_Bold,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#263238',
        fontSize: SF(20),
        lineHeight: SF(30)
    },
    sectionView: {
        height: 'auto',
        width: '100%',
        marginHorizontal: '5%',
        paddingBottom: SH(5),
        marginTop: SW(8)
    },
    flatelist: {
        width: '100%',
        height: 'auto',
        marginTop: SH(10),        
    },
    item: {
        width: '100%',
        height: SH(80),
        marginVertical: SH(7),
        borderRadius: SH(7),
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    itemChilde: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    itemText: {
        color: '#000',
        fontFamily: Fonts.Metropolis_Medium,
        fontWeight: '600',
        fontSize: SF(16),
    },
    itemTextTime: {
        color: 'gray',
        fontFamily: Fonts.Metropolis_Regular,
        fontSize: SF(14),
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: SH(10),
    },
    textWidthset: {
        width: '72%'
    },
    itemImg: {
        width: SH(80),
        height: SH(80),
        borderRadius: 7,
        marginRight: SH(10)
    },
    minviewallcontent: {
        width: '100%',
        height: '100%',
        // paddingHorizontal: SH(20)
        // backgroundColor: '#e3f2f0',
    },
    minstyleviewphotograpgy: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    itemChildeBox: {
        backgroundColor: '#fff',
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 0.5,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        // overflow: 'hidden',
        borderRadius: 7,
        marginVertical: SH(10),
        // width: '100%',
        borderWidth: 0.5,
        borderColor: '#ededed',
        marginHorizontal: SH(20)
    }
});