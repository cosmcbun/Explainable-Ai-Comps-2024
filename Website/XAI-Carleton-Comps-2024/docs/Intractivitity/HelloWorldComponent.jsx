import React, { useState } from 'react';
import axios from 'axios';

export const HelloWorldComponent = () => {
  const [numEvent, setNumEvent] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setNumEvent(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/hello-world?num_event=${numEvent}`);
      setResponse(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={numEvent}
        onChange={handleChange}
        placeholder="Enter num_event"
      />
      <button onClick={handleClick}>Query</button>
      {response && <p>{response}</p>}
    </div>
  );
};
