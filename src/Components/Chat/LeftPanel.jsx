import React, { useState, useEffect } from 'react';

function LeftPanel(props) {
  return (
    <div className="col-lg-8 offset-lg-2">
      { props.channels.map(channel => (
          <button key={channel.id} onClick={() => props.changeChannel(channel)}>{channel.name}</button>
      ))}
    </div>
  );
}

export default LeftPanel;
