import React from "react";
import "./ListTodo.scss";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing homewwork" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bug" },
    ],
  };
  render() {
    let { ListTodos } = this.state;
    // let listTodos = this.state.listTodos;
    return (
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" />
          <button type="button button--add">Add</button>
        </div>
        <div className="list-todo-content">
          <div className="todo-child">
            Todo 1<button className="button button--edit">Edit</button>
            <button className="button button--dele">Delete</button>
          </div>
          <div className="todo-child">
            Todo 1<button className="button button--edit">Edit</button>
            <button className="button button--dele">Delete</button>
          </div>
          <div className="todo-child">
            Todo 1<button className="button button--edit">Edit</button>
            <button className="button button--dele">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodo;
