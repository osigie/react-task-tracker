import Button from './Button';

const Header = ({title, clickMe}) => {
 
  return (
  <header className= "header">
     <h1>{title}</h1>  
<Button color= "green" text = "Add" clickMe={clickMe}/>

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




