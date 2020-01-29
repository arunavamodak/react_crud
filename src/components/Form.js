import React, { useEffect } from "react";
import { useState } from "react";

function Form({ onSubmit, value, buttonText }) {
  const [text, setText] = useState("");

  const changeText = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setText("");
          onSubmit(text);
        }}
      >
        <input type="text" value={text} onChange={changeText} />
        <input type="submit" value={buttonText || "Add Todo"} />
      </form>
    </div>
  );
}

export default Form;
