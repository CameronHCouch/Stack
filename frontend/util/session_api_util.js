export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
}

export const logout = userId => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
    data: userId
  })
}

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
}