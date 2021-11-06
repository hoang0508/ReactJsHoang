import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import "./Demo.scss";
import logo from "../../assets/images/anh1.jpg";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  // HOC: higher order component
  handleDeleteUser = (user) => {
    console.log(">> check user delete", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {};
  render() {
    console.log(">> check props redux: ", this.props.dataRedux);
    let ListUser = this.props.dataRedux;
    return (
      <>
        <div>Hello world Homepage width HH</div>;
        <div>
          <img className="img-home" src={logo} />
        </div>
        <div>
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
