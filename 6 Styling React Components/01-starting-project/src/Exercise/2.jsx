// function App() { //1st version
//     const[checked,setChecked]=React.useState('')
//     function handleYes(){
//         setChecked('Yes');
//     }
//     function handleNo(){
//         setChecked('No');
//     }
//   return (
//     <div id="app">
//       <h1 className={checked==='Yes'? 'highlight-green':checked==='No'? 'highlight-red':''}
//       >CSS is great!</h1>
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
//cleaner version
function App() {
    const[nameOfClass,setNameOfClass]=React.useState('')
  return (
    <div id="app">
      {/* <h1 className={nameOfClass}> */}
      <h1 className={nameOfClass ? nameOfClass:''}
      >CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>setNameOfClass('highlight-green')}>Yes</button>
        </li>
        <li>
          <button onClick={()=>setNameOfClass('highlight-red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

