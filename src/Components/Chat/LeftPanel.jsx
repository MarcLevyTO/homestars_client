import React, { useState, useEffect } from 'react';

function LeftPanel(props) {
  
  return (
    <div className="col-lg-8 offset-lg-2">
      <div class="list-grodiv">
      { props.channels.map(channel => (
          <button type="button" key={channel.id} class="list-group-item list-group-item-action" onClick={() => props.changeChannel(channel)}>
            {channel.name}
          </button>
      ))}
      </div>
    </div>
  );
}

export default LeftPanel;
