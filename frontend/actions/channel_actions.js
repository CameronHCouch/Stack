import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_USERS_CHANNELS = "RECEIVE_USERS_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const CREATE_CHANNEL = "CREATE_CHANNEL"

const receiveUsersChannels = (channels) => {
  return {
    type: RECEIVE_USERS_CHANNELS,
    channels
  }
}

const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  }
}

export const requestChannels = () => dispatch => {
  return ChannelAPIUtil.requestChannels().then(
    (channels) => dispatch(receiveUsersChannels(channels)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const requestChannel = (id) => dispatch => {
  return ChannelAPIUtil.requestChannels(id).then(
    (channel) => dispatch(receiveChannel(channel)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const createChannel = (channel) => dispatch => {
  return ChannelAPIUtil.createChannel(channel).then(
    (channel) => dispatch(receiveChannel(channel)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
}


export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}