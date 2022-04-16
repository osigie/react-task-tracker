import Task from "./Task";
const Tasks = ({ tasks,deleteEach }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} deleteEach = {deleteEach}/>;
      })}
    </>
  );
};

export default Tasks;
