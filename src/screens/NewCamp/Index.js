/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  // eslint-disable-next-line prettier/prettier
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../component/BackHeader';
import styles from './styles';
import { AddCampbyAdmin } from '../../helper/api';
import Loader from '../../component/Loader';
import Validations from '../../helper/Validations';

const NewCamp = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const [loader, setloader] = useState(false);
  const [Venue, setVenue] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Organization, setOrganization] = useState('');
  const [title, settitle] = useState('');


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

      };
      if (isFormFilled()){
        setloader(true);
        await AddCampbyAdmin(temp).then(response=>{
          console.log(response.data.message);
          if (response.data.message === 'New camp created'){
            setloader(false);
            alert('Camp is Created');
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
          title="Camping Info"
        />



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
              placeholder={'Venue'}
              onChangeText={val=> setVenue(val)}
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
              onChangeText={val=> setDate(val)}
              placeholder={'Date'}
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
              onChangeText={val=> setTime(val)}
              placeholder={'Time'}
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
              placeholder={'Title'}
              onChangeText={val=> settitle(val)}
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
              placeholder={'Organizers'}
              onChangeText={val=> setOrganization(val)}
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
            <Text>POST</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default NewCamp;
