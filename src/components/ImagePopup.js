export function ImagePopup(props) {
  return (
    <div id="popup" className="popup">
      <div id="popup__overlay" className="popup__overlay"></div>
      <div className="popup__group">
        <img className="popup__image" src="#" alt="Location"/>
        <h3 className="popup__name">Imagen</h3>
        <button id="popup__close" className="popup popup__close"></button>
      </div>
    </div>
  )
}