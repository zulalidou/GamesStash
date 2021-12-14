import '../styles/home.css';
import GameBlock from './GameBlock';
import TetrisImg from '../images/tetris.png';


const Home = () => {
    return (
        <div className='home-container'>
            <GameBlock name='Tetris' img={TetrisImg}/>
        </div>
    )
}


export default Home;
