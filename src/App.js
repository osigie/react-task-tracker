import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react";



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

  return (
    <div className="container">
 {/* <Header title = "it is what it is" txt = {{color: "green", backgroundColor: "grey"}} /> */}
 {/* <Header title = "it is what it is" > </Header> */}
 <Header />
 <Tasks tasks = {tasks}/>
    </div>
  ); 
}

export default App;
