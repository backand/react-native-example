import { TODOS_REQUEST, TODOS_RESOLVE, TODOS_REJECT,
  CREATE_TODOS_RESOLVE, CREATE_TODOS_REJECT,
  UPDATE_TODOS_RESOLVE, UPDATE_TODOS_REJECT,
  REMOVE_TODOS_RESOLVE, REMOVE_TODOS_REJECT } from './todosTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return {loading: true};
    case TODOS_RESOLVE:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        loaded: true
      });
    case TODOS_REJECT:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
        loaded: false
      });
    case CREATE_TODOS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case CREATE_TODOS_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case UPDATE_TODOS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case UPDATE_TODOS_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case REMOVE_TODOS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
	    // let newData = state.data.filter(item => item.id != action.payload.data.id);
      // return Object.assign({}, state, {
      //   data: newData
      // });
  	case REMOVE_TODOS_REJECT:
        return Object.assign({}, state, {
          error: action.payload.error
        });
    default:
      return state;
  }
}
