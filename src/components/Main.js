import jack from '../images/jack.jpg';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

export function Main(props) {

  return (
    <>
      <section className="profile">
      <div className="profile__user">
        <img className="profile__pic" src={jack} alt="Foto de perfil"/>
        <button id="avatar-btn" onClick={props.handleEditAvatarClick} className="profile__avatar-btn"></button>
      </div>
      <div className="profile__info">
        <h1 className="profile__name">Cousteau</h1>
        <button id="profile-btn" onClick={props. handleEditProfileClick} className="profile__info profile__edit-button"></button>
        <p className="profile__description">Explorador</p>
      </div>
      <button id="add-card-btn" onClick={props.handleAddPlaceClick} className="profile__add-button"></button>
      </section>

      <section className="elements">

        <div id="popup" className="popup">
          <div id="popup__overlay" className="popup__overlay"></div>
          <div className="popup__group">
            <img className="popup__image" src="#" alt="Location"/>
            <h3 className="popup__name">Imagen</h3>
            <button id="popup__close" className="popup popup__close"></button>
          </div>
        </div>
      </section>

      <PopupWithForm name="edit" title="Editar perfil" button="Guardar"
      holderAbout="Explorador" holderName="Jaques Cousteau" type="text"
      display="true"/>

      <PopupWithForm name="gallery" title="Nuevo lugar" button="Crear"
      holderName="Título" holderAbout="URL de la imagen" type="url"
      display="true"/>

      <PopupWithForm name="avatar" title="Cambiar foto de perfil" button="Guardar"
      display="false" holderAbout="URL de la imagen" type="url" />

      <section id="avatar" className="popup edit">
        <form novalidate name="avatar" className="edit__form">
          <h3 className="edit__title">Cambiar foto de perfil</h3>
            <fieldset className="input">
              <label className="input__field">
                <input required
                id="avatar-url-input"
                name="link"
                type="url"
                placeholder="URL de la imagen"
                className="input__form input__description input__description_gallery"/>
                <span className="input__form-error avatar-url-input-error"></span>
              </label>
            </fieldset>
            <button type="submit" className="edit__submit-btn">Guarda</button>
            <a id="avatar__close" className="popup__close"></a>
        </form>
        <div id="avatar__overlay" className="popup__overlay"></div>
      </section>

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
}