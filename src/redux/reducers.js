import { combineReducers } from 'redux';
// Import Reducers Here:
import user from './../reusableComponents/BackandAuth/authReducer'
import todos from './../app/todo/todoReducer'
import modal from './../reusableComponents/Modal/modalReducer'

const rootReducer = combineReducers({
  user,
  todos,
  modal
})

 export default rootReducer;
