import ModuleActionTypes from './ModuleActionTypes';

export const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({
    type: ModuleActionTypes.SHOW_MODAL,
    modalProps,
    modalType
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: ModuleActionTypes.HIDE_MODAL
  });
}
