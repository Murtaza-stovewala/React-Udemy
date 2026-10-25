import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,//adding a new project
      };
    })
  }
  function handleCancelroject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,//adding a new project
      };
    })
  }
  
  function handleAddProject(projectData) {
    setProjectState(prevState=>{
      const projectId=Math.random()
      const newProject={
        ...projectData,
        id:projectId,
        // title: ,
        // description: ,
        // dueDate: 
      }
      return {
        ...prevState,
        projects:[...prevState.projects,newProject],
        selectedProjectId:undefined,
        // selectedProjectId:undefined,
      }
    })
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject isSaved={handleAddProject} isCanceled={handleCancelroject} />
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
// console.log(projectState);
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;

// <main className="h-screen my-8 flex gap-8 ">
//   <ProjectSideBar onStartAddProject={handleStartAddProject} />
//   {content}
//   {projectState.selectedProjectId ===null ?
//   (<NewProject/>) :
//   (<NoProjectSelected onStartAddProject={handleStartAddProject}/>) }
//   {projectState.selectedProjectId === null && <NewProject />}
//   {projectState.selectedProjectId===undefined && <NoProjectSelected onStartAddProject={handleStartAddProject} />}
// </main>