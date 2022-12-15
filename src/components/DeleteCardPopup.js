import React, { useContext } from 'react';
import { PopupWithForm } from './PopupWithForm';

export function DeleteCardPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.card);
    props.onConfirm(props.card);
  }
  return (
    <PopupWithForm
      name="eraser"
      title="¿Estás seguro?"
      buttonText="Si"
      onSubmit={handleSubmit}
      isPopupOpen={props.isOpen}
      onClose={props.onClose}
    ></PopupWithForm>
  );
}
