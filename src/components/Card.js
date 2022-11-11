export function Card (props) {
  console.log(props)
  //const data= props.data;
  //return props.map((item)=>{
    function handleClick() {
      props.onCardClick(props.card);
    }


    return(
    <>
      <div class="element" key={props._id}>
        <img class="element__image" onClick={handleClick} src={props.link} alt={props.name} />
        <button id="erase-btn" class="element__erase"></button>
        <div class="element__group">
          <h3 class="element__location">{props.name}</h3>
          <div class="element__like-area">
            <button class="element__like"></button>
            <span class="element__counter">{props.likes.length}</span>
          </div>
        </div>
      </div>
    </>)
  //}
  //)
}