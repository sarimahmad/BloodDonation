import {
  SET_USER,
  ALTER_USER,
  ALTER_JUST_USER,
  SET_TOKEN,
} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN, USERDETAIL, ROLE} from '../../helper/Constant';

const INITIAL_USER = {
  userDetail: '',
  userToken: '',
  role: '',
  loading: true,
};

const userReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case SET_USER:
      state = Object.assign({}, state, {
        userDetail: action.payload.user,
        userToken: action.payload.access_token,
        role: action.payload.role,
        loading: false,
      });
      // console.log(action.payload.user,action.payload.role,)
      AsyncStorage.setItem(USERDETAIL, JSON.stringify(action.payload.user));
      AsyncStorage.setItem(ROLE, JSON.stringify(action.payload.role));
      AsyncStorage.setItem(TOKEN, JSON.stringify(action.payload.access_token));
      console.log(action.payload);
      return state;

    case ALTER_USER:
      state = Object.assign({}, state, {
        userDetail: action.payload.user,
        userToken: action.payload.uid,
        loading: false,
      });
      return state;

    case ALTER_JUST_USER:
      state = Object.assign({}, state, {userDetail: action.payload.user});
      AsyncStorage.setItem(USERDETAIL, JSON.stringify(action.payload.user));
      return state;

    case SET_TOKEN:
      state = Object.assign({}, state, {userToken: action.payload.user});
      // AsyncStorage.setItem(TOKEN, JSON.stringify(action.payload));
      return state;

    default:
      return state;
  }
};

export default userReducer;
