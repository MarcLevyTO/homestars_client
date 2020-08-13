import React, { useState, useEffect } from 'react';

function ChannelMessages(props) {
  return (
    <div>
      { props.messages && props.messages.map(message => (
          <p>UserId-{message.user_id} said "{message.message}"</p>
      ))}
    </div>
  );
}

export default ChannelMessages;