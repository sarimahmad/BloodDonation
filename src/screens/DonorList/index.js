/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity, FlatList,  StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackHeader from '../../component/BackHeader';
import {isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {WHITE} from '../../helper/Color';
import { getAllDonor, justifyDonor, deleteDonor } from '../../helper/api';
import Loader from '../../component/Loader';

const DonorList = ({ navigation }) => {

  const [data , setData] = useState([]);
  const [affect , setaffect] = useState(0);
  const [loader, setloader] = useState(false);

  const allDonors = async ()=>{
    setloader(true);
    await getAllDonor().then(response=>{
      if (response.data.message === 'Donors Record'){
        setData(response.data.donors);
        setloader(false);
      } else {
        alert('Something Went Wrong Try Again !');
        setloader(false);
      }
      setloader(false);

    });
  };

  useEffect(() => {
    allDonors();
  }, [affect]);

    const AcceptorReject = async (val, status) => {
      let data ={
        id:val,
        Justify: 'Justified'
      };
      setloader(true);
        if (status === 1) {
          await justifyDonor(data).then(response=>{
            if (response.data.message ===  'Donor Infomation Updated sucessfully'){
              setloader(false);
              alert('Donor is justified');

            } else {
              alert('Something went Wrong Try again !');
              setloader(false);
            }
          });

        } else {
          let data = {id:val}
          await deleteDonor(data).then(response=>{
            if (response.data.message ===  'The donor has been deleted saccesfully'){
              setloader(false);
              alert('Donor is Deleted Sucessfully');

            } else {
              alert('Something went Wrong Try again !');
              setloader(false);
            }
          });
        }
        setaffect(affect + 1);
      };
    return (
        <SafeAreaView style={styles.wrapperView}>
            <BackHeader
                img={require('../../assets/backIcon.png')}
                handleBackArrow={() => navigation.goBack()}

                title="Donor History"
            />
    <View style={{flex:1}}>
      <FlatList
        bounces={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => alert('Hello')}
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
            <Text style={{color: 'white', width: '20%'}}>{item.FullName}</Text>
            <Text style={{color: 'white', width: '10%'}}>{item.BloodGroup}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => AcceptorReject(item._id, 1)}
                style={[
                  styles.btn,
                  {
                    marginRight: 5,
                    backgroundColor: 'green',
                    width: isIphoneXorAbove ? 55 : 45,
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
                <TouchableOpacity
                  onPress={() => AcceptorReject(item._id, 2)}
                  style={styles.btn}>
                  <Text
                    style={{
                      fontSize: isIphoneXorAbove ? 14 : 10,
                      color: WHITE.dark,
                      fontWeight: '500',
                    }}>
                    Reject
                  </Text>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
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


export default DonorList;