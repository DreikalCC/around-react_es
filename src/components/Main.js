import React, { useContext } from 'react';
import { api } from '../utils/api';
import { Card } from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUserContext = useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((serverCards) => {
        setCards(serverCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUserContext._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => {
        return state.map((c) => (c._id === card._id ? newCard : c));
      });
    });
  }

  return (
    <>
      <section className="profile">
        <div className="profile__user">
          <img
            className="profile__pic"
            src={currentUserContext.avatar}
            alt="Foto de perfil"
          />
          <button
            id="avatar-btn"
            onClick={props.handleEditAvatarClick}
            className="profile__avatar-btn"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUserContext.name}</h1>
          <button
            id="profile-btn"
            onClick={props.handleEditProfileClick}
            className="profile__info profile__edit-button"
          ></button>
          <p className="profile__description">{currentUserContext.about}</p>
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
              onCardLike={handleCardLike}
            />
          );
        })}
      </section>
    </>
  );
}
