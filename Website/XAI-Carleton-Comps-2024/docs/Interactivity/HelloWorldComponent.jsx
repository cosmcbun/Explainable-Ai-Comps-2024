import React, { useState } from 'react';
import axios from 'axios';

export const HelloWorldComponent = () => {
  const [numEvent, setNumEvent] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNumEvent(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/base_student?num_event=${numEvent}`, {
        headers: {
          'accept': 'application/json'
        }
      });
      setResponse(response.data.student);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setResponse(null);
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
      {error && <p>{error}</p>}
      {response && (
        <div>
          <p>Viewed: {response.viewed}</p>
          <p>Gender: {response.gender}</p>
          <p>Grade: {response.grade}</p>
          <p>Nevents: {response.nevents}</p>
          <p>Ndays_act: {response.ndays_act}</p>
          <p>Nplay_video: {response.nplay_video}</p>
          <p>Nchapters: {response.nchapters}</p>
          <p>Age: {response.age}</p>
          <p>Votes: {response.votes}</p>
          <p>Num_words: {response.num_words}</p>
        </div>
      )}
    </div>
  );
};
