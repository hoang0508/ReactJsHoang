import React from "react";
import { withRouter } from "react-router";

class DetailUser extends React.Component {
  render() {
    console.log(">>> check props: ", this.props);
    return <div>hello world from details user</div>;
  }
}

export default withRouter(DetailUser);
