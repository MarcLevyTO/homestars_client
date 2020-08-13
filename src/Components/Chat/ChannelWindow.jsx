import React, { useState, useEffect } from 'react';

import { channelService } from '../../_services/channelService';
import { messageService } from '../../_services/messageService';

import ChannelHeader from './ChannelHeader';
import ChannelMessages from './ChannelMessages';
import MessageComposer from './MessageComposer';

function ChannelWindow(props) {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // When sending a message, add the new message to the end of the messages list
  function sendMessage(message) {
    messageService.sendMessage(props.currentChannel.id, message).then(data => {
      if (data.id) {
        const newMessages = messages.concat(data);
        setMessages(newMessages);
      }
    });
  }
  
  // When a new current channel is selected, reload the data from the database
  useEffect(() => {
    if (props.currentChannel.id) {
      channelService.fetchChannel(props.currentChannel.id).then(data => {
        if (data.id) {
          setUsers(data.users);
          setMessages(data.messages);
        }
      });
    }
  }, [props.currentChannel]);

  return (
    <div className="col-lg-8 offset-lg-2">
      <ChannelHeader name={props.currentChannel?.name} />
      <ChannelMessages users={users} messages={messages} />
      <MessageComposer sendMessage={sendMessage} />
    </div>
  );
}

export default ChannelWindow;
