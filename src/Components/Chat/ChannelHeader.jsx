import React, { useState, useEffect } from 'react';

function ChannelHeader(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export default ChannelHeader;