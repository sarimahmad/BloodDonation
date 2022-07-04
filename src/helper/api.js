import axios from 'axios';
import Server from './Server';

export async function SignUpform(data) {
  var config = {
    method: 'post',
    url: `${Server}/auth/signup/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function OrgSignUpForm(data) {
  var config = {
    method: 'post',
    url: `${Server}/org/orgsignUp/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function LoginForm(data) {
  var config = {
    method: 'post',
    url: `${Server}/auth/signin/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function getAllRequest() {
  var config = {
    method: 'get',
    url: `${Server}/requests/gettingRequests/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function getAllAdmin() {
  var config = {
    method: 'get',
    url: `${Server}/auth/getadminlist/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function approveAdmin(data) {
  var config = {
    method: 'post',
    url: `${Server}/requests/adminreqApproval/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function RejectApi(data) {
  var config = {
    method: 'delete',
    url: `${Server}/requests/requestdeclineb/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function getAllDonor() {
  var config = {
    method: 'get',
    url: `${Server}/donorRec/getDonorRec`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function addDonor(data) {
  var config = {
    method: 'post',
    url: `${Server}/donorRec/newDonor/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function justifyDonor(data) {
  var config = {
    method: 'put',
    url: `${Server}/donorRec/justifying/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function deleteDonor(data) {
  var config = {
    method: 'delete',
    url: `${Server}/donorRec/deletdonorrec/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function getAllRecipent() {
  var config = {
    method: 'get',
    url: `${Server}/recipents/getrecipentRec/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function addRecipent(data) {
  var config = {
    method: 'post',
    url: `${Server}/recipents/newRecipent/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function justifyRecipent(data) {
  var config = {
    method: 'put',
    url: `${Server}/recipents/Justifybutton/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function deleteRecipent(data) {
  var config = {
    method: 'delete',
    url: `${Server}/recipents/deleteRRec/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function getallOrgReq(data) {
  var config = {
    method: 'get',
    url: `${Server}/requests/gettingOrgReq`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function OrgApprvalReq(data) {
  var config = {
    method: 'post',
    url: `${Server}/requests/orgreqApproval`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function AddDonor(data) {
  var config = {
    method: 'post',
    url: `${Server}/donorRec/newDonor`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function DonorSearchForRecipents(data) {
  var config = {
    method: 'put',
    url: `${Server}/recipents/donors-search-result`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function AddRecipent(data) {
  var config = {
    method: 'post',
    url: `${Server}/recipents/newRecipent/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function RecipentforDonorSearch(data) {
  var config = {
    method: 'put',
    url: `${Server}/donorRec/search-result-recipents/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function OrgCampingRequest(data) {
  var config = {
    method: 'post',
    url: `${Server}/requests/postingReq/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function AllOrgCampingRequest() {
  var config = {
    method: 'get',
    url: `${Server}/requests/gettingcampReq/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ApproveOrgCampingReq(data) {
  var config = {
    method: 'post',
    url: `${Server}/requests/campreqApproval/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function DeleteOrgCampingReq(data) {
  var config = {
    method: 'get',
    url: `${Server}/camping/deleteCamp/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function AllCamps() {
  var config = {
    method: 'get',
    url: `${Server}/camping/existingCamps/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function AddCampbyAdmin(data) {
  var config = {
    method: 'post',
    url: `${Server}/camping/newCamp/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}