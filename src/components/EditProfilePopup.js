import React from 'react';
import { PopupWithForm } from './PopupWithForm';

export function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Editar perfil"
      buttonText="Guardar"
      isPopupOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="input__field">
        <input
          id="profile-name-input"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          type="text"
          placeholder="Jaques Cousteau"
          className="input__form input__name"
          minLength="2"
          maxLength="40"
        />
        <span className="input__form-error profile-name-input-error"></span>
      </label>
      <label className="input__field">
        <input
          id="profile-desc-input"
          name="about"
          value={description}
          onChange={handleDescriptionChange}
          required
          type="text"
          placeholder="Explorador"
          className="input__form input__description"
          minLength="2"
          maxLength="200"
        />
        <span className="input__form-error profile-desc-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
