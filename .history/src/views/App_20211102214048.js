import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListUser from "./Users/ListUser";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DetailUser from "./Users/DetailUser";

/**
 * 2 components: class component / function component (function, arrow)
 * JSX
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p> Hello world with Reactjs huy hoang</p> <MyComponent /> */}
          {/* <ListTodo /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>{" "}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
