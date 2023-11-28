import { useState } from "react";

import TodoEditForm from "./TodoEditForm";

const TodoItem = ({ todo, removeTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      {!isEditing && (
        <TodoNotEdit
          todo={todo}
          removeTodo={removeTodo}
          toggleEdit={toggleEdit}
          toggleComplete={toggleComplete}
        />
      )}
      {isEditing && (
        <TodoEditForm
          id={todo.id}
          task={todo.task}
          toggleEdit={toggleEdit}
          editTodo={editTodo}
        />
      )}
    </>
  );
};

const TodoNotEdit = ({ todo, removeTodo, toggleEdit, toggleComplete }) => {
  return (
    <>
      <li>{todo.task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
      <input
        type="checkbox"
        onChange={() => {
          toggleComplete(todo.id);
        }}
        checked={todo.isComplete}
      />
    </>
  );
};

export default TodoItem;
