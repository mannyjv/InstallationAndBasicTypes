import React, { useState } from 'react';
import ArgonautesList from './ArgonautesList';

export default function MainSection(props) {
  const [userInput, setUserInput] = useState('');
  const { listOfArgonautes, addArgonaute } = props;

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addArgonaute(userInput);
    setUserInput('');
  };

  return (
    <div id="main">
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form" onSubmit={handleSubmit}>
        <div>
          <label>Nom de l'Argonaute</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={userInput}
            required
          />
          <input type="submit" value="Envoyer" />
        </div>
      </form>
      <ArgonautesList listOfArgonautes={listOfArgonautes} />
    </div>
  );
}
