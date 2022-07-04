/* eslint-disable no-new */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import {PermissionsAndroid, Platform} from 'react-native';
import {openSettings} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

// Promise is the Issue for the Late responce in the lat long

export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    getOneTimeLocation();
    subscribeLocationLocation();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        console.log('good');
        let data1 = await getOneTimeLocation();
        let data2 = await subscribeLocationLocation();

        console.log('COOOOrds', data1);
      } else {
        setLocationStatus('Permission Denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

export const getOneTimeLocation = async () =>
   new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log('Data ======> after 5 second ', coords);
        resolve(coords);
      },
      error => {
        reject(error.message);
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  });

export const subscribeLocationLocation = async () =>
  new Promise((resolve, reject) => {
    var watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        const coords = {
          latitude: currentLatitude,
          longitude: currentLongitude,
        };
        resolve(coords);
      },
      error => {
        reject(error.message);
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
    return watchID;
  });

