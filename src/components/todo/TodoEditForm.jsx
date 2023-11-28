import { useState } from "react";

const TodoEditForm = ({ id, task, toggleEdit, editTodo }) => {
  const [newTask, setNewTask] = useState(task);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, newTask);
    toggleEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={newTask} />
      <button>Done</button>
    </form>
  );
};

export default TodoEditForm;
