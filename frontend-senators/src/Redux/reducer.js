const initialState = {
  auth: {},
  senatorObjs: [],
  selectedSenator: {},
  ratings: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    case 'HANDLE_LOGIN': {
      return { ...state, auth: action.payload }
    }
    case 'HANDLE_LOGOUT': {
      return { ...state, auth: {} }
    }
    case 'GET_CURRENT_USER': {
      return { ...state, auth: action.payload }
    }
    default:
    return state
  }
}

export default reducer;
