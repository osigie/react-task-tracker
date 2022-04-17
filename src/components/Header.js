import Button from './Button';
import {useLocation} from "react-router-dom"
const Header = ({title, clickMe, showAdd}) => {
  const location = useLocation()
  return (

  <header className= "header">
     <h1>{title}</h1>  
{location.pathname === "/" && <Button color= {showAdd? "red" : "green"} text = {showAdd? "Close" : "Open"} clickMe={clickMe} showAdd = {showAdd}/> }

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




