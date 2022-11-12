import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { ImagePopup } from './ImagePopup';
import { PopupWithForm } from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEraseCardPopupOpen, setEraseCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  });

  function handleCardClick(item) {
    setSelectedCard(item);
    setIsImagePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEraseCardClick() {
    setEraseCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setEraseCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <div className="page">
      <Header />

      <Main
        handleCardClick={handleCardClick}
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
        handleEraseCardClick={handleEraseCardClick}
      />
      <ImagePopup
        image={selectedCard}
        isPopupOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="profile"
        title="Editar perfil"
        buttonText="Guardar"
        isPopupOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="input__field">
          <input
            id="profile-name-input"
            name="name"
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

      <PopupWithForm
        name="gallery"
        title="Nuevo lugar"
        buttonText="Crear"
        isPopupOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="input__field">
          <input
            required
            id="card-name-input"
            name="name"
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
            type="url"
            placeholder="URL de la imagen"
            className="input__form input__description"
          />
          <span className="input__form-error card-url-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Cambiar foto de perfil"
        buttonText="Guardar"
        isPopupOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="input__field">
          <input
            required
            id="avatar-url-input"
            name="link"
            type="url"
            placeholder="URL de la imagen"
            className="input__form input__description input__description_gallery"
          />
          <span className="input__form-error avatar-url-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="eraser"
        title="¿Estás seguro?"
        buttonText="Si"
        isPopupOpen={isEraseCardPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
