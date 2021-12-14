import '../styles/game-page.css'

const GamePage = (props) => {
    const pathname = window.location.pathname;
    const game = pathname.substring(pathname.lastIndexOf('/') + 1);

    console.log(pathname);
    console.log(game);

    // Make sure to check if 'game' is a valid game that the website provides

    return (
        <div>
            <div className='game-title'>{game.charAt(0).toUpperCase() + game.slice(1)}</div>
            <div className='game-window'>Gameplay Window</div>
            <div className='game-instructions'>Instructions</div>
        </div>
    )
}


export default GamePage;
