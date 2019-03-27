
export const handleLogin = (user) => ({
  type: 'HANDLE_LOGIN',
  payload: { user }
})

export const logoutUser = () => ({
  type: 'HANDLE_LOGOUT'
})

export const getCurrentUser = (user) => ({
  type: 'GET_CURRENT_USER',
  payload: { user }
})

export const updateUserFromFetch = (user) => ({
  type: 'UPDATE_USER_FROM_FETCH',
  payload: { user }
})

export const stateSenators = senators => ({
  type: 'SENATORS_ADDED_TO_STATE',
  payload: { senators }
})

export const createRating = ratings => ({
  type: 'CREATE_RATING',
  payload: { ratings }
})

export const fetchRatings = ratings => ({
  type: 'FETCH_RATINGS',
  payload: { ratings }
})

export const loginFetch = (e) => {
  return fetch("http://localhost:3001/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        email: e.target.email.value,
        password: e.target.password.value
      }
    })
  }).then(resp => resp.json())
}

export const loginAndFetch = (e, history) => {
  return (dispatch) => {
    return loginFetch(e)
    .then(json => {
      history.push('/profile')
      dispatch(handleLogin(json.user));
      localStorage.setItem("token", json.jwt);
    })
  }
}

export const signUpAndFetch = (e, history) => {
  return (dispatch) => {
    return signUpFetch(e)
    .then(json => {
      history.push('/profile')
      dispatch(handleLogin(json.user)); localStorage.setItem("token", json.jwt)
    })
  }
}

export const signUpFetch = (e) => {
  return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
        }
      })
    }).then(resp => resp.json())
}

export const setAndFetchUser = (token) => {
  return (dispatch) => {
    return fetchingCurrentUser(token)
    .then(json => dispatch(getCurrentUser(json)))
  }
}

export const fetchingCurrentUser = (token) => {
  return fetch('http://localhost:3001/api/v1/current_user', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(resp => resp.json())
  .catch(console.error)
}

export const fetchSenators = (token) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/senators', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(senators => dispatch(stateSenators(senators)));
  };
};


export const handleCreateRating = (userId, senatorId, wokeOrJoke) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        user_id: userId,
        senator_id: senatorId,
        user_rating: wokeOrJoke
      })
    })
    .then(r => r.json())
    .then(data => dispatch(createRating(data)))
  }
}

export const fetchUserSenators = (token) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/user_rating', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(r => r.json())
    .then(userSenators => dispatch(fetchRatings(userSenators)))
  }
}
