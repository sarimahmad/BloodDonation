/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import BackHeader from '../../component/BackHeader';
import {isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {WHITE} from '../../helper/Color';
import {getAllRequest, getAllAdmin, approveAdmin} from '../../helper/api';
import Loader from '../../component/Loader';

const AdminSignUpRequest = ({navigation}) => {
  const [state, setstate] = useState(0);
  const [data, setData] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loader, setloader] = useState(false);

  async function fetchRequests() {
    setloader(true);
    await getAllRequest().then(response => {
      if (response.data.message === 'All Requests') {
        const admins = response.data.Requests.filter(val => {
          return val.Role === 'admin';
        });
        setData(admins);
        setloader(false);
      } else {
        alert('Something went wrong try Again !');
        setloader(false);
      }
    });
  }
  async function fetchAdmins() {
    setloader(true);
    await getAllAdmin().then(response => {
      if (response.data.message === 'all admins') {
        console.log(response.data.Admin);
        setAdmins(response.data.Admin);
        setloader(false);
      } else {
        alert('Something went wrong try Again !');
        setloader(false);
      }
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async () => {};
    fetchRequests();
    fetchAdmins();

    return () => {
      console.log('This will be logged on unmount');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  const AcceptorReject = async (id, status) => {
    let data = {
      id: id,
      ReqType: 'adminSignUp',
    };
    if (status === 1) {
      await approveAdmin(data).then(response => {
        if (response.data.message === 'Admin is Approved') {
          setstate(state + 1);
          alert('Admin is Approve');
        }
      });
    } else {
      await approveAdmin(data).then(response => {
        if (response.data.message === ' admin Sign up request declined') {
          setstate(state + 1);
          alert('Admin request is declined');
        }
      });
    }
  };
  return (
    <View style={styles.wrapperView}>
      <BackHeader
        img={require('../../assets/backIcon.png')}
        handleBackArrow={() => navigation.goBack()}
        title="Admin Requests"
      />
      <View style={{flex: 0.4}}>
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
              <Text style={{color: 'white'}}>{item.FullName}</Text>
              <Text style={{color: 'white'}}>{item.Email}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => AcceptorReject(item._id, 1)}
                  style={[
                    styles.btn,
                    {
                      marginRight: 5,
                      backgroundColor: 'green',
                      width: item.accepted ? 65 : isIphoneXorAbove ? 55 : 45,
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: isIphoneXorAbove ? 14 : 10,
                      color: WHITE.dark,
                      fontWeight: '500',
                    }}>
                    {item.accepted ? 'Accepted' : 'Accept'}
                  </Text>
                </TouchableOpacity>
                {!item.accepted && (
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
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{flex: 0.6}}>
        <Text
          style={{
            textAlign: 'center',
            color: WHITE.dark,
            fontSize: 16,
            marginTop: 10,
          }}>
          Apprive Admins
        </Text>
        <FlatList
          bounces={false}
          data={admins}
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
              <Text style={{color: 'white'}}>{item.fullName}</Text>
              <Text style={{color: 'white'}}>{item.Email}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
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
                    Accepted
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {loader && <Loader loading={loader} />}
    </View>
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

export default AdminSignUpRequest;
