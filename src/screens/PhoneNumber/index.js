import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import BackHeader from '../../component/BackHeader';

const PhoneNumber = () => {
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
                handleBackArrow={() => navigation.goback()}

                title="Phone Number"
            />
            <View style={{ alignSelf: 'center', width: '90%', backgroundColor: '#213147', marginTop: '30%', paddingHorizontal: '5%', borderRadius: 10 }}>
                <TextInput placeholder='+44 209-344578' placeholderTextColor={'white'} style={{ width: '100%' }} />
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginRight: '20%', marginTop: '10%', backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, width: '30%' }}>
                <Text style={{ color: 'white' }}>Edit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PhoneNumber