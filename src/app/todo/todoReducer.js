import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS_REQUEST, FETCH_TODOS_RESOLVE, FETCH_TODOS_REJECT, TODOS_LOGOUT } from './todoTypes';
import { Map } from 'immutable';

export default (state = Map({}), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.merge({loading: true});
    case FETCH_TODOS_RESOLVE:
      return state.merge({loading: false, data: action.payload.data, loaded: true});
    case FETCH_TODOS_REJECT:
      return state.merge({loading: false, error: action.payload.error, loaded: false});
    case TODOS_LOGOUT:
      return Map({});
    default:
      return state;
  }
}

// case ADD_TODO:
//         return state;
// case TOGGLE_TODO:
//         return state;
