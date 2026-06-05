import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./component/GameOver";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';

  }
  return currentPlayer;
}

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function App() {
  // const [gameTurns,setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  // function handelSelectSquare(rowIndex,colIndex){
  //   setActivePlayer((currentActivePlayer)=>currentActivePlayer === 'X' ? 'O' : 'X')
  //   setGameTurns((prevTurns)=>{
  //     let currentPlayer='X';
  //     if(prevTurns.length >0 && prevTurns[0].player==='X'){
  //       currentPlayer='O';
  //     }
  //     const updatedTurns=[{square:{row : rowIndex, col : colIndex},player:currentPlayer},
  //       ...prevTurns];
  //     return updatedTurns;
  //   })
  // }
  const [players, setPlayers]=useState({
    X : 'Player Alpha',
    O : 'Player Sigma'
  })
  function handlePlayerNameChange(symbol,newName){
    setPlayers;

  }
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

let gameBoard = [...initalGameBoard.map(array=>[...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner=null;

  // const[hasWinner,setHasWinner]=useState(false);
  for (const combinations of WINNING_COMBINATIONS) {
    const firstBoxSymbol =gameBoard[combinations[0].row][combinations[0].column];
    const secondBoxSymbol=gameBoard[combinations[1].row][combinations[1].column];
    const thirdBoxSymbol=gameBoard[combinations[2].row][combinations[2].column];
    if(firstBoxSymbol && firstBoxSymbol==secondBoxSymbol && firstBoxSymbol==thirdBoxSymbol){
 winner=firstBoxSymbol;
    }
  }
  const hasDraw=gameTurns.length==9 && !winner;
  function handelSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns];
      return updatedTurns;
    })
  }
 function handleReMatch(){
  setGameTurns([]);
 }

  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player Alpha" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player Sigma" symbol="O" isActive={activePlayer === 'O'} />

        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleReMatch}/>}
        <GameBoard onSelectSquare={handelSelectSquare} board={gameBoard} />
      </div>


      <Log turns={gameTurns} />
    </main>
  )
}

export default App
