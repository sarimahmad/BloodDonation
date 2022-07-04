/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity, FlatList,  StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../../component/BackHeader';import {OrgDetails} from '../../Data';
import {isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {WHITE} from '../../helper/Color';
import { getallOrgReq} from '../../helper/api';
import Loader from '../../component/Loader';

const OrgReq = ({navigation}) => {
  const [loader, setloader] = useState(false);
  const [data, setData] = useState([]);
  const allOrgRequest = async ()=>{
    setloader(true);
    await getallOrgReq().then(response=>{
      if (response.data.message === 'Success-3'){
        setData(response.data.OrgRequest);
        setloader(false);
      } else {
        alert('Something Went Wrong Try Again !');
        setloader(false);
      }
      setloader(false);

    });
  };

  useEffect(() => {
    allOrgRequest();
  }, []);


  return (
    <SafeAreaView style={styles.wrapperView}>
      <BackHeader
        img={require('../../assets/backIcon.png')}
        handleBackArrow={() => navigation.goBack()}
        title="ORG SignUp Request"
      />
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
            <Text style={{color: 'white'}}>{item.OrgName}</Text>
            <Text style={{color: 'white'}}>{item.City}</Text>
    
              <TouchableOpacity
                onPress={() => !item.registered && navigation.navigate('OrgName',{
                  _id:item._id,
                  OrgName: item.OrgName,
                  email: item.Email,
                  Contact: item.Contact,
                  city: item.City,
                  area: item.Area,
                  password: item.password,
                })}
                style={[
                  styles.btn,
                  {
                    marginRight: 5,
                    backgroundColor: 'green',
                    width: 65,
                  },
                ]}>
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
    width: isIphoneXorAbove ? 55 : 45,
    height: 25,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default OrgReq;
