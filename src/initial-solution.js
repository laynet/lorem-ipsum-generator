import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [paragraphs, setParagraphs] = useState(data);
  const [amount, setAmount] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  console.log('amount', amount);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(paragraphs.slice(0, amount));
    setDisplay(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' onChange={handleChange} value={amount} />
        <button>generate</button>
      </form>
      <p>{display && paragraphs}</p>
    </>
  );
};

export default App;
