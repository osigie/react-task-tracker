import { FaTimes  } from "react-icons/fa";
const task = ({ task, deleteEach}) => {
  return (
    <div className="task">
      <h3>
        {task.text} 
        <FaTimes style = {faStyle} onClick = { ()=>deleteEach(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default task;

const faStyle = {
  cursor: "pointer",
  color: "red",
};
