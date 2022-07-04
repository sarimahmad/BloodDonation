/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity, FlatList,  StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../../component/BackHeader';
import {OrgCamping} from '../../Data';
import {isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {WHITE} from '../../helper/Color';
import { AllOrgCampingRequest } from '../../helper/api';
import Loader from '../../component/Loader';

const CampList = ({navigation}) => {
    const [data , setData] = useState(OrgCamping)
    const [loader, setloader] = useState(false);
    const allCamp = async ()=>{
      setloader(true);
      await AllOrgCampingRequest().then(response=>{
        if (response.data.message === 'Success-1'){
          setData(response.data.camps);
          setloader(false);
        } else {
          alert('Something Went Wrong Try Again !');
          setloader(false);
        }
        setloader(false);
  
      });
    };
  
    useEffect(() => {
      allCamp();
    }, []);

  return (
    <SafeAreaView style={styles.wrapperView}>
      <BackHeader
        img={require('../../assets/backIcon.png')}
        handleBackArrow={() => navigation.goBack()}
        title="Camp List"
      />
             <View
          style={{
            flexDirection: 'row',
            width: '90%',

            paddingHorizontal: 10,
            alignSelf: 'center',
            marginBottom: 20,
            justifyContent: 'space-between',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', width:'30%'}}>VENUE</Text>
          <Text style={{color: 'white', width:'30%' }}>ORGNAME</Text>
          <Text style={{color: 'white'}}>authorized</Text>
        </View>
           <View style={{flex:1}}>
      <FlatList
        bounces={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              marginVertical: 5,
              borderWidth: 1,
              borderColor: 'white',
              width: isIphoneXorAbove ? SCREEN.width - 50 : SCREEN.width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 2,
              padding: 10,
            }}>
            <Text style={{color: 'white', width: '30%'}}>{item.Body.venue}</Text>
            <Text style={{color: 'white', width: '30%'}}>{item.Body.title}</Text>
    
              <TouchableOpacity
                onPress={() =>    navigation.navigate('CampingInfo', {
                    ID:  item._id,
                    title: item.Body.title,
                    Organization: item.Body.organizers,
                    Venue: item.Body.venue,
                    Date: item.Body.date,
                    Time: item.Body.time,
                    Status:2,
                  })}
                style={styles.btn}>
                <Text
                  style={{
                    fontSize: isIphoneXorAbove ? 14 : 10,
                    color: WHITE.dark,
                    fontWeight: '500',
                  }}>
                  Accept
                </Text>
              </TouchableOpacity>
      
          </View>
        )}
      />
      </View>
      {loader && <Loader loading={loader} />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    wrapperView: {
      flex: 1,
      backgroundColor: '#05192D',
    },
    btn: {
      width:65,
      height: 25,
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'green',

    },
  });
  

export default CampList;
