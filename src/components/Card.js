export function Card(props) {
  function handleClick() {
    props.onCardClick(props.data);
  }

  return (
    <>
      <div className="element">
        <img
          className="element__image"
          onClick={handleClick}
          src={props.data.link}
          alt={props.data.name}
        />
        <button
          id="erase-btn"
          className="element__erase"
          onClick={props.onEraseClick}
        ></button>
        <div className="element__group">
          <h3 className="element__location">{props.data.name}</h3>
          <div className="element__like-area">
            <button className="element__like"></button>
            <span className="element__counter">{props.data.likes.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
