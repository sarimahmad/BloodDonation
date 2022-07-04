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

    firstCon: {
        backgroundColor: 'red',
        height: height * 0.2,
        width: width * 0.8,
    },

});