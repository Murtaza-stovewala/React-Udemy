jsx is useed to write markup language in javascript and it is used in most react and non react projects but it is not supported by the browser.
app.jsx is a react component it is a simple javascript function for a react component it must follow a two rule :-
1) Name sttarts with uppecase letter for eg: Hello, MyWorld
2) retuen "Renderable" content ..typicallly to-be-rendered HTML markup 
i.e create a javascript function with upper case letter and return some jsx code
                          \ 
most important ------------\
                            \
                             > REACT IS JUST A JAVASCRIPT COMPONENT
                            /
most important ------------/
                          /


---------------------------------------->A Closer Look: Components & File Extensions<------------------------------------------------
At this point, you've built a first custom component and you, of course, also worked with the App component.
For the moment, both components are stored in the App.jsx file (this will change later though).
.jsx is a file extension that's not supported by the browser! It's working because you're working in a React project that supports this special extension. Because this extension "tells" the underlying build process (which is running behind the scenes when the development server is running) that a file contains JSX code (which is also not supported by browsers).
It's important to understand that it's really just that build process that cares about this extension.
And therefore, you'll also find React projects that don't use .jsx but instead just .js as a file extension. And in those .js files, you'll also find JSX code. Because it simply depends on the underlying build process which extension is expected when using this JSX syntax in a file.
Since it doesn't work in the browser either way, there is no hard rule regarding this. Instead, you'll find projects that require .jsx (like the project setup we use in this course) and you'll find projects that also support .js (with JSX code inside).
I'm emphasizing this here so that you're not confused if you encounter React projects that don't use .jsx files.
In addition, you'll also find projects that require the file extension as part of file imports (e.g., import App from './App.jsx') and you'll find other projects that don't require this (i.e., there, you could just use import App from './App').
This, again, has nothing to do with the browser or "standard JavaScript" - instead it simply depends on the requirements of the code build process that's part of the project setup you chose.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Create root and render methods are reponsible for rendering a single component a root component (in this case a app component) in which they contain as mainy nested component as needede 

THE CUSTOM COMPOENT ARE NOT SHOWING THROUGH ACTUAL RENDERED DOM COMONENT THEIR YOU FIND DEFAULT HTML COMNPONET 



---------------------------------------Component-----------------------------------------------------------------------------------------------
advantage of component is they are usable before restructure import reactLogo from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data.js"
// import components from "./assets/components.png";
// import jsmimg from "./assets/jsx-ui.png";
// import propsImg from "./assets/config.png";
// import stateImg from "./assets/state-mgmt.png";



const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function NotHeader() {
  const discription = reactDescriptions[genRandomInt(2)];
  return(
    <header>
    <img src={reactLogo} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {discription} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}
// in this we can use destructuring also both will works same
// function CoreConcepts(props){ 
//   return(
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )

// }
function CoreConcepts({image,title,description}){ 
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}
function App() {
  return (
    <div>
    <NotHeader />

      <main>
        <section id="core-concepts">
          <ul>
            {/* <CoreConcepts
             title="Components" 
             discription="The core UI building block - compose the user interface by combining multiple components." 
             image={components} />
            <CoreConcepts
             title="Props" 
             discription="Make components configurable (and therefore reusable) by passing input data to them." 
             image={propsImg}/>
            <CoreConcepts
             title="JSX" 
             discription="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered." 
             image={jsmimg}/>
            <CoreConcepts
             title="State" 
             discription="React-managed data which, when changed, causes the component to re-render & the UI to update." 
             image={stateImg}/> */}
            <CoreConcepts
             title={CORE_CONCEPTS[0].title }
             description={CORE_CONCEPTS[0].description}
             image={CORE_CONCEPTS[0].image} /> 
             {/* this is longer and not optimal approach  */}
             <CoreConcepts {...CORE_CONCEPTS[1]} />
             <CoreConcepts {...CORE_CONCEPTS[2]} />
             <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
          
        </section>
        <h2>Time to get RED started!</h2>
      </main>
    </div>
  );
}

export default App;
-----------------------------------------------------------------------------------------------------------------------------------------------------
