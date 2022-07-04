import {StyleSheet, Dimensions} from 'react-native';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.0001,
    // backgroundColor: 'red',
  },
  backArrowCont: {
    width: '10%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
    // backgroundColor: 'blue',
  },
  backArrow: {
    width: '65%',
    height: '65%',
    marginLeft: width * 0.03,
  },

  headTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: height * 0.025,
    color: 'white',
  },
});
