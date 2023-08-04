import { useState } from 'react';
import './Cards.css';

const Cards = (props) =>{

    const [description, setDescription] = useState("Read Full Description...");
    const [buttonContent, showButtonContent] = useState("Read More")

    const clickEventHandler = () => {
        if(buttonContent === 'Read More')
        {
            setDescription(props.description);
            showButtonContent("Hide Details");
        }
        else{
            setDescription("Read Full Description...")
            showButtonContent("Read More");
        }
    }

    let desc = <p className='p'>{description}</p>

    return(
        <div className='cards'>
            <img src = {props.image}></img>
            <div className='heading'>
                <h2>{props.title}</h2>
            </div>
            {desc }
            <div className='cards-button'>
                <button onClick={clickEventHandler}>{buttonContent}</button>
            </div>
        </div>
    )
}

export default Cards;