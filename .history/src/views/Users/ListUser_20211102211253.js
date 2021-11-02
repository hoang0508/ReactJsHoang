import React from "react";
import axios from "axios";

class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //   console.log("Check res: ", res.data.data);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      ListUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  render() {
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          <div className="child">Huy Hoàng</div>
          <div className="child">Huy Hoàng</div>
          <div className="child">Huy Hoàng</div>
        </div>
      </div>
    );
  }
}

export default ListUser;
