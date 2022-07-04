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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import { LoginForm } from '../../helper/api';
import Loader from '../../component/Loader';
import Validations from '../../helper/Validations';
import { WHITE } from '../../helper/Color';

const Login = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const [loader, setloader] = useState(false);
  const [passVisible, setPassVisible] = useState(true);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isValidationErrorVisibility, setIsValidationErrorVisibility] = useState(false);


  const  isFormFilled = ()=>  {
      let check_email = Validations.checkEmail(email);
      let check_password = Validations.checkPassword(password);
      let check_role = Validations.checkPassword(role);

      if (
        check_email &&
        check_password && 
        check_role
      ) {
        return true;
      }
      if (!check_email) {
        alert('Your Email is Invalid');
      } else if (!check_password) {
        alert('Your Password is Invalid');
      } else if (!check_role) {
        alert('PLease Select Role');
      }
      
      return false;
    };


  const OnSubmit = async () => {
    setloader(true);
      const data = {
        email: email,
        password: password,
        role: role,
      };
    if (isFormFilled()){
      await LoginForm(data).then(response=>{  
        if (response.data.message === "Success"){
            AsyncStorage.setItem("token", response.data.token);
            setloader(false)
          if (role === 'admin') {
            navigation.navigate('home',{role:role});
          } else if (role === 'organization') {
            navigation.navigate('Orghome',{role:role});
          } else if (role === 'user') {
            navigation.navigate('UserMainScreen',{role:role});
          }
          else if (role === 'superAdmin') {
            navigation.navigate('home',{role:role});
          }
        }else if (response.data.message === 'wrong email or password!'){
          setloader(false)
          alert("Wrong Credentials")
        }else{
          setloader(false)
          alert("Something Went Wrong try again")
        }
      });
    };
    setloader(false);

  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor="#05192D"
        barStyle="light-content"
      />
      <ScrollView contentContainerStyle={{paddingBottom: height * 0.26}}>
        <BackHeader
          img={require('../../assets/backIcon.png')}
          // handleBackArrow={() => navigation.goBack()}
          title="Sign In"
        />

        <Image
          source={require('../../assets/AppLogo.png')}
          style={{height: '35%', width: '30%', alignSelf: 'center'}}
        />

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
              onChangeText={e => setEmail(e)}
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
                  // flexDirection: 'row-reverse',
                  color: 'white',
                  width: '73%',
                  // backgroundColor: 'green'
                },
              ]}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry={passVisible}
              autoCapitalize="none"
              onChangeText={e => setpassword(e)}
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
                //   source={!passVisible ? icons.eye : eyeCross}
                source={eyeCross}
                style={[styles.insideKeyboardAvoidingViewContainer_img]}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.95,
              height: '12%',
              marginTop: '3%',
            }}>
            <TouchableOpacity
              onPress={() => setRole('user')}
              style={{
                width: isIphoneXorAbove ? '23%' : '20%',
                height: '100%',
                backgroundColor: '#213147',
                padding: 5,
                borderRadius: 10,
              }}>
              {role === 'user' ? (
                <Image
                  source={require('../../assets/checked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={require('../../assets/unChecked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              )}

              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: isIphoneXorAbove ? 15 : 12,
                }}>
                User
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole('admin')}
              style={{
                width: isIphoneXorAbove ? '23%' : '20%',
                height: '100%',
                backgroundColor: '#213147',
                padding: 5,
                borderRadius: 10,
              }}>
              {role === 'admin' ? (
                <Image
                  source={require('../../assets/checked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={require('../../assets/unChecked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              )}
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: isIphoneXorAbove ? 15 : 12,
                }}>
                Admin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole('organization')}
              style={{
                width: isIphoneXorAbove ? '23%' : '20%',
                height: '100%',
                backgroundColor: '#213147',
                padding: 5,
                borderRadius: 10,
              }}>
              {role === 'organization' ? (
                <Image
                  source={require('../../assets/checked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={require('../../assets/unChecked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              )}
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: isIphoneXorAbove ? 15 : 12,
                }}>
                ORG
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole('superAdmin')}
              style={{
                width: isIphoneXorAbove ? '23%' : '21%',
                height: '100%',
                backgroundColor: '#213147',
                padding: 5,
                borderRadius: 10,
              }}>
              {role === 'superAdmin' ? (
                <Image
                  source={require('../../assets/checked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={require('../../assets/unChecked.png')}
                  style={{
                    height: '42%',
                    width: '19%',
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              )}
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: isIphoneXorAbove ? 15 : 12,
                }}>
                SAdmin
              </Text>
            </TouchableOpacity>
          </View>

          <Text
          onPress={()=> navigation.navigate('forgotpassword')}
          style={{color: WHITE.dark, fontSize: 16, textAlign:"right", margin:10}}>ForgotPassword</Text>
          <Pressable
            onPress={() => OnSubmit()}
            style={styles.Pressable}

          >
            <Text style={styles.insidePressableTxt}>SIGN_IN</Text>
          </Pressable>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('OrgSignUpPage')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              DONT HAVE AN ACCOUNT{' '}
              <Text style={{color: '#F03C48'}}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default Login;
