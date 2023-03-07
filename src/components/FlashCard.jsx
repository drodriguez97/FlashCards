import {useState} from "react";

const FlashCard=(props) => {
    const [flip,setFlip]=useState(props.flipped);
    const flipCard=() => setFlip(!flip);
    let cardDesign;

    let cardText;
    if(flip==false) {
        cardDesign='cardQuestion'
        cardText=<p>{props.question}</p>
    } else {
        cardDesign='cardAnswer'
        cardText= <p>{props.answer}</p>
    }
    return (
        <div className={cardDesign} onClick={flipCard}>
            <h3>{props.title}</h3>
            {cardText}
        </div>
    )
}

export default FlashCard;