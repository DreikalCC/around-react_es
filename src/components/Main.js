import React from 'react';
import jack from '../images/jack.jpg';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { api } from '../utils/api';
import { render } from '@testing-library/react';
import { Card } from './Card';

export function Main(props) {

  const [cards, setCards] = React.useState([])
  const [userName, setUserName] = React.useState('jack');
  const [userDesc, setUserDesc] = React.useState('custo');
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(()=>{
    Promise.all([api.getUserInfo(),api.getInitialCards()])
    .then(([{name,about,avatar},serverCards])=>{
    setUserName(name);
    setUserAvatar(avatar);
    setUserDesc(about);
    setCards(serverCards)
    })
    .then(()=>{console.log(props)
      cards.__proto__.handleClick = props.handleCardClick;
    })
    .catch((err)=>{console.log(err)})

    return () => {};

  },[])

  return (
    <>
      <section className="profile">
      <div className="profile__user">
        <img className="profile__pic" src={userAvatar} alt="Foto de perfil"/>
        <button id="avatar-btn" onClick={props.handleEditAvatarClick} className="profile__avatar-btn"></button>
      </div>
      <div className="profile__info">
        <h1 className="profile__name">{userName}</h1>
        <button id="profile-btn" onClick={props. handleEditProfileClick} className="profile__info profile__edit-button"></button>
        <p className="profile__description">{userDesc}</p>
      </div>
      <button id="add-card-btn" onClick={props.handleAddPlaceClick} className="profile__add-button"></button>
      </section>

      <section className="elements">

        {
          Card(cards)
        }

      </section>

      <ImagePopup image={props.selectedCard} isPopupOpen={props.isOpen.image} onClose={props.handleClose} />

      <PopupWithForm name="profile" title="Editar perfil" button="Guardar"
      holderAbout="Explorador" holderName="Jaques Cousteau" type="text"
      display="" isPopupOpen={props.isOpen.profile} onClose={props.handleClose} />

      <PopupWithForm name="gallery" title="Nuevo lugar" button="Crear"
      holderName="Título" holderAbout="URL de la imagen" type="url"
      display="" isPopupOpen={props.isOpen.gallery} onClose={props.handleClose} />

      <PopupWithForm name="avatar" title="Cambiar foto de perfil" button="Guardar"
      display="none" holderAbout="URL de la imagen" type="url"
      isPopupOpen={props.isOpen.avatar} onClose={props.handleClose} />

      <section id="eraser" className="popup edit">
        <form noValidate name="eraser" className="edit__form">
          <h3 className="edit__title">¿Estás seguro?</h3>
          <button type="submit" id="erase-submit" className="edit__submit-btn">Si</button>
          <a id="eraser__close" className="popup__close"></a>
        </form>
        <div id="eraser__overlay" className="popup__overlay"></div>
      </section>
    </>
  )
}