import "./App.css";
import "./reset.css";
import arrowUp from "./arrow-up.svg";
import arrowDown from "./arrow-down.svg";
import bin from "./bin.svg";
import github from "./github.svg";

function App() {
  return (
    <div className="to-do-list">
      <div className="task-list">
        <h1>My To-do List</h1>
        <ul>
          <li>
            <h3>#1 Task title</h3>
            <p>Task details</p>
            <img src={arrowUp} alt="arrow-up" />
            <img src={arrowDown} alt="arrow-down" />
            <img src={bin} alt="bin" />
          </li>
          <li>
            <h3>#2 Task title</h3>
            <p>Task details</p>
            <img src={arrowUp} alt="arrow-up" />
            <img src={arrowDown} alt="arrow-down" />
            <img src={bin} alt="bin" />
          </li>
          <li>
            <h3>#3 Task title</h3>
            <p>Task details</p>
            <img src={arrowUp} alt="arrow-up" />
            <img src={arrowDown} alt="arrow-down" />
            <img src={bin} alt="bin" />
          </li>
        </ul>
      </div>
      <form action="submit" className="new-task">
        <h2>Create new task</h2>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Details" />
        <button>Add</button>
        <p className="tag"><img src={github} alt="github" /> Built by <a href="#">Valentin B.B.</a></p>
      </form>
    </div>
  );
}

export default App;
