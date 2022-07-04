/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from './src/screens/loginScreen/Index';
import SignUp from './src/screens/SignUp';
import SignUp1 from './src/screens/SignUp1';
import OrgName from './src/screens/OrgName';
import CampingInfo from './src/screens/CampingInfo';
import MainScreen from './src/screens/MainScreen';
import AboutUs from './src/screens/AboutUs';
import FeedBack from './src/screens/FeedBack';
import PhoneNumber from './src/screens/PhoneNumber';
import DonorList from './src/screens/DonorList';
import ReceptentList from './src/screens/ReceptentList';
import CampList from './src/screens/CampList';
import Camping from './src/screens/Camping';
import OrgSignUp from './src/screens/OrgSignUp';
import OrgReq from './src/screens/OrgReq';
import OrgSignUpPage from './src/screens/OrgSignUpPage/Index';
import OrgMainScreen from './src/screens/OrgMainScreen/Index';
import OrgCampReq from './src/screens/OrgCampReq/Index';
import NewCamp from './src/screens/NewCamp/Index';
import UserMainScreen from './src/screens/UserMainScreen/Index';
import BloodDonation from './src/screens/BloodDonation/Index';
import AdminSignUpRequest from './src/screens/AdminSignUpRequest';
import Message from './src/screens/message';
import ApproveCampList from './src/screens/approvedCampList';
import forgotpassword from './src/screens/forgotpassword';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NeedBlood from './src/screens/NeedBlood/Index';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrgSignUp"
          component={OrgSignUp}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrgSignUpPage"
          component={OrgSignUpPage}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgotpassword"
          component={forgotpassword}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrgReq"
          component={OrgReq}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrgCampReq"
          component={OrgCampReq}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewCamp"
          component={NewCamp}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DonorList"
          component={DonorList}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReceptentList"
          component={ReceptentList}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CampList"
          component={CampList}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: 'black'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={MainScreen}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="Orghome"
          component={OrgMainScreen}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="UserMainScreen"
          component={UserMainScreen}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="OrgName"
          component={OrgName}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="Camping"
          component={Camping}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="CampingInfo"
          component={CampingInfo}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
       <Stack.Screen
          name="ApproveCampList"
          component={ApproveCampList}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="FeedBack"
          component={FeedBack}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="BloodDonation"
          component={BloodDonation}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="NeedBlood"
          component={NeedBlood}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="AdminSignUpRequest"
          component={AdminSignUpRequest}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="message"
          component={Message}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'black'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
