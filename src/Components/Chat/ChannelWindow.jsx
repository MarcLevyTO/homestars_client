import React, { useState, useEffect } from 'react';

function ChannelWindow(props) {
  
  useEffect(() => {
    console.log("has access to props", props.test)
  }, [props.test]);


  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Channel Window</h1>
    </div>
  );
}

export default ChannelWindow;
