import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";

export const MLPClassifier = () => {
  const [numEvent, setNumEvent] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNumEvent(e.target.value);
  };

  useEffect(() => { // Query the server on page load to awaken it
    axios.get('https://xai-mlp.glitch.me/')
  });

  const handleClick = async () => {
    try {
      // POST request to server containing our ML model's input (" | 0" to clean unfilled values)
      const response = await axios.post(`https://xai-mlp.glitch.me/predict/`, 
      {
          viewed: document.getElementById("viewed").value | 0,
          gender: document.getElementById("gender").value | 0,
          grade: document.getElementById("grade").value | 0,
          nevents: document.getElementById("nevents").value | 0,
          ndays_act: document.getElementById("ndays_act").value | 0,
          nplay_video: document.getElementById("nplay_video").value | 0,
          nchapters: document.getElementById("nchapters").value | 0,
          age: document.getElementById("age").value | 0,
          votes: document.getElementById("votes").value | 0,
          num_words: document.getElementById("num_words").value | 0
        }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
      });

      // Return the array of probabilities [fail, pass, colors]
      let probs = response.data.Probability.map((prob) => prob.toFixed(3));
      let result = [probs[0], probs[1], ['#FF006F', '#0082FF']];
      console.log("PROBABILITY: ", response.data.Probability)
      console.log("RESULT:", result)

      // Colors based on winning result
      if (result[0] < result[1]) {
        result[2] = ['#0082FF', '#FF006F'];
      }

      setResponse(result);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setResponse(null);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>viewed</td>
            <td>gender</td>
            <td>grade</td>
            <td>nevents</td>
            <td>ndays_act</td>
            <td>nplay_video</td>
            <td>nchapters</td>
            <td>age</td>
            <td>votes</td>
            <td>num_words</td>
          </tr>
          <tr>
            <td><input id="viewed" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="gender" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="grade" type="number" onChange={handleChange} placeholder="0.0" style={{ width: '50px' }}/></td>
            <td><input id="nevents" type="number"  onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="ndays_act" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="nplay_video" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="nchapters" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="age" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="votes" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
            <td><input id="num_words" type="number" onChange={handleChange} placeholder="0" style={{ width: '50px' }}/></td>
          </tr>
        </tbody>
      </table>

      
      <button className="button" onClick={handleClick}>Query</button>
      {error && <p>{error}</p>}
      {response && (
        <div className="predict_proba">
          <svg style={{ width: '100%', height: '79px' }}>
            <text x="20" y="20">Prediction probabilities</text>
            <g>
              <rect x="120" className="progressBar" y="35" height="17" width={response[0] * 100} style={{ fill: response[2][0] }}></rect>
              <rect x="120" y="35" height="17" width="100" fillOpacity="0" stroke="black"></rect>
              <text x="225" y="49" fill="black" style={{ font: '14px tahoma, sans-serif' }}>{response[0]}</text>
              <text x="110" y="49" fill="black" textAnchor="end" style={{ font: '14px tahoma, sans-serif' }}>Not Completed</text>
              <rect x="120" className="progressBar" y="57" height="17" width={response[1] * 100} style={{ fill: response[2][1] }}></rect>
              <rect x="120" y="57" height="17" width="100" fillOpacity="0" stroke="black"></rect>
              <text x="225" y="71" fill="black" style={{ font: '14px tahoma, sans-serif' }}>{response[1]}</text>
              <text x="110" y="71" fill="black" textAnchor="end" style={{ font: '14px tahoma, sans-serif' }}>Completed</text>

              {/* <rect x="120" className="slider" y="35" height="17" width={response[0] * 100} style={{ fill: response[2][0] }}></rect>
              <rect x="120" y="35" height="17" width={response[0] * 100} fillOpacity="0" stroke="black"></rect>
              <text x={120 + response[0] * 100 + 5} y="49" fill="black" style={{ font: '14px tahoma, sans-serif' }}>{response[0]}</text>
              <text x="110" y="49" fill="black" textAnchor="end" style={{ font: '14px tahoma, sans-serif' }}>Not Completed</text>
              <rect x="120" className="slider" y="57" height="17" width={response[1] * 100} style={{ fill: response[2][1] }}></rect>
              <rect x="120" y="57" height="17" width={response[1] * 100} fillOpacity="0" stroke="black"></rect>
              <text x={120 + response[1] * 100 + 5} y="71" fill="black" style={{ font: '14px tahoma, sans-serif' }}>{response[1]}</text>
              <text x="110" y="71" fill="black" textAnchor="end" style={{ font: '14px tahoma, sans-serif' }}>Completed</text> */}
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
