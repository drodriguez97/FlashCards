import { useState } from 'react'
import FlashCard from "./FlashCard"

const FlashCardList=(props) => {
    const [card, setClick] = useState(0);
    const [anothercard, setAnotherClick] = useState(false);
    const clickNext=() => setAnotherClick(false);

    const cards=[
        <FlashCard title="One" question="First Response" answer="Answer" flipped={anothercard} />,
        <FlashCard title="Two" question="Second Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Three" question="Third Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Four" question="Fourth Response" answer="Shown Answer" flipped={anothercard} />,
        <FlashCard title="Five" question="Fifth Response" answer="Shown Answer" flipped={anothercard} />,
    ]

    const cardText=[
        {title:"Quantity", question:"How many states are in the United States", answer:"Fifty", flipped:{setAnotherClick}},
        {title:"Largest", question:"What is the largest state in the US", answer:"Alaska", flipped:{setAnotherClick}},
        {title:"Highest", question:"Which state has the highest population", answer:"California", flipped:{setAnotherClick}},
        {title:"Capital", question:"What city was the first capital of the United States?", answer:"New York City", flipped:{setAnotherClick}},
        {title:"Discovery", question:"Who first discovered America?", answer:"Leif Erikson", flipped:{setAnotherClick}},
        {title:"Monument", question:"Who paid for the Statue of Liberty?", answer:"France", flipped:{setAnotherClick}},
        {title:"First Car", question:"Who invented the first car in America?", answer:"Henry Ford", flipped:{setAnotherClick}},
        {title:"Money", question:"Whose face is on the hundred dollar bill?", answer:"Benjamin Frankiln", flipped:{setAnotherClick}},
        {title:"Presidents", question:"Who was the first president of the United States?", answer:"George Washington", flipped:{setAnotherClick}},
        {title:"Wealth", question:"Who was the richest man in US history?", answer:"John D. Rockefeller", flipped:{setAnotherClick}},
    ]
    const[myCard,setCard]=useState(<FlashCard title={cardText[0].title} question={cardText[0].question} answer={cardText[0].answer} flipped={false} />)
    const NextFlashCards=() => {
        const randomCards=Math.floor(Math.random()*cardText.length);
        setAnotherClick(false);
        setClick(randomCards);
        setCard(<FlashCard title={cardText[randomCards].title} question={cardText[randomCards].question} answer={cardText[randomCards].answer} flipped={false} />)
    }
    return (
        <div>
            <h4><i>Number of Cards: </i> {cardText.length}</h4>
            {myCard}
            <button onClick={NextFlashCards}>⭢</button>
        </div>
    )
}

export default FlashCardList;