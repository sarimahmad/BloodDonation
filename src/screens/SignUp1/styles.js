/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#05192D',
    height: '100%',
  },
  secondaryMainContainer: {height: '100%'},
  headingContainer: {
    marginVertical: height * 0.02,
    marginLeft: width * 0.02,
    width: '95%',
  },
  firstText: {
    color: 'white',
    fontSize: width * 0.071,
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
  },
  secondText: {
    color: 'white',
    fontSize: width * 0.04,
    marginVertical: height * 0.006,
    fontFamily: 'Roboto-Black',
  },
  KeyboardAvoidingViewContainer: {
    alignItems: 'center',
    marginHorizontal: width * 0.01,
    width: width * 1,
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
    marginBottom: 10,
    // borderColor: 'white',
    paddingLeft: 5,
    paddingVertical: height * 0.01,
  },
  insideKeyboardAvoidingViewContainer_img: {
    alignSelf: 'center',
    marginHorizontal: width * 0.014,
    height: height * 0.042,
    width: width * 0.07,
  },
  insideKeyboardAvoidingViewContainerDropdown: {
    flexDirection: 'row',
    backgroundColor: '#213147',
    width: width * 0.95,
    // borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    // borderColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: height * 0.018,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownContainer: {
    backgroundColor: '#213147',
    width: width * 0.95,
    // borderWidth: 1,
    borderRadius: width * 0.02,
    // marginBottom: height * 0.011,
    // borderColor: 'white',
    // paddingLeft: 10,
    paddingVertical: 10,
    //alignItems: 'center',
    height: height * 0.2,
  },
  dropdownContainerBtn: {
    borderWidth: 2,
    width: '95%',
    borderColor: '#708090',
    marginVertical: 5,
    paddingVertical: 8,
    borderRadius: 5,
    // backgroundColor : 'red',
  },
  dropdownContainerBtnText: {color: 'white', marginLeft: width * 0.02},
  checkedContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    marginHorizontal: width * 0.04,
  },
  checkedContainerBtn: {
    color: '#6BB0F5',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainPressableContainer: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: height * 0.025,
  },
  Pressable: {
    // alignSelf: 'center',
    alignItems: 'flex-end',
    width: width * 0.3,
    backgroundColor: '#3CF0A0',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    // flexDirection: 'column-reverse'
    // marginTop: height * 0.2
  },
  insidePressableTxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: width * 0.05,
  },
  mainPressableContainerlinkView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  validationTextContainer: {
    fontSize: width * 0.04,
    color: 'red',
    marginHorizontal: 5,
    marginVertical: 3,
  },

  dropDwonCon: {
    flexDirection: 'row',
    backgroundColor: '#213147',
    width: width * 0.95,
    // borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    // borderColor: 'white',
    paddingLeft: 5,
    //paddingVertical: height * 0.01,
    height: height * 0.08,
    alignItems: 'center',
  },
});
