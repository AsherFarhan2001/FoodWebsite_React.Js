import './Header.css'
import Avatar from './Avatar/Avatar';

const Header = (props) =>
{
    return(
    <header className='header'>
        <Avatar logo = {props.logo}></Avatar>
        <h1>Welcome to Foodistan</h1>
        <p>Savor the Flavorful Symphony at Foodstan - Where Taste Takes Center Stage</p>
    </header>
    )
}

export default Header;