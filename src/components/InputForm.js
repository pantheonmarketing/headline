import React from 'react';

function InputForm() {
  return (
    <div className="input-form">
      <h1>Email Ad</h1>
      <h2>Remember To Pay Me</h2>
      <p>Recovers potentially lost sales by addressing failed checkout payments with a blend of empathy and urgency...</p>
      <div className="input-field">
        <label>
          <p>What is your target market?</p>
          <textarea placeholder="0/2500"></textarea>
        </label>
      </div>
    </div>
  );
}

export default InputForm;
