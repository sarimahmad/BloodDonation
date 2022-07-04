/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
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
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import mailIcon from '../../assets/mail.png';

import passIcon from '../../assets/PassIcon.png';
import userIcon from '../../assets/userIcon.png';
import phoneIcon from '../../assets/foneIcon.png';
import flagIcon from '../../assets/flagIcon.png';
import Loader from '../../component/Loader';
import BackHeader from '../../component/BackHeader';

import { OrgApprvalReq ,RejectApi } from '../../helper/api';

const OrgName = ({navigation, route}) => {
  const [loader, setloader] = useState(false);
  const {
    _id,
    Contact,
    OrgName,
    area,
    city,
    email,
    password,

  } = route.params;



  const onSubmit = async (status) => {
    let data = {
      id:_id,
      Justify: 'Justified'
    };
    setloader(true);
      if (status === 1) {
        await OrgApprvalReq(data).then(response=>{
          if (response.data.message ===  ' Your sign Up request is Approved'){
            setloader(false);
            alert('Organization Approved');

          } else {
            alert('Something went Wrong Try again !');
            setloader(false);
          }
        });

      } else {
        let data = {id:_id}
        await RejectApi(data).then(response=>{
          if (response.data.message ===  ' organization Sign up request declined'){
            setloader(false);
            alert('Organization Request is Deleted Sucessfully');

          } else {
            alert('Something went Wrong Try again !');
            setloader(false);
          }
        });
      }
    navigation.navigate("home");
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
          title="ORG Register"
        />

        <View style={styles.secondaryMainContainer}>
          <KeyboardAvoidingView
            behavior="position"
            style={styles.KeyboardAvoidingViewContainer}>
            <View
              style={[
                {
                  borderColor: `'#05192D'`,
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
                onChange={text => setfullName(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                editable={false}
                placeholderTextColor="white"
                value={OrgName}
                autoCapitalize="none"
                keyboardType="default"
                autoFocus={false}
              />
            </View>
            <View
              style={[
                {
                  borderColor: `'#05192D'`,
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
                onChange={text => setGender(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                editable={false}
                placeholderTextColor="white"
                value={email}
                autoCapitalize="none"
                keyboardType="default"
                autoFocus={false}
              />
            </View>
            <View
              style={[
                {
                  borderColor: `#05192D`,
                  borderWidth: 2,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              <Image
                source={phoneIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                onChange={text => setEmail(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                editable={false}
                placeholderTextColor="white"
                value={JSON.stringify(Contact)}
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </View>
            <View
              style={[
                {
                  borderColor: `#05192D`,
                  borderWidth: 2,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              {/* <Icon type="Entypo" name="home" color="white" /> */}
              <Image
                source={phoneIcon}
                style={styles.insideKeyboardAvoidingViewContainer_img}
              />
              <TextInput
                onChange={text => setPhoneNumber(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                editable={false}
                placeholderTextColor="white"
                value={city}

                keyboardType="default"
                autoFocus={false}
              />
            </View>
            <View
              style={[
                {
                  borderColor: '#05192D',
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
                onChange={text => setPassword(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                editable={false}
                placeholderTextColor="white"
                value={area}
                autoCapitalize="none"
                autoFocus={false}
              />
            </View>
            <View
              style={[
                {
                  borderColor: '#05192D',
                  borderWidth: 2,
                  paddingVertical: 5,
                },
                styles.insideKeyboardAvoidingViewContainer,
              ]}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Robotto-Bold',
                  marginLeft: 10,
                }}>
                {/* {registered.toString()} */}
              </Text>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.mainPressableContainer}>
            <Pressable
              onPress={() => onSubmit(1)}
              style={[styles.Pressable, {backgroundColor: '#3CF0A0'}]}>
              <Text style={{color: 'white', fontFamily: 'Robotto-Bold'}}>
                Confirm
              </Text>
            </Pressable>
            <Pressable 
             onPress={() => onSubmit(2)}
            style={styles.Pressable}>
              <Text style={{color: 'white', fontFamily: 'Robotto-Bold'}}>
                Delete
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrgName;
