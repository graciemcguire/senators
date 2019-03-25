import ModalActionTypes from './ModalActionTypes';

export const showModal = (modalProps) => dispatch => {
  dispatch({
    type: ModalActionTypes.SHOW_MODAL,
    modalProps
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: ModalActionTypes.HIDE_MODAL
  });
}
