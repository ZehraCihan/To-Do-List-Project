import React from "react";

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div>
      {todo.text}
      <button onClick={() => deleteTodo(index)}>Sil</button>
    </div>
  );
}

export default TodoItem;
