import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
  componentDidMount() {
    // console.log(">>> check id:", )
  }
  render() {
    console.log(">>> check props: ", this.props);
    return (
      <div>
        hello world from details user with id: {this.props.match.params.id}
      </div>
    );
  }
}

export default withRouter(DetailUser);
