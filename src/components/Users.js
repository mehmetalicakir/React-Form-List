import React, { Component } from "react"
import User from "./User.js"

class Users extends Component {
  render() {

    return(
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <User />
  </tbody>
</table>
    );
  }
}
export default Users;
