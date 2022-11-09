import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';


function App() {
  function handleEditAvatarClick(){
    document.querySelector("#avatar").classList.add("popup_active");
  };
  function handleEditProfileClick(){
    document.querySelector("#edit").classList.add("popup_active");
  };
  function handleAddPlaceClick(){
    document.querySelector("#gallery").classList.add("popup_active");
  };


  return (
    <body className="page">
      <Header />

      <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} />

      <Footer />

      <template id="card">
        <div className="element">
          <img className="element__image" src="#" alt="Location"/>
          <button id="erase-btn" className="element__erase"></button>
          <div className="element__group">
            <h3 className="element__location"></h3>
            <div className="element__like-area">
              <button className="element__like"></button>
              <span className="element__counter"></span>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;
