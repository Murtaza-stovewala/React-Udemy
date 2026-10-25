import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import ShowProject from "./components/ShowProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    // projects: [],
    projects: JSON.parse(localStorage.getItem("projects")) || [],
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  });

  //------------------------------------------------------------------------------------------------------------------------------------------------------

  function handleStartAddingProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, //adding a new project
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
        // title: ,
        // description: ,
        // dueDate:
      };
      const updatedProjects = [...prevState.projects, newProject];
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
        // selectedProjectId:undefined,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, //adding a new project
      };
    });
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------

  function handleShowProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (proj) => proj.id === projectState.selectedProjectId,
  );

  function handleUpdateSavedProject(updatedProjectData) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((proj) => {
        if (proj.id === updatedProjectData.id) {
          return {
            ...proj,
            ...updatedProjectData,
          };
        }
        return proj;
      });
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return {
        ...prevState,
        selectedProjectId: updatedProjectData.id,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (proj) => proj.id !== prevState.selectedProjectId,
      );
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTasks = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      const updatedTasks = [...prevState.tasks, newTasks];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      const updatedTasks = prevState.tasks.filter((proj) => proj.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }
  
  //------------------------------------------------------------------------------------------------------------------------------------------------------

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        isSaved={handleAddProject}
        isCanceled={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddingProject} />
    );
  } else {
    content = (
      <ShowProject
        project={selectedProject}
        isSaved={handleUpdateSavedProject}
        isDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  // console.log(projectState);
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar
        onStartAddProject={handleStartAddingProject}
        projects={projectState.projects}
        isSlected={handleShowProject}
      />
      {content}
    </main>
  );
}

export default App;

// <main className="h-screen my-8 flex gap-8 ">
//   <ProjectSideBar onStartAddProject={handleStartAddingProject} />
//   {content}
//   {projectState.selectedProjectId ===null ?
//   (<NewProject/>) :
//   (<NoProjectSelected onStartAddProject={handleStartAddingProject}/>) }
//   {projectState.selectedProjectId === null && <NewProject />}
//   {projectState.selectedProjectId===undefined && <NoProjectSelected onStartAddProject={handleStartAddingProject} />}
// </main>

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
