import './Header.css'
import Avatar from './Avatar/Avatar';
import SignInModal from '../signInModal';
import { useState } from 'react';


const Header = (props) =>
{
    const [showModal, setShowModal] = useState(false);
    const clickEventHandler = () => {
        setShowModal(true)
    }

    const closeModalHandler = (value) => {
        setShowModal(value)
    }
    return(
    <header className='header'>
        <button onClick={clickEventHandler} className='signin-button'>Sign In</button>
        <Avatar logo = {props.logo}></Avatar>
        {showModal && <SignInModal onClose={closeModalHandler} ></SignInModal>}
        <h1>Welcome to Foodistan</h1>
        <p>Savor the Flavorful Symphony at Foodstan - Where Taste Takes Center Stage</p>
    </header>
    )
}

export default Header;