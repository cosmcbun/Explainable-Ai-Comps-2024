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
      const response = await axios.get(`http://xai-mlp.glitch.me/?num_event=${numEvent}`, {
        headers: {
          'accept': 'application/json'
        }
      });
      // turn response into array
      const responseArray = [];
      for (let key in response.data) {
        responseArray.push(response.data[key]);
      }
      setResponse(responseArray);
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
          <p>Hello: {response[0]}</p>
          <p>Input: {response[1]}</p>
          <p>Probabilities: {response[2][0]*100}% to Fail | {response[2][1]*100}% to Pass</p>
          <p>Prediction: {response[3]}</p>
          {/* <p>Viewed: {response.viewed}</p>
          <p>Gender: {response.gender}</p>
          <p>Grade: {response.grade}</p>
          <p>Nevents: {response.nevents}</p>
          <p>Ndays_act: {response.ndays_act}</p>
          <p>Nplay_video: {response.nplay_video}</p>
          <p>Nchapters: {response.nchapters}</p>
          <p>Age: {response.age}</p>
          <p>Votes: {response.votes}</p>
          <p>Num_words: {response.num_words}</p> */}
        </div>
      )}
    </div>
  );
};
