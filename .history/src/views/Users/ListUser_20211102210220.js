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
    console.log("Check res: ", res.data.data);
  }

  render() {
    return <div>Hello world from List users</div>;
  }
}

export default ListUser;
