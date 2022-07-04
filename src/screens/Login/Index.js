/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

import mailIcon from '../../assets/mail.png';

import passIcon from '../../assets/PassIcon.png';
import eyeCross from '../../assets/eyeCross.png';

import BackHeader from '../../component/BackHeader';
import styles from './styles';

const SignIn = () => {
  const {height, width} = useWindowDimensions();
  const [passVisible, setPassVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isValidationErrorVisibility, setIsValidationErrorVisibility] =
    useState(false);
  const [errMsg, setErrMsg] = useState('');
  const OnSubmit = () => {
    if (email == '' && password == '') {
      setErrMsg('Please fill the fields');
      setIsValidationErrorVisibility(true);
    }
    else if (password.length == 0) {
      setErrMsg('Please insert a password');
      setIsValidationErrorVisibility(true);
    } else {
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor="#05192D"
        barStyle="light-content"
      />
      <ScrollView contentContainerStyle={{paddingBottom: height * 0.04}}>
        <BackHeader
          title="Sign In"
        />

        <View style={styles.headingContainer}>
          <Text style={styles.firstText}>{'WELCOME_BACK'}</Text>
          <Text style={styles.secondText}>
            {'LOG_IN_TO_YOUR_EXISTANCE_ACCOUNT_OF_LIQUIDFUNDS'}
          </Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
          style={styles.KeyboardAvoidingViewContainer}>
          <View
            style={[
              styles.insideKeyboardAvoidingViewContainer,
              {
                borderColor: `${
                  isValidationErrorVisibility ? 'red' : '#05192D'
                }`,
                borderWidth: 2,
              },
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
              onChange={e => setEmail(e)}
            />
          </View>
          <View
            style={[
              styles.insideKeyboardAvoidingViewContainer,
              {
                borderColor: `${
                  isValidationErrorVisibility ? 'red' : '#05192D'
                }`,
                borderWidth: 2,
              },
            ]}>
            <Image
              resizeMode="contain"
              source={passIcon}
              style={styles.insideKeyboardAvoidingViewContainer_img}
            />
            <TextInput
              style={[
                {
                  color: 'white',
                  width: '73%',
                },
              ]}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry={passVisible}
              autoCapitalize="none"
              onChange={e => setpassword(e)}
            />
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                marginHorizontal: '5%',
                alignSelf: 'center',
              }}
              onPress={() => setPassVisible(!passVisible)}>
              <Image
                resizeMode="contain"
                source={eyeCross}
                style={[styles.insideKeyboardAvoidingViewContainer_img]}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        {isValidationErrorVisibility ? (
          <View style={styles.validationTextContainer}>
            <Text style={styles.validationTextContainerText}>{errMsg}</Text>
          </View>
        ) : (
          <></>
        )}
        <View style={styles.forgotPasswordView}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('ForgotPassword')}
            style={{color: '#6BB0F5'}}>
            <Text style={{color: '#ffff', fontFamily: 'Roboto-Black'}}>
              FORGOT_PASSWORD{' ?'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: 'blue',
            // position: 'absolute',
            // bottom: width * 0.05,
            // position: 'relative',
            alignSelf: 'center',
            // alignItems: 'flex-end',
            marginTop: height * 0.25,
            // paddingTop: height * 0.3,
          }}>
          <Pressable
            //   onPress={() => navigation.navigate('Home1')}
            style={styles.Pressable}>
            <Text style={styles.insidePressableTxt}>SIGN_IN</Text>
          </Pressable>

          <TouchableOpacity
            style={{alignSelf: 'center'}}
            //   onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Entext.DONT_HAVE_AN_ACCOUNT{' '}
              <Text style={{color: '#3CF0A0'}}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
