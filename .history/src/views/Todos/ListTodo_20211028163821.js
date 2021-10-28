import React from "react";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing homewwork" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bug" },
    ],
  };
  render() {
    return (
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" />
          <button type="button">Add</button>
        </div>
        <div className="list-todo-content"></div>
      </div>
    );
  }
}

export default ListTodo;
