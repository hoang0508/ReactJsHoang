import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div className="add-todo">
        <input type="text" className="add-input" />
        <button type="button" className="button button--add">
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
