import "./App.css";
import "./reset.css";
import { useState } from "react";
import arrowUp from "./arrow-up.svg";
import arrowDown from "./arrow-down.svg";
import bin from "./bin.svg";
import github from "./github.svg";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "Genesis",
      title: "Yo! Welcome!",
      details: "I wish this to-do list will help you reach your goals!",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDetails, setNewDetails] = useState("");

  const handleDelete = (id) => {
    const tasksCopy = [...tasks];
    const tasksCopyUpdated = tasksCopy.filter((tasks) => tasks.id !== id);
    setTasks(tasksCopyUpdated);
  };

  const handleChange = (event) => {
    if (event.target.className === "title") {
      setNewTitle(event.target.value);
    } else if (event.target.className === "details") {
      setNewDetails(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tasksCopy = [...tasks];
    const id = new Date().getTime();
    const title = newTitle;
    const details = newDetails;
    if (newTitle === "" && newDetails !== "") {
      tasksCopy.push({ id, title: details, details: "" });
    } else {
      tasksCopy.push({ id, title, details });
    }
    setNewTitle("");
    setNewDetails("");
    setTasks(tasksCopy);
  };

  const handleUp = (id) => {
    function getTaskPosition(id) {
      for (let i = 0; i < tasks.length; i++) {
        const checkId = tasks[i].id;
        if (checkId === id) {
          return i;
        }
      }
    }

    if (getTaskPosition(id) !== 0) {
      const task = tasks[getTaskPosition(id)];
      const tasksCopy = [...tasks];
      tasksCopy.splice(
        getTaskPosition(id),
        1,
        tasksCopy[getTaskPosition(id) - 1]
      );
      tasksCopy.splice(getTaskPosition(id) - 1, 1, task);
      setTasks(tasksCopy);
    }
  };

  const handleDown = (id) => {
    function getTaskPosition(id) {
      for (let i = 0; i < tasks.length; i++) {
        const checkId = tasks[i].id;
        if (checkId === id) {
          return i;
        }
      }
    }

    if (getTaskPosition(id) !== tasks.length - 1) {
      const task = tasks[getTaskPosition(id)];
      const tasksCopy = [...tasks];
      tasksCopy.splice(
        getTaskPosition(id),
        1,
        tasksCopy[getTaskPosition(id) + 1]
      );
      tasksCopy.splice(getTaskPosition(id) + 1, 1, task);
      setTasks(tasksCopy);
    }
  };

  return (
    <div className="to-do-list">
      <div className="task-list">
        <h1>My To-do List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.details}</p>
              <img
                src={arrowUp}
                alt="arrow-up"
                onClick={() => handleUp(task.id)}
              />
              <img
                src={arrowDown}
                alt="arrow-down"
                onClick={() => handleDown(task.id)}
              />
              <img src={bin} alt="bin" onClick={() => handleDelete(task.id)} />
            </li>
          ))}
        </ul>
      </div>
      <div className="new-task">
      <form action="submit" className="container" onSubmit={handleSubmit}>
        <h2>Create new task</h2>
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={handleChange}
        />
        <input
          className="details"
          type="text"
          placeholder="Details"
          value={newDetails}
          onChange={handleChange}
        />
        <button>Add</button>
        <p className="tag">
          <img src={github} alt="github" /> Built by{" "}
          <a href="https://github.com/valibert">Valentin B.B.</a>
        </p>
      </form>
      </div>
    </div>
  );
}

export default App;
