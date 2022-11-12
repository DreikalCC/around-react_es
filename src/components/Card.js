export function Card (props) {

    return(
    <>
      { props.map((item, index)=>(
        <div className="element" key={index}>
          <img className="element__image" onClick={()=>props.__proto__.handleClick(item)} src={item.link} alt={item.name} />
          <button id="erase-btn" className="element__erase"></button>
          <div className="element__group">
            <h3 className="element__location">{item.name}</h3>
            <div className="element__like-area">
              <button className="element__like"></button>
              <span className="element__counter">{item.likes.length}</span>
            </div>
          </div>
        </div>
     )) }
    </>
    )


}