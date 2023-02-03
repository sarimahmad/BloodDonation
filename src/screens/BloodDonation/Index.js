/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native';
import BackHeader from '../../component/BackHeader';
import React, {useState, useEffect} from 'react';
import styles from '../loginScreen/styles';
import WnbScreen from '../WnbScreen/Index';
import CreatePostDonar from '../CreatePostDonar/Index';
import ModalSelector from 'react-native-modal-selector-searchable';
import {SCREEN} from '../../helper/Constant';
import { DonorSearchForRecipents } from '../../helper/api';
import Loader from '../../component/Loader';
import Citties from '../../cities.json'




import {WHITE} from '../../helper/Color';
const BloodDonation = ({navigation}) => {
  const [wnb, setwnb] = useState(true);
  const [cr, setcr] = useState(false);
  const [msg, setmsg] = useState(false);
  const [bloodgroup, setbloodgroup] = useState('');
  const [area, setarea] = useState('');
  const [loader, setloader] = useState(false);
  const [city, setCity] = useState('');
  const [searchData, setsearchData] = useState([]);

 

  const [group, setgroup] = useState([
    {key: 1, label: 'None'},
    {key: 2, label: 'A+'},
    {key: 3, label: 'A-'},
    {key: 4, label: 'B+'},
    {key: 5, label: 'B-'},
    {key: 6, label: 'AB+'},
    {key: 9, label: 'AB-'},
    {key: 7, label: 'O+'},
    {key: 8, label: 'O-'},

  ]);
  const [cityData, setcityData] = useState([
    {key: 1, label: 'None'},
    {key: 2, label: 'Lahore'},
    {key: 3, label: 'Karachi'},
    {key: 4, label: 'Islambad'},
  ]);
  const [areaData, setareaData] = useState([
    {key: 1, label: 'None'},
    {key: 2, label: 'Thoker'},
    {key: 3, label: 'Johar'},
    {key: 4, label: 'I-8'},
    {key: 5, label: 'I-9'},
    {key: 6, label: 'Saddar'},
    {key: 7, label: 'Gulshan'},
  ]);
  useEffect(()=>{
    let citydata = [{key:0,label:'None'}];
    let id = 0
    Citties.map(val=>{
      citydata.push({key:++id, label:val.name})
    });
    setcityData(citydata);
    getAreas()


  },[])
  const wnbFunc = () => {
    setwnb(true);
    setcr(false);
    setmsg(false);
  };
  const crFunc = () => {
    setwnb(false);
    setcr(true);
    setmsg(false);
  };
  const msgFunc = () => {
    setwnb(false);
    setcr(false);
    setmsg(true);
  };
  
  const getAreas = async () => {
    setloader(true);
    let data = {
      status: 'Active',
      city: 'default' , 
      area: 'default',
      bloodGroup:  'default',
    }
    let areas = [{key:0, label: 'None'}];
    let id = 0;
    await DonorSearchForRecipents(data).then(response=>{
      if (response.data.message === 'Recipents lists'){
          response.data.activeDonors.map(val=>{
            areas.push({key: ++id, label: val.Area});
          });
          
          areas = uniqureArea(areas);
          setareaData(areas);
        setloader(false);
      } else {
        alert('Some thing went wrong Try Again !');
        setloader(false);
      }
    });
    setloader(false);
  };

  const Search = async () => {
    setloader(true);
    let data = {
      status: 'Active',
      city: city === ''  ? 'default' : city.toLowerCase(),
      area: area === ''  ? 'default' : area.toLowerCase(),
      bloodGroup:  bloodgroup === ''  ? 'default' : bloodgroup,
    }
    await DonorSearchForRecipents(data).then(response=>{
      if (response.data.message === 'Recipents lists'){
        setsearchData(response.data.activeDonors);
        setloader(false);
      } else {
        alert('Some thing went wrong Try Again !');
        setloader(false);
      }
    });
    setloader(false);
  };
  const uniqureArea =(data)=>{
    let arr = data.filter((value, index, self) =>
        index === self.findIndex((t) => (
         t.label === value.label
  ))
)
return arr;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor="#05192D"
        barStyle="light-content"
      />

      <BackHeader
        img={require('../../assets/backIcon.png')}
        handleBackArrow={() => navigation.goBack()}
        title="Blood Donation"
      />
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          padding: 5,
          backgroundColor: 'gray',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => wnbFunc()}
          style={[
            {
              width: '32%',
              paddingVertical: '5%',
              alignSelf: 'center',
              borderRadius: 5,
            },
            {backgroundColor: `${wnb ? 'lightgreen' : 'red'}`},
          ]}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Who Needs Blood
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => crFunc()}
          style={[
            {
              width: '32%',
              paddingVertical: '5%',
              alignSelf: 'center',
              borderRadius: 5,
            },
            {backgroundColor: `${cr ? 'lightgreen' : 'red'}`},
          ]}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Create Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => msgFunc()}
          style={[
            {
              width: '32%',
              paddingVertical: '5%',
              alignSelf: 'center',
              borderRadius: 5,
            },
            {backgroundColor: `${msg ? 'lightgreen' : 'red'}`},
          ]}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Messages
          </Text>
        </TouchableOpacity>
      </View>

      {cr ? <CreatePostDonar /> : <></>}

      {wnb ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              width: SCREEN.width - 30,
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            <ModalSelector
              data={group}
              search={true}
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              style={{width: '32%'}}
              onChange={option => {
                option.label === 'None' ? setbloodgroup('')  : setbloodgroup(option.label);
                group.map(val => {
                  if (option.label === val.label) {
                    return (val.section = true);
                  } else {
                    return (val.section = false);
                  }
                });
              }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  width: '100%',
                  color: WHITE.dark,
                  fontSize: 14,
                  borderColor: '#ccc',
                  height: 40,
                  marginTop: 20,
                }}
                editable={false}
                placeholderTextColor={WHITE.dark}
                placeholder="Group"
                value={bloodgroup}
              />
            </ModalSelector>
            <ModalSelector
              data={cityData}
              search={true}
              initValue="Select something yummy!"
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              style={{width: '32%'}}
              onChange={option => {
                option.label === 'None' ? setCity('')  : setCity(option.label);
                cityData.map(val => {
                  if (option.label === val.label) {
                    return (val.section = true);
                  } else {
                    return (val.section = false);
                  }
                });
              }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  width: '100%',
                  color: WHITE.dark,
                  fontSize: 14,
                  borderColor: '#ccc',
                  height: 40,
                  marginTop: 20,
                }}
                editable={false}
                placeholderTextColor={WHITE.dark}
                placeholder="City"
                value={city}
              />
            </ModalSelector>
            <ModalSelector
              data={areaData}
              search={true}
              initValue="Select something yummy!"
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              style={{width: '32%'}}
              onChange={option => {
                option.label === 'None' ? setarea('')  : setarea(option.label);
                areaData.map(val => {
                  if (option.label === val.label) {
                    return (val.section = true);
                  } else {
                    return (val.section = false);
                  }
                });
              }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  width: '100%',
                  color: WHITE.dark,
                  fontSize: 14,
                  borderColor: '#ccc',
                  height: 40,
                  marginTop: 20,
                }}
                editable={false}
                placeholderTextColor={WHITE.dark}
                placeholder="Area"
                value={area}
              />
            </ModalSelector>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => Search()}
              style={{
                padding: 5,
                marginRight: 12,
                marginTop: 15,
                backgroundColor: 'red',
                borderRadius: 5,
                alignSelf: 'flex-end',
              }}>
              <Text style={{color: 'white'}}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, marginTop: 10, marginBottom: 10}}>
            <FlatList
              data={searchData}
              keyExtractor={(key, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                onPress={()=> navigation.navigate('message')}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SCREEN.width - 30,
                    alignSelf: 'center',
                    backgroundColor: 'grey',
                    marginBottom: 10,
                    padding:5,
                  }}>
                  <Text style={{color: WHITE.dark, width: '24%'}}>
                    {item.FullName}
                  </Text>
                  <Text style={{color: WHITE.dark, width: '24%'}}>
                    {item.BloodGroup}
                  </Text>
                  <Text style={{color: WHITE.dark, width: '24%'}}>
                    {item.City}
                  </Text>
                  <Text
                    style={{
                      color: WHITE.dark,
                      width: '24%',
                      textAlign: 'right',
                    }}>
                    {item.Area}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      ) : null}
         {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default BloodDonation;
