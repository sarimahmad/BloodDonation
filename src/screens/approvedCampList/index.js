/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../../component/BackHeader';
import { OrgCamping } from '../../Data';
import { isIphoneXorAbove, SCREEN } from '../../helper/Constant';
import { WHITE } from '../../helper/Color';
import { AllCamps } from '../../helper/api';
import Loader from '../../component/Loader';

const ApproveCampList = ({ navigation , route}) => {
  const [data, setData] = useState([]);
  const [status, setstatus] = useState(0);
  const [loader, setloader] = useState(false);

  const allCamp = async () => {
    setloader(true);
    await AllCamps().then(response => {

      if (response.data.message === 'Data of the camps') {
        setData(response.data.campss);
        setloader(false);
      } else {
        alert('Something Went Wrong Try Again !');
        setloader(false);
      }
      setloader(false);

    });
  };


  useEffect(() => {
    let val = route.params;
    val = val ? 1 : 0
    setstatus(val);
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
        <Text style={{ color: 'white', width: '30%' }}>VENUE</Text>
        <Text style={{ color: 'white', width: '30%' }}>ORGNAME</Text>
        <Text style={{ color: 'white' }}>authorized</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          bounces={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CampingInfo', {
                ID: item._id,
                title: item.Title,
                Organization: item.Organizers,
                Venue: item.Vanue,
                Date: item.Date,
                Time: item.Time,
                Status: status,
              })}
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
              <Text style={{ color: 'white', width: '30%' }}>{item.Vanue}</Text>
              <Text style={{ color: 'white', width: '30%' }}>{item.Title}</Text>
              <Text
                style={{
                  fontSize: isIphoneXorAbove ? 14 : 10,
                  color: WHITE.dark,
                  fontWeight: '500',
                }}>
                {item.Date}
              </Text>


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
    width: 65,
    height: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',

  },
});


export default ApproveCampList;
