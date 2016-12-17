import { combineReducers } from 'redux';
// Import Reducers Here:
import user from './../components/authentication/authReducer'
import todos from './../components/todos/todosReducer'
import modal from './../components/modal/modalReducer'

const rootReducer = combineReducers({
  user,
  todos,
  modal
})

 export default rootReducer;
