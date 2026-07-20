import React from 'react';

// don't change the Component name "App"
export default function App() {
     const[currColor,setcolor]=React.useState(false);
     function styled(){
         setcolor(ison=>!ison)
     }
         
    return (
        <div>
            <p style={{
              color:!currColor ? "white":"red"
            }}>Style me!</p>
            <button onClick={styled}>Toggle style</button>
        </div>
    );
}
