import Button from './Button';

const Header = ({title, clickMe, showAdd}) => {
 
  return (
  <header className= "header">
     <h1>{title}</h1>  
<Button color= {showAdd? "red" : "green"} text = {showAdd? "Close" : "Open"} clickMe={clickMe} showAdd = {showAdd}/>

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




