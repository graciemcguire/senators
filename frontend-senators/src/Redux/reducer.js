const initialState = {
  user: {},
  senatorObjs: [],
  selectedSenator: {},
  ratings: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    // case: 'HANDLE_LOGIN' : {
    //   return {
    //     ...state,
    //     user: action.payload,
    //     ratings: { action.payload.user.ratings
    //   }
    // }
    // case: 'HANDLE_LOGOUT' : {
    //   return {
    //     ...state,
    //     user: {},
    //     ratings: {}
    //   }
    // }

    default:
    return state
  }
}

export default reducer;
