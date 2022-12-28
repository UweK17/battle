import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Hangar from './Hangar.js';


const ChoosePlayerNames = () => {

  const navigate = useNavigate();
  const navigateToHangar = () => {
    navigate('../hangar');
  };

  const [formDataOne, setFormDataOne] = useState("");
  const [formDataTwo, setFormDataTwo] = useState("");
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
   
  const changeHandlerOne = (e) => {
    setFormDataOne(e.target.value);
  };

  const changeHandlerTwo = (e) => {
    setFormDataTwo(e.target.value);
  };

  const submitHandlerOne = ((e) => {
    e.preventDefault();
    setPlayerOneName(formDataOne);
    setFormDataOne("");
  })

  const submitHandlerTwo = ((e) => {
    e.preventDefault();
    setPlayerTwoName(formDataTwo);
    setFormDataTwo("");
  })

  return (
    <div>
      <div>
        <form onSubmit={submitHandlerOne}>
          <label htmlFor="name">Player 1, please Enter your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formDataOne}
            onChange={changeHandlerOne}
          />
          <button>Save your Name</button>
          <div>
            <div>Welcome</div>
            <div>{playerOneName}</div>
          </div>
        </form>
      </div>

      <div>
        <form onSubmit={submitHandlerTwo}>
          <label htmlFor="name">Player 2, please Enter your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formDataTwo}
            onChange={changeHandlerTwo}
          />
          <button>Save your Name</button>
          <div>
            <div>Welcome</div>
            <div>{playerTwoName}</div>
          </div>
        </form>
      </div>
      <div>
        <button onClick={navigateToHangar}>Players, go to the Hangar and choose your Units</button>
        <Routes>
          <Route path="../hangar" element={<Hangar />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default ChoosePlayerNames;