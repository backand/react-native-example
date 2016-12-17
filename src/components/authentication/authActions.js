import { SIGNIN_REQUEST, SIGNIN_RESOLVE, SIGNIN_REJECT, SIGNOUT } from './authTypes'
import backand from './../../../static/lib/backand'
import { LoginManager } from 'react-native-fbsdk'

export const getUserDetails = (force) => {
  return dispatch => {
    dispatch(request());
    backand.service.getUserDetails(response => {
      dispatch(resolve(response.data));
    },
    error => {
      dispatch(reject(error.data));
    }, force);
  };
}

export const useAnonymousAuth = () => {
  return dispatch => {
    backand.service.useAnonymousAuth(response => {
      dispatch(resolve(response.data));
    });
  };
}

export const signin = (username, password) => {
  return dispatch => {
    dispatch(request());
    backand.service.signin(username, password,
      response => {
        dispatch(resolve(response.data));
      },
      error => {
        alert('Login failed with error: ' + error.data);
        dispatch(reject(error.data));
      });
  };
}

export const socialSignin = (provider) => {
  return dispatch => {
    dispatch(request());
    backand.service.socialSignin(provider,
      response => {
        dispatch(resolve(response.data));
      },
      error => {
        alert('Login failed with error: ' + error.data);
        dispatch(reject(error.data));
      });
  };
}

export const socialSigninWithToken = (provider, token) => {
  return dispatch => {
    dispatch(request());
    backand.service.socialSigninWithToken(provider, token,
      response => {
        dispatch(resolve(response.data));
      },
      error => {
        alert('Login failed with error: ' + error.data);
        dispatch(reject(error.data));
      });
  };
}

export const signup = (email, password, confirmPassword, firstName, lastName) => {
  return dispatch => {
    dispatch(request());
    backand.service.signup(email, password, confirmPassword, firstName, lastName,
      response => {
        dispatch(resolve(response.data));
      },
      error => {
        alert('Signup failed with error: ' + error.data);
        dispatch(reject(error.data));
      });
  };
}

export const signout = () => {
  return dispatch => {
    backand.service.signout(response => {
      LoginManager.logOut();
      dispatch({type: SIGNOUT});
    });
  };
}

const request = () => {
  return {
    type: SIGNIN_REQUEST,
  }
}
const resolve = (data) => {
  return {
    type: SIGNIN_RESOLVE,
    payload: {
      data
    }
  }
}
const reject = (error) => {
  return {
    type: SIGNIN_REJECT,
    payload: {
      error
    }
  }
}
