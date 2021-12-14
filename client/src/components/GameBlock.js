import {Link} from 'react-router-dom';
import '../styles/game-block.css';


const GameBlock = (props) => {
    return (
        <div className='game-block'>
            <Link to='/' className='game-link'>
                <img src={props.img} alt={props.name}/>
                <div className='game-name'>{props.name}</div>
            </Link>
        </div>
    )
}


export default GameBlock;
