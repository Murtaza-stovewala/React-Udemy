import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName]= useState(initialName);
  const [isEditing, setisEditing] = useState(false);

  function handelClick() {
    setisEditing((editing)=>!editing);
    //setisEditing((editing)=>!editing);
  }

  function handleChange(event){
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange} ></input>);
    btnCaption="Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {/* 1st {! isEditing ? <span className="player-name">{playerName}</span> :<input className="player-name"></input> } */}        {/* 2nd {! isEditing && <span className="player-name">{name}</span>  }{isEditing && <input className="player-name"></input> } */}

        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelClick}>{btnCaption}</button>
    </li>
  )

}