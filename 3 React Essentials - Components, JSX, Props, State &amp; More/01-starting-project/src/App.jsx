import { useState } from "react";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { Component } from "react";


function App() {
  const [selectedTopic, setSelectedTopic] = useState('')
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic)
  }
  let tabContent = <div id="tab-content"> <p>Please Select a Topic!</p></div>;
  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)
  }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            {/* this is longer and not optimal approach  */}
            {/* <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />  */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic  === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic  === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* 1 st using ternary operator in single line*/}


          {/* {! selectedTopic ? <p>Please Select a Topic!</p> :<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> } */}

          {/* 2nd using AND operator in two segment*/}
          {/* { !selectedTopic && <div id="tab-content"> <p>Please Select a Topic!</p></div>  } 

          {selectedTopic && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

          {/* 3rd using Seprate Variable*/}

          {tabContent}

        </section>
        <h2>Time to get RED started!</h2>
      </main>

    </div>
  );
}

export default App;
