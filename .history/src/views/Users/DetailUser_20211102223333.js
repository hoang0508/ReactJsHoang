import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    // console.log(">>> check id:", )
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log(">> check respon", res);
    }
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
