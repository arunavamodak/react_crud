import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import "../App.css";

function Home() {
  const [todos, setTodos] = useState([]);

  const addTask = todo => {
    setTodos(prev => prev.concat({ id: Date.now(), task: todo }));
  };

  const deleteTodo = id => {
    const arr = todos.filter(item => {
      if (item.id !== id) return item;
    });
    setTodos(arr);
  };

  const editTodo = (id, text) => {
    const arr = todos.map(item => {
      if (item.id === id) {
        return { id: id, task: text };
      }
      return item;
    });

    setTodos(arr);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Form onSubmit={addTask} />
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default Home;
