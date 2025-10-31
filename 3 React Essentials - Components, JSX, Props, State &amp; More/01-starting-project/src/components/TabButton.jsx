// export default function TabButton(props){
//    return(
//     <li><button>{props.children}</button></li>
//    )
// }  we can use this but we can also use this 
export default function TabButton({children, onSelect, isSelected}){
    
   return(
    <li><button className= {isSelected ? 'active': undefined} onClick={onSelect}>{children}</button></li>
   )
} 