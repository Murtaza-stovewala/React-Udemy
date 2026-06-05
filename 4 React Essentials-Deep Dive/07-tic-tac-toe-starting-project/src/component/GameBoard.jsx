import { useState } from "react";

// const initalGameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ] // multi dimensional array is what we want moved to app.jsx for winnign combination 


export default function GameBoard({onSelectSquare,board}) {
    // const[gameBoard, setGameBoard ]= useState(initalGameBoard);
    // function handelSelectSquare(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard= [...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedGameBoard;
    //     }
            
    //     )
    //     onSelectSquare();
    // } // we will lift this step in game turns in app.jsx


    // let gameBoard =initalGameBoard;
    // for(const turn of turns){
    //     const  {square ,player} =turn;
    //     const  {row ,col} =square;
    // gameBoard[row][col]=player;
    // } // moved to app.jsx for winnign combination

    return <ol id="game-board">
        {board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}>
                    {/* <button onClick={()=>handelSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button> */}
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null} >{playerSymbol}</button>
                </li>)}
            </ol>
        </li> )}
    </ol>
}