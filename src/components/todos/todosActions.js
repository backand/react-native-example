import { TODOS_REQUEST, TODOS_RESOLVE, TODOS_REJECT,
  CREATE_TODOS_RESOLVE, CREATE_TODOS_REJECT,
  UPDATE_TODOS_RESOLVE, UPDATE_TODOS_REJECT,
  REMOVE_TODOS_RESOLVE, REMOVE_TODOS_REJECT } from './todosTypes'
import backand from './../../../static/lib/backand'

// add custom actions here!
export const fetchTodos = () => {
  return (dispatch, getState) => {
    const { user } = getState();
    let params = {
      sort: backand.helpers.sort.create('creationDate', backand.helpers.sort.orders.desc),
      exclude: backand.helpers.exclude.options.all,
      pageSize: 1000000,
      pageNumber: 1,
    }
    if(user.data.userId) {
      params.filter = backand.helpers.filter.create('user', backand.helpers.filter.operators.relation.in, user.data.userId);
    }
    dispatch(get_todos(params));
  };
}

// generated actions
export const get_todos = (params = {}) => {
  return dispatch => {
    dispatch({
      type: TODOS_REQUEST,
    })
    backand.service.getList('todos', params,
      response => {
        dispatch({
          type: TODOS_RESOLVE,
          payload: {
            data: response.data.data
          }
        });
      },
      error => {
        dispatch({
          type: TODOS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const create_todos = (data, params = {}) => {
  return dispatch => {
    backand.service.create('todos', data, params,
      response => {
        dispatch(fetchTodos());
      },
      error => {
        dispatch({
          type: CREATE_TODOS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const update_todos = (id, data, params = {}) => {
  return dispatch => {
    backand.service.update('todos', id, data, params,
      response => {
        dispatch(fetchTodos());
      },
      error => {
        dispatch({
          type: UPDATE_TODOS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const remove_todos = (id) => {
  return dispatch => {
    backand.service.remove('todos', id,
      response => {
        dispatch(fetchTodos());
      },
      error => {
        dispatch({
          type: REMOVE_TODOS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}
