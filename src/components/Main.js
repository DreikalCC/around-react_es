import React from 'react';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { api } from '../utils/Api';
import { Card } from './Card';

export function Main(props) {
  const [cards, setCards] = React.useState([]);
  const [userName, setUserName] = React.useState('jack');
  const [userDesc, setUserDesc] = React.useState('custo');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([{ name, about, avatar }, serverCards]) => {
        setUserName(name);
        setUserAvatar(avatar);
        setUserDesc(about);
        setCards(serverCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__user">
          <img className="profile__pic" src={userAvatar} alt="Foto de perfil" />
          <button
            id="avatar-btn"
            onClick={props.handleEditAvatarClick}
            className="profile__avatar-btn"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            id="profile-btn"
            onClick={props.handleEditProfileClick}
            className="profile__info profile__edit-button"
          ></button>
          <p className="profile__description">{userDesc}</p>
        </div>
        <button
          id="add-card-btn"
          onClick={props.handleAddPlaceClick}
          className="profile__add-button"
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              data={card}
              onCardClick={props.handleCardClick}
              onEraseClick={props.handleEraseCardClick}
            />
          );
        })}
      </section>

      <PopupWithForm
        name="profile"
        title="Editar perfil"
        buttonText="Guardar"
        isPopupOpen={props.isEditProfileOpen}
        onClose={props.handleClose}
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
        isPopupOpen={props.isAddPlaceOpen}
        onClose={props.handleClose}
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
        isPopupOpen={props.isEditAvatarOpen}
        onClose={props.handleClose}
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
        isPopupOpen={props.isEraseCardOpen}
        onClose={props.handleClose}
      ></PopupWithForm>
    </>
  );
}
