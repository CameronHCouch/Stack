export const requestChannels = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels`
  });
};

export const requestChannel = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};

export const createChannel = channel => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/`,
    data: { channel }
  });
};

export const updateChannel = channel => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/channel/${channel.id}`,
    data: { channel }
  });
};