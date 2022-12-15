import React, { useEffect } from 'react';
import { PopupWithForm } from './PopupWithForm';

export function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  const [avatar, setAvatar] = React.useState('');

  useEffect(() => {
    avatarRef.current = avatar;
  }, [avatar]);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current,
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
