export const requestChannels = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels`
  })
}

export const requestChannel = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  })
}

export const createChannel = channel => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/`,
    data: { channel }
  })
}