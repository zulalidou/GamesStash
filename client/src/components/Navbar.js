import {Link} from 'react-router-dom';
import '../styles/navbar.css';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <Link to='/' id='navbar-logo-link'>
                    <span id='website-name-char-1'>G</span>
                    <span id='website-name-char-2'>A</span>
                    <span id='website-name-char-3'>M</span>
                    <span id='website-name-char-4'>E</span>
                    <span id='website-name-char-5'>S</span>
                    &nbsp;
                    <span id='website-name-char-6'>S</span>
                    <span id='website-name-char-7'>T</span>
                    <span id='website-name-char-8'>A</span>
                    <span id='website-name-char-9'>S</span>
                    <span id='website-name-char-10'>H</span>
                </Link>
            </div>
        </div>
    )
}


export default Navbar;
