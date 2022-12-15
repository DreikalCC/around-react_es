import React, { useContext } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function EditAvatarPopup(props) {
  const currentUserContext = useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  React.useEffect(() => {
    /*setAvatar(currentUserContext.avatar);*/
    avatarRef.current = currentUserContext.avatar;
  }, [currentUserContext]);

  const [avatar, setAvatar] = React.useState('');

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatar,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Cambiar foto de perfil"
      buttonText="Guardar"
      isPopupOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="input__field">
        <input
          required
          id="avatar-url-input"
          name="link"
          value={avatar}
          ref={avatarRef}
          onChange={handleAvatarChange}
          type="url"
          placeholder="URL de la imagen"
          className="input__form input__description input__description_gallery"
        />
        <span className="input__form-error avatar-url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
