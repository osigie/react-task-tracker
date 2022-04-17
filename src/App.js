import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await getFromBackEnd();
      setTasks(dataFromServer);
    };

    getData();
  }, []);

  ///Get data from mock server
  const getFromBackEnd = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    const data = await res.json();
    return data;
  };

  const getSingleData = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((each) => each.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const fetchData = await getSingleData(id);
    const updatedData = { ...fetchData, reminder: !fetchData.reminder };
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    setTasks(
      tasks.map((each) =>
        each.id === id ? { ...each, reminder: data.reminder } : each
      )
    );
  };
  // let iD = 0

  //Add Tasks
  const addMoreTask = async (task) => {
    // (tasks.length === 0) ? iD = 1 : iD = tasks.length + 1
    const res = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };
  //Togge Show Task
  const changedTask = () => {
    setShowAddTask(!showTask);
  };

  return (
    <Router>
      <div className="container">
        <Header clickMe={changedTask} showAdd={showTask} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showTask && <AddTask addMore={addMoreTask} />}

                {tasks.length === 0 ? (
                  "No tasks"
                ) : (
                  <Tasks
                    tasks={tasks}
                    deleteEach={deleteTask}
                    toggled={toggleReminder}
                  />
                )}
              </>
            }
          />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
