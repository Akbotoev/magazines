

export const CardsMan = ({imgsLink,title,desc,newPrice,oldPrice}) =>{
    return(
        <div className="cards">
        <div className="card__wrapper">
          <img src={imgsLink} alt='img'/>
        </div>
        <p className="card_name">{desc}</p>
        <h2 className="description__title">{title} </h2>
        <div className="price">
          <h4 className="card__price1">
            <s>{oldPrice}</s></h4>
        <h4 className="card__price">{newPrice}</h4>
        </div>
        
      </div>
   
    )
}
export default CardsMan;