/* eslint-disable no-alert */
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
import BackHeader from '../../component/BackHeader';
import styles from './styles';
import { ApproveOrgCampingReq, DeleteOrgCampingReq, RejectApi } from '../../helper/api';
import Loader from '../../component/Loader';

const SignIn = ({navigation, route}) => {
  const {Date, Organization, Time, Venue, ID,title, Status} = route.params;
  const {height, width} = useWindowDimensions();
  const [loader, setloader] = useState(false);
console.log("sta",Status);
  const onSubmit = async (status) => {
    let data = {
      id : ID,
    };
    setloader(true);
    if (status === 1){
      await ApproveOrgCampingReq(data).then(response=>{
        if (response.data.message === ' Your Camp request is Approved'){
          alert('Camp has been Approved');
          setloader(false);
          navigation.navigate('home');
        } else {
          alert('Something Went Wrong Try Again !');
          setloader(false);
        }
      });
      setloader(false);
    } else {
      await RejectApi(data).then(response=>{
        console.log(response.data);
        if (response.data.message === ' camping request declined'){
          alert('Camp Request Decline');
          setloader(false);
          navigation.navigate('home');
        } else {
          alert('Something Went Wrong Try Again !');
          setloader(false);
        }
      });
      setloader(false);
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
          img={require('../../assets/backIcon.png')}
          handleBackArrow={() => navigation.goBack()}
          title="Camping Info"
        />

        {/* <View
          style={{
            marginTop: height * 0.02,
            backgroundColor: '#213147',
            width: '80%',
            alignSelf: 'center',
            height: height * 0.1,
            justifyContent: 'center',
            borderWidth: 5,
            borderColor: '#F03C48',
            elevation: 2,
          }}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                textAlign: 'center',
                lineHeight: height * 0.03,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five
            </Text>
          </ScrollView>
        </View> */}

        <View style={{marginTop: height * 0.03}}>
        <View
            style={{
              backgroundColor: '#213147',
              width: '80%',
              height: height * 0.06,
              alignSelf: 'center',
              marginTop: height * 0.02,
              borderRadius: width * 0.02,
            }}>
            <TextInput
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              placeholderTextColor="white"
              value={title}
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>
          <View
            style={{
              backgroundColor: '#213147',
              width: '80%',
              height: height * 0.06,
              alignSelf: 'center',
              marginTop: height * 0.02,
              borderRadius: width * 0.02,
            }}>
            <TextInput
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              placeholderTextColor="white"
              value={Venue}
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>

          <View
            style={{
              backgroundColor: '#213147',
              width: '80%',
              height: height * 0.06,
              alignSelf: 'center',
              marginTop: height * 0.02,
              borderRadius: width * 0.02,
            }}>
            <TextInput
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              placeholderTextColor="white"
              value={Date}
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>

          <View
            style={{
              backgroundColor: '#213147',
              width: '80%',
              height: height * 0.06,
              alignSelf: 'center',
              marginTop: height * 0.02,
              borderRadius: width * 0.02,
            }}>
            <TextInput
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              placeholderTextColor="white"
              value={Organization}
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>

          <View
            style={{
              backgroundColor: '#213147',
              width: '80%',
              height: height * 0.06,
              alignSelf: 'center',
              marginTop: height * 0.02,
              borderRadius: width * 0.02,
            }}>
            <TextInput
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              placeholderTextColor="white"
              value={Time}
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>
        </View>

    {  Status !== 0 &&  <View
          style={{
            flexDirection: 'row',
            width: '50%',
            alignSelf: 'flex-end',
            marginTop: height * 0.02,
            justifyContent: 'space-around',
            marginRight: 40,
          }}>
     {  Status === 2 && <TouchableOpacity
            onPress={() => onSubmit(1)}
            style={{
              backgroundColor: '#3CF0A0',
              width: width * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: height * 0.02,
              borderRadius: 10,
            }}>
            <Text>ACCEPT</Text>
          </TouchableOpacity>}
          <TouchableOpacity
           onPress={() => onSubmit(2)}
            style={{
              backgroundColor: 'red',
              width: width * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: height * 0.02,
              borderRadius: 10,
            }}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>}
      </ScrollView>
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default SignIn;
