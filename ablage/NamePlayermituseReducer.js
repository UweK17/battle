import React, {useState, useReducer} from 'react';

const reducerFunction = (state, action) => {
  switch(action.type) {
    case "changeHandlerOne":
      return {...state, [action.field]: action.value, playerOneName: action.value};
    case "changeHandlerTwo":
      return {...state, [action.field]: action.value, playerTwoName: action.value};
    case "submitHandlerOne":
      return {...state, [action.field]: action.value, formDataOne: action.value}
    default:
      return state;
  }
};

const initialState = {
  formDataOne: "Your Name",
  formDataTwo: "Your Name",
  playerOneName: "Player 1",
  playerTwoName: "Player 2"
}

const ChoosePlayerNames = () => {

  // const [formDataOne, setFormDataOne] = useState("");
  // const [formDataTwo, setFormDataTwo] = useState("");
  // const [playerOneName, setPlayerOneName] = useState(" ");
  // const [playerTwoName, setPlayerTwoName] = useState(" ");
   
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const {formDataOne, formDataTwo, playerOneName, playerTwoName} = state;
  // const changeHandlerOne = (e) => {
  //   dispatch({type: "formdataone"});
  // };

  // const changeHandlerTwo = (e) => {
  //   dispatch({type: "formdatatwo"});
  // };

  // const submitHandlerOne = ((e) => {
  //   e.preventDefault();
  //   dispatch({type: "playeronename"});
  // })

  // const submitHandlerTwo = ((e) => {
  //   e.preventDefault();
  //   dispatch({type: "playertwoname"});
  // })

  return (
    <div>
      <div>
        <form>
          <label htmlFor="name">Player 1, please Enter your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(e) => {
              dispatch({
              type: "changeHandlerOne",
              field: "formDataOne",
              value: e.target.value,
            })}}
          />
          <button onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "submitHandlerOne",
              field: "formDataOne",
              value: "Your Name"
            })
          }}>Save your Name</button>
          <div>
            <div>Welcome</div>
            <div>{playerOneName}</div>
          </div>
        </form>
      </div>

      <div>
        <form>
          <label htmlFor="name">Player 2, please Enter your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(e) => dispatch({
              type: "changeHandlerTwo",
              field: "formDataTwo",
              value: e.target.value
            })}
          />
          <button>Save your Name</button>
          <div>
            <div>Welcome</div>
            <div>{playerTwoName}</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChoosePlayerNames;