import {Link} from 'react-router-dom';
import '../styles/game-block.css';


const GameBlock = (props) => {
    console.log(props);

    return (
        <div className='game-block'>
            <Link to={`/game/${props.name.toLowerCase()}`} className='game-link'>
                <img src={props.img} alt={props.name}/>
                <div className='game-name'>{props.name}</div>
            </Link>
        </div>
    )
}


export default GameBlock;
