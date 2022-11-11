import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';


function App() {
  const [open, setOpen] = React.useState({avatar:false, profile: false, gallery:false, image:false})
  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick(evt){
    console.log(evt.target)
    setSelectedCard([evt.target._id])
    setOpen({...open, image: true});
  }

  function handleEditAvatarClick(){
    setOpen({...open, avatar: true});
  };
  function handleEditProfileClick(){
    setOpen({...open, profile: true});
  };
  function handleAddPlaceClick(){
    setOpen({...open, gallery: true});
  };

  function closeAllPopups(evt){

    setOpen({...open, [evt.target.id]: false});
  }


  return (
    <body className="page">
      <Header />

      <Main isOpen={open} handleClose={closeAllPopups}
      imagePopup={selectedCard}
      handleCardClick={handleCardClick}
      handleEditAvatarClick={handleEditAvatarClick}
      handleEditProfileClick={handleEditProfileClick}
      handleAddPlaceClick={handleAddPlaceClick} />

      <Footer />

    </body>
  );
}

export default App;
