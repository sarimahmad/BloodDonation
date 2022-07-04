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
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../SignUp1/styles';
import mailIcon from '../../assets/mail.png';
import passIcon from '../../assets/PassIcon.png';
import userIcon from '../../assets/userIcon.png';
import phoneIcon from '../../assets/foneIcon.png';
import { AddDonor } from '../../helper/api';
import Loader from '../../component/Loader';
import ModalSelector from 'react-native-modal-selector-searchable';
import Validations from '../../helper/Validations';
import { WHITE } from '../../helper/Color';

const CreatePostDonar = ({navigation}) => {
  const [loader, setloader] = useState(false);
  const [fullName, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [BloodGroup, setBLOODGROUP] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Mh, setMh] = useState('');
  const [auth, setauth] = useState(false);
  const [form, setform] = useState(false);
  const [genderNo, setgederNo] = useState([
    {key: 1, label: 'None'},
    {key: 2, label: 'MALE'},
    {key: 3, label: 'FEMALE'},

  ]);
  const [group, setgroup] = useState([
    {key: 1, label: 'None'},
    {key: 2, label: 'A+'},
    {key: 3, label: 'A-'},
    {key: 4, label: 'B+'},
    {key: 5, label: 'B-'},
  ]);
  const  isFormFilled = ()=>  {
    let check_fullName = Validations.checkrequired(fullName);
    let check_gender = Validations.checkrequired(gender);
    let check_email = Validations.checkEmail(email);
    let check_PhoneNumber = Validations.check_Phone_Required(phoneNumber);
    let check_City = Validations.checkrequired(city);
    let check_Area = Validations.checkrequired(area);
    let check_BloodGroup = Validations.checkrequiredForDoubleDigit(BloodGroup);
    let check_Quantity = Validations.checkrequired(Quantity);


    if (
      check_fullName &&
      check_email &&
      check_gender &&
      check_PhoneNumber &&
      check_City &&
      check_Area &&
      check_BloodGroup &&
      check_Quantity

    ) {
      return true;
    }
    if (!check_email) {
      alert('Your Email is Invalid');
    } else if (!check_fullName) {
      alert('Your Name is Invalid');
    } else if (!check_gender) {
      alert('Your Gender is Invalid');
    }
    else if (!check_City) {
      alert('Your City is Invalid');
    }
    else if (!check_Area) {
      alert('Your Area is Invalid');
    }
    else if (!check_BloodGroup) {
      alert('Your Blood Group is Invalid');
    }
    else if (!check_Quantity) {
      alert('Your Quantity is Invalid');
    }
    else if (!check_PhoneNumber) {
      alert('Your Number is Invalid');
    }

    return false;
  };






  const onSubmit = async () => {
    setloader(true);
    try {
      let temp = {
        Name: fullName,
        gender: gender,
        email: email,
        contact: phoneNumber,
        city: city.toLowerCase(),
        area: area.toLowerCase(),
        bloodGroup: BloodGroup,
        bloodQuantity: Quantity,
        medicalHistory: Mh,
        pickAndDrop: false,
      };
      console.log(temp);
      if (isFormFilled()){
        await AddDonor(temp).then(reponse=>{
          if (reponse.data.message === 'Donation post created'){
            setloader(false);
            alert('Your Post is Created');
            navigation.goBack();
          } else {
            setloader(false);
            alert('Something went wrong try again ! ');
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
      {form ? (
        <ScrollView>
          <View style={styles.secondaryMainContainer}>
            <KeyboardAvoidingView
              style={styles.KeyboardAvoidingViewContainer}>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={userIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
                <TextInput
                  onChangeText={text => setFullname(text)}
                  style={{
                    color: 'white',
                    width: '100%',
                  }}
                  placeholderTextColor="white"
                  placeholder="FullName"
                  autoCapitalize="none"
                  keyboardType="default"
                  autoFocus={false}
                />
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={userIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
              <ModalSelector
              data={genderNo}
              search={true}
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              style={{width: '60%'}}
              onChange={option => {
                option.label === 'None' ? setGender('')  : setGender(option.label);
              }}>
              <TextInput
                style={{color: WHITE.dark}}
                editable={false}
                placeholderTextColor={WHITE.dark}
                placeholder="Gender"
                value={gender}
              />
            </ModalSelector>
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
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
                  placeholder="Email Address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={phoneIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
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
                  autoFocus={false}
                />
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={passIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
                <TextInput
                  onChangeText={text => setCity(text)}
                  style={{
                    color: 'white',
                    width: '100%',
                  }}
                  placeholderTextColor="white"
                  placeholder="City"
                  autoCapitalize="none"
                  autoFocus={false}
                />
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={passIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
                <TextInput
                  onChangeText={text => setArea(text)}
                  style={{
                    color: 'white',
                    width: '100%',
                  }}
                  placeholderTextColor="white"
                  placeholder="Area"
                  autoCapitalize="none"
                  autoFocus={false}
                />
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={passIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
                <ModalSelector
                  data={group}
                  search={true}
                  supportedOrientations={['landscape']}
                  accessible={true}
                  scrollViewAccessibilityLabel={'Scrollable options'}
                  cancelButtonAccessibilityLabel={'Cancel Button'}
                  style={{width: '60%'}}
                  onChange={option => {
                    option.label === 'None' ? setBLOODGROUP('')  : setBLOODGROUP(option.label);
                  }}>
              <TextInput
                style={{color:WHITE.dark}}
                editable={false}
                placeholderTextColor={WHITE.dark}
                placeholder="Blood Group"
                value={BloodGroup}
              />
            </ModalSelector>
              </View>
              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={passIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
                <TextInput
                  onChangeText={text => setQuantity(text)}
                  style={{
                    color: 'white',
                    width: '100%',
                  }}
                  placeholderTextColor="white"
                  placeholder="Quantity"
                  autoCapitalize="none"
                  autoFocus={false}
                />
              </View>

              <View
                style={[
                  {
                    borderWidth: 2,
                  },
                  styles.insideKeyboardAvoidingViewContainer,
                ]}>
                <Image
                  source={passIcon}
                  style={styles.insideKeyboardAvoidingViewContainer_img}
                />
                <TextInput
                  onChangeText={text => setMh(text)}
                  style={{
                    color: 'white',
                    width: '100%',
                  }}
                  placeholderTextColor="white"
                  placeholder="Medical History"
                  autoCapitalize="none"
                  autoFocus={false}
                />
              </View>
            </KeyboardAvoidingView>

            <View
              style={[
                styles.mainPressableContainer,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '95%',
                  marginBottom: 10,
                },
              ]}>
              <Pressable onPress={() => onSubmit()} style={styles.Pressable}>
                <Text style={{color: 'white', fontFamily: 'Robotto-Bold'}}>
                  CONFIRM
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      ) : (
        <>
          {!auth ? (
            <View style={{backgroundColor: 'gray'}}>
              <View
                style={{
                  width: '95%',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: '25%',
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  When did you donate blood Last Time its more than 3 months
                </Text>
                <Text
                  onPress={() => {
                    setauth(false);
                    setform(true);
                  }}
                  style={{
                    color: 'white',
                    left: 5,
                    marginVertical: '1%',
                    width: '98%',
                  }}>
                  Yes
                </Text>
                <Text
                  onPress={() => setauth(true)}
                  style={{
                    color: 'white',
                    left: 5,
                    marginVertical: '1%',
                    width: '98%',
                  }}>
                  No
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    padding: 5,
                    alignSelf: 'flex-end',
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <Text style={{color: 'white'}}>Sorry You can't give Blood</Text>
            </>
          )}
        </>
      )}
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};

export default CreatePostDonar;
