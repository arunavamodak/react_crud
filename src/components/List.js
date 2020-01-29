import React from "react";

import Task from "./Task";

function List({ todos, deleteTodo, editTodo }) {
  console.log("todos in list", todos);

  const list =
    todos &&
    todos.map(item => (
      <li key={item.id}>
        <Task
          key={item.id}
          todo={item}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </li>
    ));

  return (
    <div>
      <h2>tasks</h2>
      <ol>{list}</ol>
    </div>
  );
}

export default List;
