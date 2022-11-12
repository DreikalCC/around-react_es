import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { ImagePopup } from './ImagePopup';

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
        isEditAvatarOpen={isEditAvatarPopupOpen}
        isEditProfileOpen={isEditProfilePopupOpen}
        isAddPlaceOpen={isAddPlacePopupOpen}
        isEraseCardOpen={isEraseCardPopupOpen}
        isImageOpen={isImagePopupOpen}
        selectedCard={selectedCard}
        handleClose={closeAllPopups}
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

      <Footer />
    </div>
  );
}

export default App;
