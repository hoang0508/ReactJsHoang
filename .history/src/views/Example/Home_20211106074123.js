import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import "./Demo.scss";
import logo from "../../assets/images/anh1.jpg";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  // HOC: higher order component
  render() {
    console.log(">> check props: ", this.props);
    return (
      <>
        <div>Hello world Homepage width HH</div>;
        <div>
          <img className="img-home" src={logo} />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
