import React, {useState} from 'react'
import Board from './Board'

function Game() {
const [currentMove,setCurrentMove] = useState(0);
const xIsNext = currentMove % 2 === 0;
const [history, setHistory] = useState([Array(9).fill(null)]);
const currentSquares = history[currentMove]; 

function handlePlay(nextSquares){
    const nextHistory =[...history.slice(0,currentMove+1),nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
}


function jumpTo(nextMove){
    setCurrentMove(nextMove);
    
}

const moves = history.map((squares,move)=>{
let description;
if(move > 0){
    description='Go to Move #' +move;    
}else{
    description ='Go to game Start';
}

return(
    <li key={move}>
        <button onClick={()=> jumpTo(move)}>{description}
        
        </button>
    </li>
);
});

return (
    <div className='game'>
        <div className='game-board'>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className='game-info'>
            {moves}
        </div>
    </div>
  )
}



export default Game