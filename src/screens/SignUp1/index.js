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
import React, { useState, useEffect } from 'react';
import styles from './styles';
import mailIcon from '../../assets/mail.png';

import passIcon from '../../assets/PassIcon.png';
import userIcon from '../../assets/userIcon.png';
import phoneIcon from '../../assets/foneIcon.png';
import flagIcon from '../../assets/flagIcon.png';

import BackHeader from '../../component/BackHeader';
import iconsBackWhite from '../../assets/backIcon.png';


const SignUp1 = ({ route, navigation }) => {
    const { height, width } = useWindowDimensions();
    const [fullName, setFullname] = useState(FULLNAME);
    const [gender, setGender] = useState(GENDER);
    const [email, setEmail] = useState(EMAIL);
    const [phoneNumber, setPhoneNumber] = useState(CONTACT);
    const [city, setCity] = useState(CITY);
    const [area, setArea] = useState(AREA);
    const [BloodGroup, setBLOODGROUP] = useState(BLOODGROUP);
    const [Quantity, setQuantity] = useState(QUANTITY);
    const [Mh, setMh] = useState(MEDICAL_HISTORY);
    const { FULLNAME, GENDER, EMAIL, CONTACT, CITY, BLOODGROUP, QUANTITY, MEDICAL_HISTORY, AREA } = route.params;
    useEffect(() => {
        console.log(FULLNAME)
    }, [])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                animated={true}
                translucent={false}
                backgroundColor="#05192D"
                barStyle="light-content"
            />
            <ScrollView>
                <BackHeader
                    img={require('../../assets/backIcon.png')}
                    handleBackArrow={() => navigation.goBack()}

                    title="Donor History"
                />

                <View style={styles.secondaryMainContainer}>
                    <KeyboardAvoidingView
                        behavior="position"
                        style={styles.KeyboardAvoidingViewContainer}>

                        <View
                            style={[
                                {
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={FULLNAME}
                                placeholderTextColor="white"
                                placeholder='FullName'
                                autoCapitalize="none"
                                keyboardType="default"
                                autoFocus={false}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={GENDER}
                                onChange={text => setGender(text)}
                                style={{
                                    color: 'white',
                                    width: '100%',
                                }}
                                placeholderTextColor="white"
                                placeholder="Gender"
                                autoCapitalize="none"
                                keyboardType="default"
                                autoFocus={false}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
                                    borderWidth: 2,
                                },
                                styles.insideKeyboardAvoidingViewContainer,
                            ]}>
                            <Image
                                source={mailIcon}
                                style={styles.insideKeyboardAvoidingViewContainer_img}
                            />
                            <TextInput
                                value={EMAIL}
                                onChange={text => setEmail(text)}
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
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={CONTACT}
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
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={CITY}
                                onChange={text => setCity(text)}
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
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={AREA}
                                onChange={text => setArea(text)}
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
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={BLOODGROUP}
                                onChange={text => setBLOODGROUP(text)}
                                style={{
                                    color: 'white',
                                    width: '100%',
                                }}
                                placeholderTextColor="white"
                                placeholder="Blood Group"
                                autoCapitalize="none"
                                autoFocus={false}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                onChange={text => setQuantity(text)}
                                style={{
                                    color: 'white',
                                    width: '100%',
                                }}
                                value={QUANTITY}
                                placeholderTextColor="white"
                                placeholder="Quantity"
                                autoCapitalize="none"
                                autoFocus={false}
                            />
                        </View>

                        <View
                            style={[
                                {
                                    // borderColor: `${validator ? 'red' : '#05192D'}`,
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
                                value={MEDICAL_HISTORY}
                                onChange={text => setMh(text)}
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

export default SignUp1;
