import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import ShowProject from "./components/ShowProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    // projects: [],
    projects: JSON.parse(localStorage.getItem('projects')) || [],
  });
  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,//adding a new project
      };
    })
  }
  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,//adding a new project
      };
    })
  }
  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId,
        // title: ,
        // description: ,
        // dueDate: 
      }
      const updatedProjects = [...prevState.projects, newProject];
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
        // selectedProjectId:undefined,
      }
    })
  }
  function handleShowProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  const selectedProject = projectState.projects.find(
    (proj) => proj.id === projectState.selectedProjectId
  );

  function handleUpdateSavedProject(updatedProjectData) {
    setProjectState(prevState => {
      const updatedProjects = prevState.projects.map((proj) => {
        if (proj.id === updatedProjectData.id) {
          return {
            ...proj,
            ...updatedProjectData,
          };
        }
        return proj;
      })
      return {
        ...prevState,
        selectedProjectId: updatedProjectData.id,
        projects: updatedProjects,
      }
    });
  }
  function handleDeleteProject() {
    setProjectState(prevState => {
      const updatedProject = prevState.projects.filter(
        (proj) => proj.id !== prevState.selectedProjectId);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProject,
      }

    })
  }

  // function handleUpdateSavedProject(updatedProjectData) {
  //   setProjectState(prevState => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: updatedProjectData.id,
  //       projects: prevState.projects.map((proj) => {
  //         if (proj.id === updatedProjectData.id) {
  //           return {
  //             ...proj,
  //             ...updatedProjectData,
  //           };
  //         }
  //         return proj;
  //       }),
  //     };
  //   });
  // }
  // function handleDeleteProject() {
  //   setProjectState(prevState => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //       projects: prevState.projects.filter(
  //         proj => proj.id !== prevState.selectedProjectId
  //       ),
  //     }
  //   })

  // }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject isSaved={handleAddProject} isCanceled={handleCancelAddProject} />
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  else {
    content = <ShowProject project={selectedProject} isSaved={handleUpdateSavedProject} isDelete={handleDeleteProject} />
  }

  // console.log(projectState);
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} isSlected={handleShowProject} />
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