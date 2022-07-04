/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import BackHeader from '../../component/BackHeader';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const UserMainScreen = ({ navigation }) => {
  const [isTopbarShown, setisTopbarShown] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor="#05192D"
        barStyle="light-content"
      />

      <BackHeader
        img={require('../../assets/open.png')}
        handleBackArrow={() => { setisTopbarShown(!isTopbarShown) }}
        title="Camping"
      />
      {isTopbarShown ? (
        <View
          style={{
            backgroundColor: '#213147',
            alignSelf: 'center',
            width: '90%',
            paddingLeft: 10,
            marginBottom: '5%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('home')}
            style={{ marginVertical: '1%' }}>
            <Text style={{ color: 'white' }}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{ marginVertical: '1%' }}>
            <Text style={{ color: 'white' }}>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FeedBack')}
            style={{ marginVertical: '1%' }}>
            <Text style={{ color: 'white' }}>FEEDBACKS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApproveCampList')}
            style={{ marginVertical: '1%' }}>
            <Text style={{ color: 'white' }}>CAMPS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login'),
              AsyncStorage.clear()
            }}
            style={{ marginVertical: '1%' }}>
            <Text style={{ color: 'white' }}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      <View
        style={{
          padding: 5,
          backgroundColor: '#213147',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View style={{ width: '100%', marginTop: 20, alignSelf: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BloodDonation')}
            style={{
              backgroundColor: '#47F1A5',
              justifyContent: 'center',
              width: '45%',
              paddingVertical: 30,
              marginVertical: 10,
              alignSelf: 'center',
            }}>
            <Text style={{ textAlign: 'center' }}>Donate Blood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NeedBlood')}
            style={{
              backgroundColor: '#47F1A5',
              justifyContent: 'center',
              width: '45%',
              paddingVertical: 30,
              marginVertical: 10,
              alignSelf: 'center',
            }}>
            <Text style={{ textAlign: 'center' }}>Need Blood</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserMainScreen;
