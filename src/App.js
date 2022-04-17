import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react";
import AddTask from "./components/AddTask"



function App() {

  const [showTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([

  ]);

//Delete Task
const deleteTask= (id)=>{
setTasks(tasks.filter((each)=>each.id !== id))
}

//Toggle Reminder 
const toggleReminder= (id)=>{
setTasks(tasks.map((each)=> each.id === id ? {...each, reminder: !each.reminder}: each))
}
let iD = 0

//Add Tasks
const addMoreTask =(task)=>{
  (tasks.length === 0) ? iD = 1 : iD = tasks.length + 1

  const newTask = {...task, id:iD}
  setTasks([...tasks, newTask])
}
//Togge Show Task
const changedTask =()=>{
  setShowAddTask(!showTask)
}

  return (
    <div className="container">
       <Header clickMe ={changedTask
      } showAdd = {showTask}/>
       {showTask && <AddTask addMore = {addMoreTask} /> }
     
 {/* <Header title = "it is what it is" txt = {{color: "green", backgroundColor: "grey"}} /> */}
 {/* <Header title = "it is what it is" > </Header> */}

 {(tasks.length === 0) ? "No tasks" :  <Tasks tasks = {tasks} deleteEach = {deleteTask} toggled = {toggleReminder}/>}

    </div>
  ); 
}

export default App;
