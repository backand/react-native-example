import { SIGNIN_REQUEST, SIGNIN_RESOLVE, SIGNIN_REJECT, SIGNOUT } from './authTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {loading: true};
    case SIGNIN_RESOLVE:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        loaded: true});
    case SIGNIN_REJECT:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
        loaded: false});
    case SIGNOUT:
      return {};
    default:
      return state;
  }
}
