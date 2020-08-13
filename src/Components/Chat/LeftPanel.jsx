import React, { useState, useEffect } from 'react';

import { channelService } from '../../_services/channelService';

function LeftPanel(props) {
  const [name, setName] = useState("");

  function onChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function createChannel() {
    props.createChannel(name);
    setName("");
  }
  
  return (
    <div className="col-lg-8 offset-lg-2">
      <div class="list-grodiv">
      { props.channels.map(channel => (
          <button type="button" key={channel.id} class="list-group-item list-group-item-action" onClick={() => props.changeChannel(channel)}>
            {channel.name}
          </button>
      ))}
      </div>
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Channel Name" aria-label="Name" onChange={onChange} value={name}></input>
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" onClick={() => createChannel()}>Create Channel</button>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
