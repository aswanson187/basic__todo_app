import TodoItem from "./TodoItem";

const TodoList = ({ Todos, removeTodo, editTodo, toggleComplete }) => {
  const list = () => {
    return Todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />
    ));
  };

  const todoList = list();
  return (
    <>
      {todoList.length === 0 && <p>No Items Found</p>}
      <ul>{todoList}</ul>
    </>
  );
};

export default TodoList;
