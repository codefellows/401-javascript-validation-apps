import React, { useState } from 'react';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000/school');

export default props => {
  let [assignment, setAssignment] = useState('');

  let handleChange = e => {
    let value = e.target.value.replace(/[^a-zA-Z0-9-_]/, '');
    setAssignment(value);
  };

  let go = e => {
    e.preventDefault();
    socket.emit('submission', assignment);
  };

  return (
    <div>
      <form onSubmit={go}>
        <span>Assignment Name</span>
        <input placeholder="Assignment" onChange={handleChange} />
        <button>Submit Assignment</button>
      </form>
    </div>
  );
};
