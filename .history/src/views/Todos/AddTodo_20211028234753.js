import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChange = (event) => {};
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => handleOnChange(event)}
        />
        <button type="button" className="button button--add">
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
