
import { StyleSheet, Dimensions } from 'react-native';


// dimenstion
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {

        //backgroundColor: Colors.PRIMARY,
        flex: 1,
        backgroundColor: '#05192D',

    },



    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },

    imgMainCon: {
        backgroundColor: '#213147',
        width: width * 0.95,
        height: height * 0.16,
        alignSelf: 'center',
        borderRadius: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoCon: {
        width: width * 0.4,
        height: height * 0.2,
    },

    txtCon: {
        // backgroundColor : 'red',
        width: width * .9,
        alignSelf: 'center',
        marginTop: height * .02,
    },

    txt1: {

        fontSize: width * .034,
        color: '#FFFFFF',
        lineHeight: height * .03,
    },
});
