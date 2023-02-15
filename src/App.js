import "./App.css";
import "./reset.css";
import arrowUp from "./arrow-up.svg";
import arrowDown from "./arrow-down.svg";
import bin from "./bin.svg";
import github from "./github.svg";
import { useState } from "react";

function App() {
  // STATE
  const [tasks, setTasks] = useState([
    {
      id: "0",
      title: "Finish the to-do list",
      details:
        "I don't need to write more, just finish it. Hmmm... Finally I just need to write A LOT, just to see if my app works fine or not!",
    },
    {
      id: "1",
      title: "Work man! Just hustle!",
      details: "Just need to work more, baby!",
    },
    {
      id: "2",
      title: "I don't know what to write",
      details: "But it's ok, because it's just here to fill!",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDetails, setNewDetails] = useState("");

  // BEHAVIOR
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
    tasksCopy.push({ id, title, details });
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

  // RENDER
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
      <form action="submit" className="new-task" onSubmit={handleSubmit}>
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
  );
}

export default App;
