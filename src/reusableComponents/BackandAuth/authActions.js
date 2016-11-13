import { AUTH_REQUEST, AUTH_RESOLVE, AUTH_REJECT } from './authTypes';
import axios from 'axios'
import qs from 'qs'

export const anonymousRequest = () => {
  return dispatch => {
    dispatch(resolve({
      token: {
        AnonymousToken: `2214c4be-d1b1-4023-bdfd-0d83adab8235`
      },
      details: {
        username: 'anonymous',
        name: 'anonymous user'
      }
    }));
  }
}

export const tokenRequest = ({username, password}) => {
  return dispatch => {
    dispatch(request());
    axios({
      url: 'https://api.backand.com/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        grant_type: 'password',
        appname: 'reactnativetodoexample',
        username,
        password
      })
    })
      .then(response => {
        // console.log(response.data);
        dispatch(resolve({
          token: {
            Authorization: `${response.data.token_type} ${response.data.access_token}`
          },
          details: {
            username: response.data.username,
            name: response.data.fullName,
            userId: response.data.userId
          }
        }));
      })
      .catch(error => {
        // console.log(error);
        dispatch(reject(error.response.data.error_description));
      });
  };
}

const request = () => {
  return {
    type: AUTH_REQUEST,
  }
}

const resolve = (data) => {
  return {
    type: AUTH_RESOLVE,
    payload: {
      data
    }
  }
}

const reject = (error) => {
  return {
    type: AUTH_REJECT,
    payload: {
      error
    }
  }
}
