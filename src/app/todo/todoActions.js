import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS_REQUEST, FETCH_TODOS_RESOLVE, FETCH_TODOS_REJECT } from './todoTypes';
import axios from 'axios'
import qs from 'qs'

const BASE_URL = `https://api.backand.com/1/objects/todos`

export const fetchTodos = ({token, details: { userId }}) => {
  return dispatch => {
    let headers = token;
    let params = `?filter=%5B%7B%20%20%20%20%22fieldName%22%3A%20%22user%22%2C%20%20%20%20%22operator%22%3A%20%22in%22%2C%20%20%20%20%22value%22%3A%20%22${userId}%22%20%20%7D%5D&exclude=metadata%26totalrows`
    dispatch(request());
    axios({
      url: `${BASE_URL}${userId ? params : ''}`,
      method: 'GET',
      headers,
    })
      .then(response => {
        // console.log(response.data);
        dispatch(resolve(response.data.data));
      })
      .catch(error=> {
        // console.log(error);
        dispatch(reject(error));
      });
  };
}


const request = () => {
  return {
    type: FETCH_TODOS_REQUEST,
  }
}

const resolve = (data) => {
  return {
    type: FETCH_TODOS_RESOLVE,
    payload: {
      data
    }
  }
}

const reject = (error) => {
  return {
    type: FETCH_TODOS_REJECT,
    payload: {
      error
    }
  }
}


export const addTodo = (user, todo) => {
  return dispatch => {
    let headers = user.token;
    let data = todo;
    // console.log(data);
    axios({
      url: `${BASE_URL}`,
      method: 'POST',
      headers,
      data,
    })
      .then(response => {
        dispatch(fetchTodos(user))
      })
      .catch(error=> {
        console.log(error);
        // dispatch(reject(error));
      });
  };
}

export const toggleTodo = (user, todo) => {
  return dispatch => {
    let headers = user.token;
    let data = todo;
    axios({
      url: `${BASE_URL}/${todo.id}`,
      method: 'PUT',
      headers,
      data,
    })
      .then(response => {
        dispatch(fetchTodos(user))
      })
      .catch(error=> {
        console.log(error);
        // dispatch(reject(error));
      });
  };
}
