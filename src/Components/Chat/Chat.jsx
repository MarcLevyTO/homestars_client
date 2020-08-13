import React, { useState, useEffect } from 'react';
import { history } from '../../_helpers/history';

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
      if (data[0]) {
        setCurrentChannel(data[0])
      }
    });
  }, []);

  function changeChannel(channel) {
    setCurrentChannel(channel)
  }

  function createChannel(name) {
    channelService.createChannel(name).then(data => {
      if (data.id) {
        const newChannels = allChannels.concat(data);
        setAllChannels(newChannels);
      }
    });
  }

  return (
    <div>
      <LeftPanel channels={allChannels} changeChannel={changeChannel} createChannel={createChannel} />
      <ChannelWindow currentChannel={currentChannel} />
    </div>
  );
}

export { Chat };
