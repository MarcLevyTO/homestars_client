import React, { useState, useEffect } from 'react';

const ChannelMessages = (props) => {
  // const [state, setState] = useState(props);

  // useEffect(() => {
  //   console.log("is props updating?")
  //   setState(props);
  // }, [props]);

  return (
    <div>
      <table>
      { props.messages && props.messages.map(message => (
          <tr key={message.id}>
            <div>
              <p>{message.user_id}</p>
              <p>{message.message}</p>
            </div>
          </tr>
      ))}
      </table>
      
    </div>
  );
}

export default ChannelMessages;