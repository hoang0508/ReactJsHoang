import React from "react";
import axios from "axios";

class ListUser extends React.Component {
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log("Check res: ", res);
    });
  }

  render() {
    return <div>Hello world from List users</div>;
  }
}

export default ListUser;
