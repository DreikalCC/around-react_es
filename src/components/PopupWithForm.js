export function PopupWithForm(props) {
const isOpen = props.isPopupOpen;
const onClose = props.onClose;
  return (
    <section id={`${props.name}`} className={isOpen ? 'popup edit popup_active' : 'popup edit'} >
      <form novalidate name={`${props.name}`} className="edit__form">
        <h3 className="edit__title">{`${props.title}`}</h3>
          <fieldset className="input">
            <label style={{ display: `${props.display}`}} className="input__field">
              <input  id={`${props.name}-name-input`}
              name="name"
              required
              type="text"
              placeholder={`${props.holderName}`}
              className="input__form input__name"
              minlength="2"
              maxlength="40"/>
              <span className={`input__form-error ${props.name}-name-input-error`}></span>
            </label>
            <label className="input__field">
              <input id={`${props.name}-${props.type}-input`}
              name="about"
              required
              type={`${props.type}`}
              placeholder={`${props.holderAbout}`}
              className="input__form input__description"
              minlength="2"
              maxlength="200"/>
              <span className={`"input__form-error ${props.name}-desc-input-error"`}></span>
            </label>
          </fieldset>
          <button type="submit" className="edit__submit-btn">{`${props.button}`}</button>
          <a id={`${props.name}`} onClick={onClose} className="popup__close"></a>
      </form>
      <div id={`${props.name}__overlay`} className="popup__overlay"></div>
    </section>
  )
}