/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  useWindowDimensions,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Modal
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import mailIcon from '../../assets/mail.png';
import { SignUpform, OrgName, OrgSignUpForm } from '../../helper/api';
import Validations from '../../helper/Validations';
import passIcon from '../../assets/PassIcon.png';
import userIcon from '../../assets/userIcon.png';
import phoneIcon from '../../assets/foneIcon.png';
import BackHeader from '../../component/BackHeader';
import Loader from '../../component/Loader';

import { isIphoneXorAbove, SCREEN } from '../../helper/Constant';
import PhoneNumber from '../PhoneNumber';
let obj = {};

const OrgSignUpPage = ({navigation}) => {
  const [loader, setloader] = useState(false);
  const [OrgName, setOrgName] = useState('');
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [validator, setValidator] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [role, setRole] = useState('user');


  const  isFormFilled1 = ()=>  {
    let check_fullName = Validations.checkrequired(fullName);
    let check_email = Validations.checkEmail(email);
    let check_password = Validations.checkPassword(password);
    let check_role = Validations.checkPassword(role);

    if (
      check_fullName &&
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
    else if (!check_fullName) {
      alert('Invalid Full Name');
    }
    else if (password !== conPassword){
      alert('Password does not Match')
    }

    return false;
  };
  const  isFormFilled2 = ()=>  {
    let check_OrgName = Validations.checkrequired(OrgName);
    let check_email = Validations.checkEmail(email);
    let check_password = Validations.checkPassword(password);
    let check_role = Validations.checkPassword(role);
    let check_Number = Validations.check_Phone_Required(phoneNumber);
    let check_City = Validations.checkrequired(city);
    let check_Area = Validations.checkrequired(area);





    if (
      check_OrgName &&
      check_email &&
      check_password &&
      check_role &&
      check_Area &&
      check_City &&
      check_Number
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
    else if (!check_OrgName) {
      alert('Invalid Full Name');
    }
    else if (!check_Area) {
      alert('Invalid Area');
    }
    else if (!check_City) {
      alert('Invalid City');
    }
    else if (!check_Number) {
      alert('Invalid Number');
    }
    else if (password !== conPassword){
      alert('Password does not Match')
    }

    return false;
  };



  const onSubmit = async () => {
      setloader(true);
      let temp = {
        orgName: OrgName,
        email: email,
        contact: phoneNumber,
        city: city,
        area: area,
        password: password,
        confirmPassword: conPassword,
        Role: 'Organization',
        ReqType: 'OrgReq',
      };
      let temp2 = {
        fullname: fullName,
        email: email,
        password: password,
        confirm: conPassword,
        role: role,
      }

      if (role === 'user' || role === 'admin'){
        if (isFormFilled1()){
          await SignUpform(temp2).then(response=>{
            if (response.data.message === 'Your account has been registered successfully'){
              setloader(false);
              alert('Your Account Created Sucessfully, Login !');
              navigation.goBack();
            } else if (response.data.message === 'Admin signUp request sent please wait for apporval!'){
              setloader(false);
              alert('Request it gone to SuperAdmin. You can Login after Approval');
              navigation.goBack();
            } else {
              setloader(false);
              alert('Something went wrong please add right Credentials');
            }
          })
        }
      } else {
        if (isFormFilled2()){
          await OrgSignUpForm(temp).then(response=>{
            if (response.data.message === 'Orgazniation Registeration Request Sent to Admin'){
              setloader(false);
              alert('Orgazniation Registeration Request Sent to Admin');
              navigation.goBack();
            } else {
              alert('Something went wrong please Try again !');
              setloader(false);
            }
          })
        }
      }
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
      <ScrollView>
        <BackHeader
          img={require('../../assets/backIcon.png')}
          handleBackArrow={() => navigation.goBack()}
          title="ORG Sign Up"
        />

        <View style={styles.secondaryMainContainer}>
          <KeyboardAvoidingView
            behavior="position"
            style={styles.KeyboardAvoidingViewContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.firstText}>Let's Get Some Blessing!</Text>
              <Text style={styles.secondText}>Create a new account</Text>
            </View>
            <View
              style={[
                {
                  borderColor: `${validator ? 'red' : '#05192D'}`,
                  borderWidth: 2,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              {/* <Icon type="Entypo" name="home" color="white" /> */}
              <Image
                source={userIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                onChangeText={(text) => (role === 'user' || role === 'admin')  ? setfullName(text) : setOrgName(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                placeholderTextColor="white"
                placeholder= {(role === 'user' || role === 'admin') ? 'FULL NAME' : 'ORG NAME'}
                autoCapitalize="none"
                keyboardType="default"
                autoFocus={false}
              />
            </View>
            <View
              style={[
                {
                  borderColor: `${validator ? 'red' : '#05192D'}`,
                  borderWidth: 2,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              {/* <Icon type="Entypo" name="home" color="white" /> */}
              <Image
                source={mailIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                onChangeText={text => setEmail(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                placeholderTextColor="white"
                placeholder="EMAIL"
                autoCapitalize="none"
                keyboardType="default"
                autoFocus={false}
              />
            </View>


         { role === 'organization' &&  <><View
                style={[
                  {
                    borderColor: `${validator ? 'red' : '#05192D'}`,
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                {/* <Icon type="Entypo" name="home" color="white" /> */}
                <Image
                  source={phoneIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img} />
                <TextInput
                  onChangeText={text => setPhoneNumber(text)}
                  style={{
                    color: 'white',
                    width: '100%',
                  }}
                  placeholderTextColor="white"
                  placeholder="Contact"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  autoFocus={false} />
              </View><View
                style={[
                  {
                    borderColor: `${validator ? 'red' : '#05192D'}`,
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                  {/* <Icon type="Entypo" name="home" color="white" /> */}
                  <Image
                    source={passIcon}
                    style={styles.insideKeyboardAvoidingViewContainer_img} />
                  <TextInput
                    onChangeText={text => setCity(text)}
                    style={{
                      color: 'white',
                      width: '100%',
                    }}
                    placeholderTextColor="white"
                    placeholder="City"
                    autoCapitalize="none"
                    autoFocus={false} />
                </View><View
                  style={[
                    {
                      borderColor: `${validator ? 'red' : '#05192D'}`,
                      borderWidth: 2,
                    },
                    styles.insideKeyboardAvoidingViewContainer,
                  ]}>
                  {/* <Icon type="Entypo" name="home" color="white" /> */}
                  <Image
                    source={passIcon}
                    style={styles.insideKeyboardAvoidingViewContainer_img} />
                  <TextInput
                    onChangeText={text => setArea(text)}
                    style={{
                      color: 'white',
                      width: '100%',
                    }}
                    placeholderTextColor="white"
                    placeholder="Area"
                    autoCapitalize="none"
                    autoFocus={false} />
                </View></>
            }
            <View
              style={[
                {
                  borderColor: `${validator ? 'red' : '#05192D'}`,
                  borderWidth: 2,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              <Image
                source={passIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                onChangeText={text => setPassword(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                placeholderTextColor="white"
                placeholder="Password"
                autoCapitalize="none"
                autoFocus={false}
                secureTextEntry={true}
              />
            </View>
            <View
              style={[
                {
                  borderColor: `${validator ? 'red' : '#05192D'}`,
                  borderWidth: 2,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              {/* <Icon type="Entypo" name="home" color="white" /> */}
              <Image
                source={passIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                onChangeText={text => setConPassword(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                placeholderTextColor="white"
                placeholder="Confirm Password"
                autoCapitalize="none"
                secureTextEntry={true}
                autoFocus={false}
              />
            </View>
          </KeyboardAvoidingView>


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              width: SCREEN.width - 64,
              height: 50,
              marginTop: '3%',
            }}>
            <TouchableOpacity
              onPress={() => setRole('user')}
              style={{
                width: isIphoneXorAbove ? '30%' : '20%',
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
                width: isIphoneXorAbove ? '30%' : '20%',
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
                width: isIphoneXorAbove ? '30%' : '20%',
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

          </View>


          <View
            style={[
              styles.mainPressableContainer,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                width: '95%',
                marginBottom: 10,
              },
            ]}>
            <Pressable
              onPress={() => onSubmit()}
              style={[styles.Pressable, {backgroundColor: 'red'}]}>
              <Text style={{color: 'white', fontFamily: 'Robotto-Bold'}}>
                Submit
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default OrgSignUpPage;
