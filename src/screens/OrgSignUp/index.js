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
    SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import mailIcon from '../../assets/mail.png';

import passIcon from '../../assets/PassIcon.png';
import userIcon from '../../assets/userIcon.png';
import phoneIcon from '../../assets/foneIcon.png';
import flagIcon from '../../assets/flagIcon.png';

import BackHeader from '../../component/BackHeader';
import iconsBackWhite from '../../assets/backIcon.png';


const OrgSignUp = ({ navigation }) => {
    const { height, width } = useWindowDimensions();
    const [country, setCountry] = useState('Choose your Country');
    const [fullName, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [password, setPassword] = useState('');
    const [validator, setValidator] = useState(false);




    const onSubmit = () => {
        // if(email==''&&fullName==''&&phoneNumber==0,password=='')
        // {
        //   setValidator(true)
        // }
        if (
            (email == '' && fullName == '' && phoneNumber == 0,
                password == '',
                country == 'Choose your Country')
        ) {
            setValidator(true);
        } else {
            // navigation.navigate('Home1');
        }
    };
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                animated={true}
                // eslint-disable-next-line prettier/prettier
                // eslint-disable-next-line prettier/prettier
                translucent={false}
                backgroundColor="#05192D"
                barStyle="light-content"
            />
            <ScrollView>
                <BackHeader
                    img={require('../../assets/backIcon.png')}
                    handleBackArrow={() => navigation.goBack()}

                    title="ORG Sign Up"
                />

                <View style={styles.secondaryMainContainer}>
                    <KeyboardAvoidingView
                        behavior="position"
                        style={styles.KeyboardAvoidingViewContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.firstText}>Let's Get Some Blessing!</Text>
                            <Text style={styles.secondText}>
                                Create a new account
                            </Text>
                        </View>
                        <View
                            style={[
                                {
                                    borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                onChange={text => setFullname(text)}
                                style={{
                                    color: 'white',
                                    width: '100%',
                                }}
                                placeholderTextColor="white"
                                placeholder="ORG NAME"
                                autoCapitalize="none"
                                keyboardType="default"
                                autoFocus={false}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    borderColor: `${validator ? 'red' : '#05192D'}`,
                                    borderWidth: 2,
                                },
                                styles.insideKeyboardAvoidingViewContainer,
                            ]}>
                            {/* <Icon type="Entypo" name="home" color="white" /> */}
                            <Image
                                source={mailIcon}
                                style={styles.insideKeyboardAvoidingViewContainer_img}
                            />
                            <TextInput
                                onChange={text => setGender(text)}
                                style={{
                                    color: 'white',
                                    width: '100%',
                                }}
                                placeholderTextColor="white"
                                placeholder="EMAIL"
                                autoCapitalize="none"
                                keyboardType="default"
                                autoFocus={false}
                            />
                        </View>

                        <View
                            style={[
                                {
                                    borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                    borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                placeholderTextColor="white"
                                placeholder="City"
                                autoCapitalize="none"
                                autoFocus={false}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                placeholderTextColor="white"
                                placeholder="Area"
                                autoCapitalize="none"
                                autoFocus={false}
                            />
                        </View>





                    </KeyboardAvoidingView>

                    <View style={[styles.mainPressableContainer, { flexDirection: 'row', justifyContent: 'space-around', width: '95%', marginBottom: 10 }]}>
                        <Pressable
                            style={styles.Pressable}>
                            <Text style={{ color: 'white', fontFamily: 'Robotto-Bold' }}>
                                CONFIRM
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[styles.Pressable, { backgroundColor: 'red' }]}>
                            <Text style={{ color: 'white', fontFamily: 'Robotto-Bold' }}>
                                DELETE
                            </Text>
                        </Pressable>


                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default OrgSignUp;
