import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000/school');

export default props => {
  let [grades, setGrades] = useState([]);

  useEffect(() => {
    socket.emit('join', 'students');

    socket.on('graded', payload => {
      setGrades(g => [...g, payload]);
    });
  }, []);

  return (
    <div>
      <h2>Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((assignment, idx) => (
            <tr key={idx}>
              <td>{assignment.assignment}</td>
              <td>{assignment.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
