// import React from 'react'; // 1st version

// function App() {
//     const[checked,setChecked]=React.useState('');
//     function handleYes(){
//         setChecked('Yes');
//     }
//     function handleNo(){
//         setChecked('No');
//     }
//     return (
//     <div id="app">
//       <h1 
//       style={{
//         color:!checked ? 'white':checked==='No'?'red':'green',
//       }}>CSS is great!</h1>
//       <menu>
//         <li>
//           <button onClick={handleYes}>Yes</button>
//         </li>
//         <li>
//           <button onClick={handleNo}>No</button>
//         </li>
//       </menu>
//     </div>
//   );
// }

// export default App;
 //2nd version
 import React from 'react';

function App() {
    const[color,setcolor]=React.useState('white');
    return (
    <div id="app">
      <h1 
      style={{
        color
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>setcolor('green')}>Yes</button>
        </li>
        <li>
          <button onClick={()=>setcolor('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
