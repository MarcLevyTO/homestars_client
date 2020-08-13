import { authHeader, handleResponse } from '../_helpers';

export const channelService = {
  loadChannels,
  createChannel,
  fetchChannel,
  joinChannel,
  deleteChannel
};

// @route     GET /channels
// @desc      List all channels
// @access    User
// @params
function loadChannels() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/channels`, requestOptions).then(
    handleResponse
  );
}

// @route     POST /channels
// @desc      Create new channel
// @access    User
// @params    name
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

// @route     GET /channels/:id
// @desc      Fetch channel information
// @access    User
// @params
function fetchChannel(channel_id) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/channel/${channel_id}`, requestOptions).then(
    handleResponse
  );
}

// @route     POST /channels/:id/join
// @desc      Join new channel (sends an introduction method to the channel)
// @access    User
// @params
function joinChannel(channel_id) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/channel/${channel_id}/join`, requestOptions).then(
    handleResponse
  );
}

// @route     DELETE /channels/:id
// @desc      Join new channel (sends an introduction method to the channel)
// @access    User (should be an admin level user or the user who made the channel)
// @params
function deleteChannel(channel_id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/channel/${channel_id}`, requestOptions).then(
    handleResponse
  );
}