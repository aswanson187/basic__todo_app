import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    task && addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder="Task..." value={task} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
