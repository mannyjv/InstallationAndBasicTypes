import React from 'react';

export default function MainSection() {
  const handleSubmit = (e) => {};
  return (
    <div id="main">
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <div>
          <label>Nom de l'Argonaute</label>
          <input type="text" name="name" placeholder="Emmanuel" required />
          <button type="submit">Envoyer</button>
        </div>
      </form>
      <section className="member-list">
        <div className="member-item">Eleftheria</div>
      </section>
    </div>
  );
}
