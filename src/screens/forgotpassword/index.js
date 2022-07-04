/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    Text,
    View,
    useWindowDimensions,
    TextInput,
    Image,
    Pressable,
    SafeAreaView,
    StatusBar,
  } from 'react-native';
  import React, {useState} from 'react';
  import mailIcon from '../../assets/mail.png';
  import BackHeader from '../../component/BackHeader';
  import styles from './styles';
  import Loader from '../../component/Loader';
  import { WHITE } from '../../helper/Color';

  const ForgotPassword = ({navigation}) => {
    const {height, width} = useWindowDimensions();
    const [loader, setloader] = useState(false);  
    const [email, setEmail] = useState(false);  

    const OnSubmit = async () => {
  
    };
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          animated={true}
          translucent={false}
          backgroundColor="#05192D"
          barStyle="light-content"
        />
          <BackHeader
            img={require('../../assets/backIcon.png')}
            handleBackArrow={() => navigation.goBack()}
            title="Forgot Password"
          />
          <Image
            source={require('../../assets/AppLogo.png')}
            style={{height: '15%', width: '30%', resizeMode:"contain", alignSelf:"center"}}
          />
         
          <View style={{alignItems:"center", marginTop: height * 0.1}}>
          <Text style={{color: WHITE.dark, fontSize:16, textAlign:"center", marginBottom:10}}>Enter Your Email Address</Text>
            <View
              style={[
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              <Image
                resizeMode="contain"
                source={mailIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                style={[
                  {
                    color: 'white',
                    width: '80%',
                  },
                ]}
                placeholderTextColor="white"
                placeholder={'EMAIL_ADDRESS'}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={e => setEmail(e)}
              />
            </View>
            <Pressable
            onPress={() => navigation.goBack()}
            style={styles.Pressable}

          >
            <Text style={styles.insidePressableTxt}>SIGN_IN</Text>
          </Pressable>
            </View>
        {loader && <Loader loading={loader} />}
      </SafeAreaView>
    );
  };
  
  export default ForgotPassword;
  