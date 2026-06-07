export default function GameOver({winner,symbol, onRestart}) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won With {symbol}!</p>}
        {!winner && <p>It's a Draw No One Won!</p>}
        <p><button onClick={onRestart}> Rematch</button></p>
    </div>
}