/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import BackHeader from '../../component/BackHeader';
import {isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {BLACK, RED, WHITE} from '../../helper/Color';

const Message = ({navigation}) => {
  const searchInput = useRef(null);
  const [message, setmessage] = useState('');
  const [username, setusername] = useState('User1');
  const [all_message, setall_message] = useState([]);
  const SendMessage = () => {
    let messages = all_message;
    let data = {
      message: message,
      username: username,
      value: 'sender',
    };
    messages.push(data);
    setall_message(messages);
    searchInput.current.clear();
  };

  const senderMessage = data => {
    return (
      <View
        style={{
          padding: 20,
          width: '70%',
          backgroundColor: RED.dark,
          borderTopEndRadius: 30,
          marginVertical: 15,
        }}>
        <Text
          style={{
            color: WHITE.dark,
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 5,
          }}>
          {data.username}
        </Text>
        <Text style={{color: WHITE.dark}}>{data.message}</Text>
      </View>
    );
  };

  const ReceiverMessage = data => {
    return (
      <View
        style={{
          alignSelf: 'flex-end',
          padding: 20,
          width: '70%',
          backgroundColor: RED.dark,
          borderTopStartRadius: 30,
          marginVertical: 15,
        }}>
        <Text
          style={{
            color: WHITE.dark,
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 5,
          }}>
          {data.username}
        </Text>
        <Text style={{color: WHITE.dark}}>{data.message}</Text>
      </View>
    );
  };
  return (
    <View style={styles.wrapperView}>
      <BackHeader
        img={require('../../assets/backIcon.png')}
        handleBackArrow={() => navigation.goBack()}
        title="Message"
      />
      <View style={{flex: 1}}>
        <FlatList
          data={all_message}
          keyExtractor={(item, index) => index.toString()}
          renderItem={val =>
            val.item.value === 'sender'
              ? senderMessage(val.item)
              : ReceiverMessage(val.item)
          }
        />
        <View>
          <TextInput
            ref={input => {
              searchInput.current = input;
            }}
            onChangeText={val => setmessage(val)}
            style={styles.TextInput}
            placeholder="Message"
            placeholderTextColor={BLACK.dark}
          />
          <TouchableOpacity
            onPress={() => SendMessage()}
            style={{position: 'absolute', right: 35, top: 10}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: '#05192D',
  },
  TextInput: {
    width: SCREEN.width - 50,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    paddingLeft: 10,
    marginBottom: 20,
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
