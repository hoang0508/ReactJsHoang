import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
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

  handleViewDetailUser = (user) => {
    console.log("check user: ", user);
  };
  render() {
    let { ListUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name} - {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
