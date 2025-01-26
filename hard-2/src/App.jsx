import ToDoList from "./components/ToDoList";
import TaskDetail from "./components/TaskDetail";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
