import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleClickAdd = () => {
    alert("kkk");
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          className="add-input"
          onChange={(event) => this.handleOnChange(event)}
        />
        <button
          type="button"
          className="button button--add"
          onClick={() => this.handleClickAdd()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
