import { FaTimes  } from "react-icons/fa";
const task = ({ task, deleteEach, toggled}) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : null} `} onDoubleClick={()=>toggled(task.id)}>
      <h3>
        {task.text} 
        <FaTimes style = {faStyle} onClick = { ()=>deleteEach(task.id)} />
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
