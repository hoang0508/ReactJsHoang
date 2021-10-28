import React from "react";
import AddTodo from "./AddTodo";
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
        <AddTodo />
        <div className="list-todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <div class="todo-btn">
                    <button className="button button--edit">Edit</button>
                    <button className="button button--dele">Delete</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
