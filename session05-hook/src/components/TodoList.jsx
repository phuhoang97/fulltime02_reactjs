import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // const handleEditTodo = (todo, index) => {
  //   setEditingTodo({
  //     todo: todo,
  //     index: index,
  //   });
  //   setUpdatedTodo(todo);
  // };

  // const handleUpdateTodo = () => {
  //   const newTodos = [...todos];
  //   newTodos[editingTodo.index] = updatedTodo;
  //   setTodos(newTodos);
  //   setEditingTodo(null);
  //   setUpdatedTodo("");
  // };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <>
              {todo}
              <button>Edit</button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
