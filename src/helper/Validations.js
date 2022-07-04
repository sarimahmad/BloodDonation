const checkEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.length === 0 || reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};
const checkPassword = password => {
  if (password.length === 0 || password.length < 3) {
    return false;
  } else {
    return true;
  }
};
const checkrequired = username => {
  if (username.length === 0 || username.length < 3) {
    return false;
  } else {
    return true;
  }
};
const checkrequiredForSingleDigit = username => {
  if (username) {
    if (username.length === 0 || username.length < 0) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};
const checkrequiredForDoubleDigit = username => {
  if (username) {
    if (username.length === 2) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};


const check_Phone_Required = number => {
  if (number.length === 13 || number.length === 11) {
    return true;
  } else {
    return false;
  }
};

const CNIC_Check = number => {
  if (number.length === 13) {
    return true;
  } else {
    return false;
  }
};
const EmptyArray = array => {
  if (array.length === 0) {
    return false;
  } else {
    return true;
  }
};
export default {
  checkrequiredForSingleDigit,
  checkrequiredForDoubleDigit,
  checkEmail,
  checkPassword,
  checkrequired,
  check_Phone_Required,
  CNIC_Check,
  EmptyArray,
};
