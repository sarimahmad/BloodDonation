/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import BackHeader from '../../component/BackHeader';
import styles from './styles';

const MainScreen = ({navigation, route}) => {
  const [isTopbarShown, setisTopbarShown] = useState(false);
  const [role, setrole] = useState('false');

  function fetchRole(){
    const role = route.params.role;
    console.log(role);
    setrole(role);
  }
  useEffect(() => {
    fetchRole();
    return () => {
      console.log("This will be logged on unmount");
    }

  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor="#05192D"
        barStyle="light-content"
      />

      <BackHeader
        img={require('../../assets/open.png')}
        handleBackArrow={() => setisTopbarShown(!isTopbarShown)}
        title="DASHBOARD"
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
            style={{marginVertical: '1%'}}>
            <Text style={{color: 'white'}}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{marginVertical: '1%'}}>
            <Text style={{color: 'white'}}>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FeedBack')}
            style={{marginVertical: '1%'}}>
            <Text style={{color: 'white'}}>FEEDBACKS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApproveCampList')}
            style={{marginVertical: '1%'}}>
            <Text style={{color: 'white'}}>CAMPS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
              navigation.navigate('Login');}}
            style={{marginVertical: '1%'}}>
            <Text style={{color: 'white'}}>LOGOUT</Text>
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
        {role === 'superAdmin' ? (
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              justifyContent: 'center',
              marginTop: 20,
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AdminSignUpRequest')}
              style={{
                backgroundColor: '#47F1A5',
                justifyContent: 'center',
                width: '80%',
                paddingVertical: 30,
                alignSelf: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Admin SignUp Requests</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            marginTop: 20,
            alignSelf: 'center',
            marginBottom: 20
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DonorList')}
            style={{
              backgroundColor: '#47F1A5',
              justifyContent: 'center',
              width: '40%',
              paddingVertical: 30,
            }}>
            <Text style={{textAlign: 'center'}}>DONORS LIST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceptentList')}
            style={{
              backgroundColor: '#47F1A5',
              justifyContent: 'center',
              width: '40%',
              paddingVertical: 20,
            }}>
            <Text style={{textAlign: 'center'}}>RECEPTENT LIST</Text>
          </TouchableOpacity>
        </View>
        {role === 'admin' ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('OrgReq')}
                style={{
                  backgroundColor: '#47F1A5',
                  justifyContent: 'center',
                  width: '40%',
                  paddingVertical: 30,
                }}>
                <Text style={{textAlign: 'center'}}>ORG SIGNUP REQUEST</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('CampList')}
                style={{
                  backgroundColor: '#47F1A5',
                  justifyContent: 'center',
                  width: '40%',
                  paddingVertical: 20,
                }}>
                <Text style={{textAlign: 'center'}}>ORG CAMPING REQUEST</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'center',
                marginTop: 20,
                alignSelf: 'center',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Camping')}
                style={{
                  backgroundColor: '#47F1A5',
                  justifyContent: 'center',
                  width: '80%',
                  paddingVertical: 30,
                  alignSelf: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>CAMPING</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
