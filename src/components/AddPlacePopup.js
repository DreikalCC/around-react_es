import React, { useContext } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="gallery"
      title="Nuevo lugar"
      buttonText="Crear"
      isPopupOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="input__field">
        <input
          required
          id="card-name-input"
          name="name"
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="Título"
          className="input__form input__name input__name_gallery"
          minLength="2"
          maxLength="30"
        />
        <span className="input__form-error card-name-input-error"></span>
      </label>
      <label className="input__field">
        <input
          required
          id="card-url-input"
          name="link"
          value={link}
          onChange={handleLinkChange}
          type="url"
          placeholder="URL de la imagen"
          className="input__form input__description"
        />
        <span className="input__form-error card-url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
