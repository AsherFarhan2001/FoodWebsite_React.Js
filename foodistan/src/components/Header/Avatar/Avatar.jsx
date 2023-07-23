import './Avatar.css';

const Avatar = (props) => {
    return(
        <img className='avatar' src = {props.logo}></img>
    )
}

export default Avatar;