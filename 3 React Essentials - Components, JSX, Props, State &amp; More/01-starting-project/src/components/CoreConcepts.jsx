
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
import "./CoreConcepts.css";
export default function CoreConcepts({image,title,description}){ 
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}