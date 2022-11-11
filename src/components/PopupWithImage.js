export function PopupWithImage(props) {
  const isOpen = props.isPopupOpen;
  const onClose = props.onClose;
    return (
      <div id="image" className={isOpen ? 'popup popup_active' : 'popup'}>
          <div id="popup__overlay" className="popup__overlay"></div>
          <div className="popup__group">
            <img className="popup__image" src={props.link} alt={props.name} />
            <h3 className="popup__name">{props.name}</h3>
            <button id="image" onClick={onClose} className="popup popup__close"></button>
          </div>
        </div>
    )
  }