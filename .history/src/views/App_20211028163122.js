import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
/**
 * 2 components: class component / function component (function, arrow)
 * JSX
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p> Hello world with Reactjs huy hoang</p> <MyComponent /> */}
        <p>Todo List App's width Reactjs</p>
        <ListTodo />
      </header>{" "}
    </div>
  );
}

export default App;
