
const Header = ({title, txt}) => {
  return (
  <header>
     <h1 style= {txt}>{title}</h1>  
  </header> 
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}


const defaultStyle = {
    color: "white", backgroundColor:"red"
}
export default Header




