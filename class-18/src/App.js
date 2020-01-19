import React from 'react';

import './styles.css';

import Form from './form.js';
import Grades from './grades.js';

export default function App() {
  return (
    <div className="App">
      <h1>Canvas Test App</h1>
      <Form />
      <section>
        <Grades />
      </section>
    </div>
  );
}
