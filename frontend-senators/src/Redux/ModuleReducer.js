import ActionTypes from './ModuleActionTypes';

const initialState = {
  modalType: null,
  modalProps: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ModuleActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case ModuleActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
