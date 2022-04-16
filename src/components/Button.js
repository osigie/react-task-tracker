
 
 const Button = ({text, color, clickMe}) => {
  
   return (
    <button className= "btn" onClick={clickMe} style = {{backgroundColor: color}}>{text} </button>
   )
 }
 
 export default Button