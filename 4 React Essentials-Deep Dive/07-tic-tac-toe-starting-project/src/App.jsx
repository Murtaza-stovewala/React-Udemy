import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";
import { use } from "react";
function deriveActivePlaye(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
   
  }
   return currentPlayer;
}

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
  const [gameTurns, setGameTurns] = useState([]);
 const activePlayer =deriveActivePlaye(gameTurns);


  function handelSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      const currentPlayer=deriveActivePlaye(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns];
      return updatedTurns;
    })
  }


  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player Alpha" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player Sigma" symbol="O" isActive={activePlayer === 'O'} />

        </ol>

        <GameBoard onSelectSquare={handelSelectSquare} turns={gameTurns} />
      </div>


      <Log turns={gameTurns} />
    </main>
  )
}

export default App
