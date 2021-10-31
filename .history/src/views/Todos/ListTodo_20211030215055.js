import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing homewwork" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bug" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  hadleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodos,
    });
    toast.success("Delete success!");
    // console.log(">>> check to do: ", todo);
  };

  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editTodoCoppy = { ...this.state.editTodo };
    editTodoCoppy.title = event.target.value;
    this.setState({
      editTodo: editTodoCoppy,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;
    // let listTodos = this.state.listTodos;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // console.log(isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnchangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <div class="todo-btn">
                    <button
                      className="button button--edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="button button--dele"
                      onClick={() => this.hadleDeleteTodo(item)}
                    >
                      Delete
                    </button>
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
