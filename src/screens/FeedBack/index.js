import { StyleSheet, Text, SafeAreaView, View, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'

import BackHeader from '../../component/BackHeader';

const FeedBack = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} translucent={false} backgroundColor='#05192D' barStyle='light-content' />
            <BackHeader
                title="FeedBack"
                img={require('../../assets/backIcon.png')}
                handleBackArrow={() => navigation.goBack()}
            />
            <View style={{ alignSelf: 'center', width: '90%', alignItems: 'center', justifyContent: 'center', marginVertical: 20, height: '20%', backgroundColor: 'gray', borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>FeedBack</Text>
            </View>
            <View style={{ alignSelf: 'center', width: '90%', alignItems: 'center', justifyContent: 'center', marginVertical: 20, height: '20%', backgroundColor: 'gray', borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>FeedBack</Text>
            </View>
            <View style={{ alignSelf: 'center', width: '90%', alignItems: 'center', justifyContent: 'center', marginVertical: 20, height: '20%', backgroundColor: 'gray', borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>FeedBack</Text>
            </View>
        </SafeAreaView>
    )
}

export default FeedBack