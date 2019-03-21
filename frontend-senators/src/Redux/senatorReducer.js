const initialState = {
  senators: []
};

const senatorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SENATORS_ADDED_TO_STATE":
      return { ...state, senators: action.payload };
    default:
      return state;
  }
};

export default senatorsReducer;
