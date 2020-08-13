import React, { useState, useEffect } from 'react';
import { history } from '../../_helpers/history';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { userService } from '../../_services/userService';
import { channelService } from '../../_services/channelService';

import LeftPanel from './LeftPanel';
import ChannelWindow from './ChannelWindow';

var jwt = require('jsonwebtoken');

function Chat() {
  const [currentUser, setCurrentUser] = useState({});
  const [allChannels, setAllChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState({});

  useEffect(() => {
    // Redirect to login page if no jwt token found or token expired
    let token = localStorage.getItem('jwt')
    let decodedJWT = jwt.decode(token, { complete: true });
    if (!token || token === '' || decodedJWT.exp < Date.now()) {
      localStorage.setItem('jwt', '');
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    // Set current user
    userService.profile().then((data) => {
      setCurrentUser(data);
    });

    // Set list of all active channels
    channelService.loadChannels().then((data) => {
      setAllChannels(data);
    });
  }, []);

  function changeChannel(channel) {
    setCurrentChannel(channel)
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Chat Page</h1>
      <LeftPanel channels={allChannels} changeChannel={changeChannel} />
      <ChannelWindow currentChannel={currentChannel} />
    </div>
  );
}

export { Chat };
