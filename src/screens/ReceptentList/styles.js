import { StyleSheet, Dimensions } from 'react-native';


// dimenstion
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#05192D',
        // height: '70%'
        // paddingBottom: '10%',
    },
    secondaryMainContainer: { width: '95%', paddingVertical: '5%', backgroundColor: 'gray', alignSelf: 'center', borderRadius: 10, marginTop: '5%' },
    headingContainer: { marginVertical: height * 0.01, marginHorizontal: width * 0.04, width: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
    firstText: { color: 'white', fontSize: width * 0.070, fontFamily: 'Roboto-Bold', alignSelf: 'center' },
    secondText: { color: 'white', fontSize: width * 0.04, marginVertical: height * 0.006, fontFamily: 'Roboto-Regular', lineHeight: 25 },
    KeyboardAvoidingViewContainer: {
        alignItems: 'center',
        marginHorizontal: width * 0.01,
        width: width * 1,
        // height:'80%'
        // alignSelf: 'center',
        // backgroundColor: 'red',
        // marginHorizontal: width * 0.01,
    },
    insideKeyboardAvoidingViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#213147',
        width: width * 0.95,
        // borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
        // borderColor: 'white',
        paddingLeft: 5,
        // paddingVertical: height * 0.02
    },
    insideKeyboardAvoidingViewContainer_img: { alignSelf: 'center', marginHorizontal: width * 0.01, height: height * 0.045, width: width * 0.062 },
    forgotPasswordView: { flexDirection: 'row', marginTop: height * 0.02, marginHorizontal: width * 0.06 },
    forgotPasswordbtn: { color: '#6BB0F5', alignItems: 'baseline' },
    mainPressableContainer: { position: 'relative', alignSelf: 'center', marginVertical: height * 0.2 },
    Pressable: {
        padding: 10,
        alignSelf: 'center',
        // alignItems: 'flex-end',
        width: width * 0.8,
        backgroundColor: 'red',
        // paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'column-reverse'
        marginTop: '30%',
        marginBottom: height * 0.02,

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