import { Map } from 'immutable'
import { OPEN_MODAL, HIDE_MODAL } from './modalTypes'

const initialState = Map({
  open: false,
  text: ''
})

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      console.log('open');
      return state.merge({open: true, text: action.payload.text});
    case HIDE_MODAL:
      console.log('hide');
      return state.merge({open: false, text: ''});
    default:
      return state;
  }
}
