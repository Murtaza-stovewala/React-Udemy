import React from "react";

export function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  }

  return state;
}

function App() {
  const [counterState, dispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  //   const [counter, setCounter] = React.useState({
  //     count: 0,
  //   });
//   function HandleCount(id) {
//     if (id === 1) {
//       dispatch({
//         type: "INCREMENT",
//       });
//     } else if (id === 0) {
//       dispatch({
//         type: "RESET",
//       });
//     } else {
//       dispatch({
//         type: "DECREMENT",
//       });
//     }

//     // setCounter((prevCount) => {
//     //   let newCount = prevCount.count;
//     //   if (id === 1) {
//     //     newCount += 1;
//     //   } else if (id === 0) {
//     //     newCount = 0;
//     //   } else {
//     //     newCount -= 1;
//     //   }
//     //   return {
//     //     count: newCount,
//     //   };
//     // });
//   }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        {/* <button onClick={() => HandleCount(1)}>Increment</button>
        <button onClick={() => HandleCount(-1)}>Decrement</button>
        <button onClick={() => HandleCount(0)}>Reset</button> */}
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREMENT",
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "RESET",
            })
          }
        >
          Reset
        </button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
