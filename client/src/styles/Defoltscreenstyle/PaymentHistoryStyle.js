import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, ColorTheme, } from '../../utils';

export default StyleSheet.create({
    setcontainer: {    
        height: '100%'
    },  
    AppointmentHeader: {
        height: SH(100),
        borderBottomLeftRadius: SH(20),
        borderBottomEndRadius: SH(20),       
    },      
    ContainerAppointmentWrap: {
        // position: 'relative',
        // top: -50
    }, 
    PaymentBoxwrap: {
        // marginHorizontal: SH(15),      
        padding: SH(5),
        marginHorizontal: SH(12)
    }, 
    PaymentBoxPerent: {
        flexDirection: 'row',       
        justifyContent: 'space-between',
        backgroundColor:'#fff',       
        shadowColor: "#000",
        padding: SH(5),
        shadowOffset: {
          width: 0,
          height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.02,
        shadowRadius: Platform.OS === 'ios' ? 2 : 20,
        elevation: Platform.OS === 'ios' ? 1 : 2.5,
        borderBottomColor: ColorTheme.light_grey,
        paddingVertical: SH(10),
        marginVertical: SH(8),
        borderRadius: 3        
    } ,
    PaymentAounttextpadright: {
        paddingRight: SH(3)
    },
    PaymentBox: {
        flexDirection: 'row',   
        textAlign: 'center',
        alignItems: 'center' 
    },
    AppointmentDrImage: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    PayemntIcon: {
        fontSize: SF(45),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: ColorTheme.gray_text_color,
        padding:SH(5),
        color: ColorTheme.gray_text_color
    },
    payemnttimebox: {
        paddingLeft: SH(10)
    },
    PayemnttranferheadText: {
        fontFamily: Fonts.Poppins_Medium,
        color: '#000',
        fontSize: SF(16),
    },
    PaymentTimeText:{
        fontFamily: Fonts.Poppins_Regular,
        color: ColorTheme.theme_backgound,
        fontSize: SF(12),
    },
    PaymentAounttext: {
        fontSize: SF(18),
        fontFamily: Fonts.Poppins_Bold,
        color: '#000',        
        textAlign: 'right'
    },
    PaymentAountIcon: {
        fontSize: SF(18),
        fontFamily: Fonts.Poppins_Bold,
        color: '#000',     
    },
    PayemntStatus: {
        fontSize: SF(16),
        fontFamily: Fonts.Poppins_Medium,
        color: '#000',  
        textAlign: 'right'
    },
    PayementSuccess: {
        color: 'green'
    },
    PayementFaild: {
        color: 'red'
    },
    PayementPending: {
        color: '#90EE90'
    },
    PaymentIcon: {
        height: SH(30),
        width: SH(30),        
    }
   
    
       
});