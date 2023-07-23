import './Cards.css';

const Cards = (props) =>{
    return(
        <div className='cards'>
            <img src = {props.image}></img>
            <div className='heading'>
                <h2>{props.title}</h2>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default Cards;