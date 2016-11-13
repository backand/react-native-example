import { OPEN_MODAL, HIDE_MODAL } from './modalTypes'

export const openModal = (text) => {
  return {
    type: OPEN_MODAL,
    payload: {
      text
    }
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  }
}
