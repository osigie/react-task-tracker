import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react";
import AddTask from "./components/AddTask"


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 7:30pm",
      reminder: true,
    },
    { id: 3, text: "Food Shopping", day: "Feb 5th at 1:30pm", reminder: false },
  ]);

//Delete Task
const deleteTask= (id)=>{
setTasks(tasks.filter((each)=>each.id !== id))
}

//Toggle Reminder 
const toggleReminder= (id)=>{
setTasks(tasks.map((each)=> each.id === id ? {...each, reminder: !each.reminder}: each))
}

  return (
    <div className="container">
      <AddTask/>
 {/* <Header title = "it is what it is" txt = {{color: "green", backgroundColor: "grey"}} /> */}
 {/* <Header title = "it is what it is" > </Header> */}
 <Header />
 {(tasks.length === 0) ? "No tasks" :  <Tasks tasks = {tasks} deleteEach = {deleteTask} toggled = {toggleReminder}/>}

    </div>
  ); 
}

export default App;
