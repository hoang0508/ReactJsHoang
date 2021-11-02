import React from "react";

class DetailUser extends React.Component {
  render() {
    console.log(">>> check props: ", this.props);
    return <div>hello world from details user</div>;
  }
}

export default DetailUser;
