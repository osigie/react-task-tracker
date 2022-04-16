import Button from './Button';

const Header = ({title}) => {
  const check = ()=>{
    console.log("clicked")
  }
  return (
  <header className= "header">
     <h1>{title}</h1>  
<Button color= "green" text = "Add" clickMe={check}/>

  </header> 
  )
}
 
Header.defaultProps = {
    title: "Task Tracker",
}


// const defaultStyle = {
//     color: "white", backgroundColor:"red"
// }
export default Header




