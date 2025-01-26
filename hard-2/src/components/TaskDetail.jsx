import React from "react";
import { useNavigate } from "react-router-dom";

function TaskDetail() {
  const navigate = useNavigate();

  return (
    <div className="task-detail">
      <h1>Task Details</h1>
      <p>
        This is where you can display more details about the task (e.g., task
        name, status, priority).
      </p>
      <button onClick={() => navigate("/")}>Back to List</button>
    </div>
  );
}

export default TaskDetail;
