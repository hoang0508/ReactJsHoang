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
                <div>
                  {index + 1} {item.name}
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

export default connect(mapStateToProps)(Color(Home));
