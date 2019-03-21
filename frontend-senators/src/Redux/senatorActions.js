export const fetchSenators = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/senators")
      .then(r => r.json())
      .then(senators => dispatch(stateSenators(senators)));
  };
};

export const stateSenators = senators => ({
  type: 'SENATORS_ADDED_TO_STATE',
  payload: { senators }
})
