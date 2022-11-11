import React from 'react';
import jack from '../images/jack.jpg';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { api } from '../utils/api';
import { render } from '@testing-library/react';
import { Card } from './Card';
import { PopupWithImage } from './PopupWithImage';

export function Main(props) {
  //constructor(props) {
    //super(props);
    /*this.state = {
      friends: [],
      name: '',
      id: '',
      notes: ''
    };*/
    //this.create = this.create.bind(this);
    //this.update = this.update.bind(this);
    //this.delete = this.delete.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  //}

  const [cards, setCards] = React.useState([])
  const [userName, setUserName] = React.useState('jack');
  const [userDesc, setUserDesc] = React.useState('custo');
  const [userAvatar, setUserAvatar] = React.useState();

  const componenDidMount=()=>{
    Promise.all([api.getUserInfo(),api.getInitialCards()])
    .then(([{name,about,_id,avatar},serverCards])=>{//console.log(serverCards)
    setUserName(name);
    setUserAvatar(avatar);
    setUserDesc(about);
    setCards(serverCards)
    })
    .catch((err)=>{console.log(err)})
  }

  function deleteCard(){
    //confirmErase.loading('loading');
    api.deleteCard()
    .then(()=>{})
    .catch((err)=>{console.log(err)})
    .finally(()=>{
    //confirmErase.loading();
  })
  };

  function likeCard(){
    api.postLikes()
    .then((res)=>{})
  .catch((err)=>{console.log(err)})
  };

  function dislikeCard(){
    api.deleteLikes()
    .then((res)=>{})
  .catch((err)=>{console.log(err)})
  };

  function addCard(){
    //addCardForm.loading('loading');
    api.postCard()
    .then((res)=>{})
    .catch((err)=>{console.log(err)})
    .finally(()=>{
    //formValidators['gallery'].resetValidation();
    //addCardForm.loading();
  }
  )
  };

  function editData(){
    //profileFormEdit.loading('loading');
    api.postUserInfo()
    .then(()=>{})
    .catch((err)=>{console.log(err)})
    .finally(()=>{
    //formValidators['edit'].resetValidation();
    //profileFormEdit.loading();
  })
  };

  function editAvatar(){
    //avatarFormEdit.loading('loading');
    api.postUserAvatar()
    .then(()=>{})
    .catch((err)=>{console.log(err)})
    .finally(()=>{
    //formValidators['avatar'].resetValidation();
    //avatarFormEdit.loading();
  })
  };


//componenDidMount();

//console.log(userName);
//render(){
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
          cards.map((item)=>{console.log(item);
            return (
              item.onCardClick={props.handleCardClick};
              Card(item)
            );
          })
        }



      </section>

      <PopupWithImage onClose={props.handleClose} />

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
        <form novalidate name="eraser" className="edit__form">
          <h3 className="edit__title">¿Estás seguro?</h3>
          <button type="submit" id="erase-submit" className="edit__submit-btn">Si</button>
          <a id="eraser__close" className="popup__close"></a>
        </form>
        <div id="eraser__overlay" className="popup__overlay"></div>
      </section>
    </>
  )
//}
}