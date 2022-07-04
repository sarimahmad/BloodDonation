/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../SignUp1/styles';
import mailIcon from '../../assets/mail.png';
import passIcon from '../../assets/PassIcon.png';
import userIcon from '../../assets/userIcon.png';
import phoneIcon from '../../assets/foneIcon.png';
import { AddRecipent } from '../../helper/api';
import ModalSelector from 'react-native-modal-selector-searchable';
import Validations from '../../helper/Validations';
import { WHITE } from '../../helper/Color';
import Loader from '../../component/Loader';


const CreatePostReceptor = ({navigation}) => {

  const [loader, setloader] = useState(false);
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [BloodGroup, setBLOODGROUP] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [PatientAge, setPatientAge] = useState('');
  const [PatientGender, setPatientGender] = useState('');
  const [PatientDisease, setPatientDisease] = useState('');

  const onSubmit = async () => {
    setloader(true);
    try {
      let temp = {
        Name: fullName,
        email: email,
        contact: phoneNumber,
        city: city.toLowerCase(),
        area: area.toLowerCase(),
        bloodGroup: BloodGroup,
        bloodQuantity: Quantity,
        patientAge: PatientAge,
        patientGender: PatientGender,
        patientDisease: PatientDisease,
        status: 'off',
      };
      if (isFormFilled()){
        await AddRecipent(temp).then(reponse=>{
          if (reponse.data.message === 'New recipent record created'){
            setloader(false);
            alert('Your Post is Created');
            navigation.goBack();
          } else {
            setloader(false);
            alert('Something went wrong try again ! ');
          }
        });
      }
      setloader(true);

    } catch (error) {
      Alert.prompt(error);
    }
  };

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
    let check_gender = Validations.checkrequired(PatientGender);
    let check_email = Validations.checkEmail(email);
    let check_PhoneNumber = Validations.check_Phone_Required(phoneNumber);
    let check_City = Validations.checkrequired(city);
    let check_Area = Validations.checkrequired(area);
    let check_BloodGroup = Validations.checkrequiredForDoubleDigit(BloodGroup);
    let check_Quantity = Validations.checkrequiredForSingleDigit(Quantity);
    let check_Age = Validations.checkrequiredForSingleDigit(PatientAge);
    let check_Disease = Validations.checkrequiredForSingleDigit(PatientDisease);

    if (
      check_fullName &&
      check_email &&
      check_gender &&
      check_PhoneNumber &&
      check_City &&
      check_Area &&
      check_BloodGroup &&
      check_Quantity &&
      check_Disease &&
      check_Age

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
    else if (!check_Age) {
      alert('Patient Age is Invalid');
    }
    else if (!check_Disease) {
      alert('Patient Disease is Invalid');
    }

    return false;
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
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
                onChangeText={text => setPatientAge(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                placeholderTextColor="white"
                placeholder="Patient Age"
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
              data={genderNo}
              search={true}
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              style={{width: '60%'}}
              onChange={option => {
                option.label === 'None' ? setPatientGender('')  : setPatientGender(option.label);
              }}>
              <TextInput
                style={{color: WHITE.dark}}
                editable={false}
                placeholderTextColor={WHITE.dark}
                placeholder="Patient Gender"
                value={PatientGender}
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
                onChangeText={text => setPatientDisease(text)}
                style={{
                  color: 'white',
                  width: '100%',
                }}
                placeholderTextColor="white"
                placeholder="Patient Disease"
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

export default CreatePostReceptor;
