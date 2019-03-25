import ActionTypes from './ModalActionTypes';

const initialState = {
  modalProps: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps
        type: action.type
      }
    case ModalActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
