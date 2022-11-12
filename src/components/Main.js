import React from 'react';
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
    </>
  );
}
