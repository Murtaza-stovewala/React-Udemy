// import styled from "styled-components";

// const Button=styled.button`
// padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover{
//   background-color: #f0920e;
//   } //we dont add white space because we dont want to target child element
// `;
// export default Button
export default function Button({children, ...props}){
  return <button className="hover:bg-amber-500 outline outline-black/5 px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400" {...props}>{children}</button>
}