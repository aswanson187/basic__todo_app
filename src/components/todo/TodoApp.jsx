import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [Todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todos")) || []
  );

  const addTodo = (task) => {
    setTodos((todos) => [
      ...todos,
      { id: crypto.randomUUID(), task, isComplete: false },
    ]);
  };

  const removeTodo = (id) => {
    const newList = Todos.filter((todo) => todo.id !== id);
    setTodos([...newList]);
  };

  const editTodo = (id, newTask) => {
    const newList = Todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : { ...todo }
    );
    setTodos([...newList]);
  };

  const toggleComplete = (id) => {
    const newList = Todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos((Todos) => [...newList]);
  };

  const saveList = () => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  };

  return (
    <>
      <h2>TodoApp</h2>
      <TodoForm addTodo={addTodo} />
      <button onClick={saveList}>Save</button>
      <TodoList
        Todos={Todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />
    </>
  );
};

export default TodoApp;
