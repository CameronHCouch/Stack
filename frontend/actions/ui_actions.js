export const RECEIVE_EMAIL = "RECEIVE_EMAIL";


export const receiveEmail = (email) => {
  return {
    type: RECEIVE_EMAIL,
    email
  }
}