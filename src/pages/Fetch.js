import React, { useState, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  error: null,
  greeting: null,
};

function greetingReducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        greeting: action.data,
      };
    }
    case 'ERROR': {
      return {
        error: action.error,
        greeting: null,
      };
    }
    default: {
      return state;
    }
  }
}

export default function Fetch({ url }) {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState
  );
  console.log('greeting', greeting);
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchGreeting = async (url) =>
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        console.log('data console.', data);
        dispatch({ type: 'SUCCESS', data: data.title });
        setButtonClicked(true);
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', error });
      });

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting';

  return (
    <div>
      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
}
