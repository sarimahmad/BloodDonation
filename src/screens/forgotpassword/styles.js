/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';


// dimenstion
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#05192D',
    },
    secondaryMainContainer: { height: '100%', },
    headingContainer: { marginVertical: height * 0.01, marginHorizontal: width * 0.04, width: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
    firstText: { color: 'white', fontSize: width * 0.070, fontFamily: 'Roboto-Bold' },
    secondText: { color: 'white', fontSize: width * 0.04, marginVertical: height * 0.006, fontFamily: 'Roboto-Regular', lineHeight: 25 },
    KeyboardAvoidingViewContainer: {
        alignItems: 'center',
     
        width: width * 1,
    },
    insideKeyboardAvoidingViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#213147',
        width: width * 0.95,
        borderRadius: 8,
        marginBottom: 5,
        paddingLeft: 5,
    },
    insideKeyboardAvoidingViewContainer_img: { alignSelf: 'center', marginHorizontal: width * 0.01, height: height * 0.045, width: width * 0.062 },
    forgotPasswordView: { flexDirection: 'row', marginTop: height * 0.02, marginHorizontal: width * 0.06 },
    forgotPasswordbtn: { color: '#6BB0F5', alignItems: 'baseline' },
    mainPressableContainer: { position: 'relative', alignSelf: 'center', marginVertical: height * 0.2 },
    Pressable: {
        padding: 10,
        alignSelf: 'center',
        width: width * 0.9,
        backgroundColor: 'red',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,   

    },
    insidePressableTxt: { color: 'white', fontFamily: 'Roboto-Bold', fontSize: width * 0.05 },
    mainPressableContainerlinkView: { flexDirection: 'row', alignSelf: 'center', marginTop: height * 0.02 },
    validationTextContainer: {
        width: '100%',
        marginVertical: height * 0.009,
        marginLeft: width * 0.04,
    },
    validationTextContainerText: { color: 'red', fontSize: width * 0.04 },

});