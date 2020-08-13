import { authHeader } from '../_helpers';

export const channelService = {
  createChannel,
  loadChannels,
  sendMessage
};

function createChannel(name) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/channels`, requestOptions).then(
    handleResponse
  );
}

function loadChannels() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/channels`, requestOptions).then(
    handleResponse
  );
}

function sendMessage(channel_id, message) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel_id, message }),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/messages`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return data;
    }
    return data;
  });
}
