import { AUTH_REQUEST, AUTH_RESOLVE, AUTH_REJECT } from './authTypes';
import { Map } from 'immutable';

export default (state = Map({}), action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Map({loading: true});
    case AUTH_RESOLVE:
      return state.merge({loading: false, data: action.payload.data, loaded: true});
    case AUTH_REJECT:
      return state.merge({loading: false, error: action.payload.error, loaded: false});
    default:
      return state;
  }
}
