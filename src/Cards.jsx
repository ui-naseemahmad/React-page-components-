function Cards(props){
    return(
       <>
         <div className="cards">
             <div className="cardsImg">
                 <img src={props.val.imgsrc} alt="img1"/>
             </div>
             <div className="cardInfo">
                 <p className="subheading">{props.val.subheading}</p>
                 <p className="heading">{props.val.heading}</p>
                 <a className="link" rel='noreferrer' href={props.val.link} target='_blank'> Watch Now</a>
             </div>
         </div>
       </>

    )
}
export default Cards;