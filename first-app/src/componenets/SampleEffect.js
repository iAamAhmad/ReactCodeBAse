import React, { useState, useEffect } from 'react';

function ButtonClickExample() {
  const [buttonClicked, setButtonClicked] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  function handleButtonClick(button) {
    setButtonClicked(button);
  }

  function determineSuccessMessage() {
    if (buttonClicked === 'button1') {
      setSuccessMessage('Button 1 was clicked! Success!');
    } else if (buttonClicked === 'button2') {
      setSuccessMessage('Button 2 was clicked! Success!');
    }
  }

  useEffect(() => {
    determineSuccessMessage();
  },[]);

  return (
    <div>
      <h1>Button Click Example</h1>
      <button onClick={() => handleButtonClick('button1')}>Click Button 1</button>
      <button onClick={() => handleButtonClick('button2')}>Click Button 2</button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default ButtonClickExample;
