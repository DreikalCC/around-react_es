export function PopupWithForm({
  isPopupOpen,
  onClose,
  name,
  title,
  buttonText,
  children,
}) {
  return (
    <section
      id={name}
      className={isPopupOpen ? 'popup edit popup_active' : 'popup edit'}
    >
      <form name={name} className="edit__form">
        <h3 className="edit__title">{title}</h3>
        <fieldset className="input">{children}</fieldset>
        <button type="submit" className="edit__submit-btn">
          {buttonText}
        </button>
        <a id={name} onClick={onClose} className="popup__close"></a>
      </form>
      <div id={`${name}__overlay`} className="popup__overlay"></div>
    </section>
  );
}
