/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../component/BackHeader';
import styles from './styles';

const Camping = ({navigation}) => {
  const [isTopbarShown, setisTopbarShown] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor="#05192D"
        barStyle="light-content"
      />

      <BackHeader
        img={require('../../assets/backIcon.png')}
        handleBackArrow={() => navigation.goBack()}
        title="Camping"
      />

      <View
        style={{
          padding: 5,
          backgroundColor: '#213147',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View style={{width: '100%', marginTop: 20, alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewCamp')}
            style={{
              backgroundColor: '#47F1A5',
              justifyContent: 'center',
              width: '45%',
              paddingVertical: 30,
              marginVertical: 10,
              alignSelf: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>New Camp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApproveCampList',{status:1})}
            style={{
              backgroundColor: '#47F1A5',
              justifyContent: 'center',
              width: '45%',
              paddingVertical: 30,
              marginVertical: 10,
              alignSelf: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Existing Camp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Camping;
