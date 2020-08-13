import React, { useState, useEffect } from 'react';

function MessageComposer(props) {
  const [message, setMessage] = useState("");

  function onChange(e) {
    const { value } = e.target;
    setMessage(value);
  }

  function onSend() {
    props.sendMessage(message);
    setMessage("");
  }

  return (
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Message" aria-label="Message" onChange={onChange} value={message}></input>
      <div class="input-group-append">
        <button class="btn btn-outline-primary" type="button" onClick={() => onSend()}>Send</button>
      </div>
    </div>
  );
}

export default MessageComposer;