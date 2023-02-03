// seperate services according to the component Requirement,
import axios from 'axios';
import { API_URL } from '../config/API_EndPoints';

const apiMiddleware = {
  postAPI: (data, endPoint) => {

    const URL = `${API_URL}` + endPoint;
    return axios.post(URL, data);
  },
  postAPIWithToken: (data, endPoint, token) => {

    const URL = `${API_URL}` + endPoint;
    return axios.post(URL, data, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    });

  },
  getDataApi: (token, endPoint) => {

    const URL = `${API_URL}` + endPoint;

    return axios.get(URL, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    });
  },
  postAPIWithToken: (data, endPoint, token) => {

    const URL = `${API_URL}` + endPoint;
    return axios.post(URL, data, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    });
  },
  getApi: (token, data, endPoint) => {

    const URL = `${API_URL}` + endPoint;
    return axios.get(URL, {
      params: data,
      headers: {
        "Authorization": "Bearer " + token,
      }
    });
  },
  loginUser: (otp_code) => {
    return axios.post(`${API_URL}`, {
      otp_code
    })
  },
  phoneVerification: (otp_code) => {
    return axios.post(`${API_URL}`, {
      otp_code
    })
  },
  registerUser: (full_name, phone_number, email) => {
    return axios.post(`${API_URL}`, {
      full_name,
      phone_number,
      email
    })
  },
  updateUserPassword: (password) => {
    return axios.post(`${API_URL}`, {
      password,
    });
  },
};

export default apiMiddleware;