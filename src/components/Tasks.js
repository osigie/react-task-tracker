import Task from "./Task";
const Tasks = ({ tasks,deleteEach,toggled }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} deleteEach = {deleteEach} toggled = {toggled}/>;
      })}
    </>
  );
};

export default Tasks;
