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
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../component/BackHeader';
import styles from './styles';
import { OrgCampingRequest } from '../../helper/api';
import Loader from '../../component/Loader';
import Validations from '../../helper/Validations';

const OrgCampReq = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const [loader, setloader] = useState(false);
  const [Venue, setVenue] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Organization, setOrganization] = useState('');
  const [title, settitle] = useState('');
  const [edit, setEdit] = useState(false);


  const  isFormFilled = ()=>  {
    let check_Venue = Validations.checkrequiredForSingleDigit(Venue);
    let check_date = Validations.checkrequired(Date);
    let check_time = Validations.checkrequired(Time);
    let check_Organization = Validations.checkrequired(Organization);
    let check_title = Validations.checkrequired(title);

    if (
      check_Venue &&
      check_date &&
      check_time &&
      check_Organization &&
      check_title

    ) {
      return true;
    }
    if (!check_Venue) {
      alert('Your Venue is Invalid');
    } else if (!check_date) {
      alert('Your Date is Invalid');
    } else if (!check_time) {
      alert('Time is Invalid');
    } else if (!check_Organization) {
      alert('Enter Organizers');
    } else if (!check_title) {
      alert('Select Title');
    }

    return false;
  };

  const onSubmit = async () => {
    try {
      let temp = {
        venue: Venue,
        date: Date,
        time: Time,
        organizers: Organization,
        title: title,
        reqType: 'campingReq',
      };
      if (isFormFilled()){
        setloader(true);
        await OrgCampingRequest(temp).then(response=>{
          if (response.data.message === 'Success'){
            setloader(false);
            alert('Camping Request sent to Admin');
            navigation.goBack();
          } else {
            alert('Some thing went wrong Try Again !');
            setloader(false);
          }
        });
      }
      setloader(false);
    } catch (error) {
      Alert.prompt(error);
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
          title="Camping Request"
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
              onChangeText={e => settitle(e)}
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              editable={edit}
              placeholderTextColor="white"
              placeholder="TITLE"
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
              onChangeText={e => setVenue(e)}
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              editable={edit}
              placeholderTextColor="white"
              placeholder="VENUE"
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
              onChangeText={e => setDate(e)}
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              editable={edit}
              placeholderTextColor="white"
              placeholder="DATE"
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
              onChangeText={e => setTime(e)}
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              editable={edit}
              placeholderTextColor="white"
              placeholder="TIME"
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
              onChangeText={e => setOrganization(e)}
              style={{
                color: 'white',
                width: '100%',
                marginLeft: width * 0.04,
              }}
              editable={edit}
              placeholderTextColor="white"
              placeholder="Organizers"
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>

        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            alignSelf: 'flex-end',
            marginTop: height * 0.02,
            justifyContent: 'space-around',
            marginRight: 40,
          }}>
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={{
              backgroundColor: '#3CF0A0',
              width: width * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: height * 0.02,
              borderRadius: 10,
            }}>
            <Text>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEdit(!edit)}
            style={{
              backgroundColor: 'red',
              width: width * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: height * 0.02,
              borderRadius: 10,
            }}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default OrgCampReq;
