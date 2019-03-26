const initialState = {
  auth: {},
  senators: [],
  user_senators: []
}

const userReducer = (state = initialState, action) => {
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
    case 'SENATORS_ADDED_TO_STATE': {
      return { ...state, senators: action.payload }
    }
    case 'ADD_USER_SENATOR': {
      return { ...state, user_senators: action.payload }
    }

    default:
    return state
  }
}

export default userReducer;
