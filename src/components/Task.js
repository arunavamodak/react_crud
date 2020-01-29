import React, { useState } from "react";
import Form from "./Form";

function Task({ editTodo, todo, deleteTodo }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = text => {
    editTodo(todo.id, text);
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <Form onSubmit={handleEdit} value={todo.task} buttonText="Update" />
      ) : (
        <span className="taskSpan">
          {todo.task}&nbsp;
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            edit
          </button>
          &nbsp;
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </span>
      )}
    </div>
  );
}

export default Task;
