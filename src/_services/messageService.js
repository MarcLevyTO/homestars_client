import { authHeader, handleResponse } from '../_helpers';

export const channelService = {
  sendMessage,
  editMessage,
  deleteMessage,
  searchMessages
};

// @route     POST /messages
// @desc      Create new message in channel
// @access    User
// @params    channel_id, message
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

// @route     PUT /messages/:id
// @desc      Edit message in channel
// @access    User
// @params    message
function editMessage(message_id, message) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/messages/${message_id}`, requestOptions).then(
    handleResponse
  );
}

// @route     DELETE /messages/:id
// @desc      Delete message in channel (set status to "Deleted")
// @access    User
// @params
function deleteMessage(message_id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/messages/${message_id}`, requestOptions).then(
    handleResponse
  );
}

// @route     GET /messages/search
// @desc      Search for message by message text
// @access    User
// @params    text
function searchMessages(text) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/messages/search?text=${text}`, requestOptions).then(
    handleResponse
  );
}