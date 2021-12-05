import React, { Component } from "react"
import User from "./User.js"

class Users extends Component {
  render() {

      const {users} = this.props;
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
    {
      users.map(users => {

        const {id,name,email} = user;
        return < User
          key={id}
          id={id}
          name={name}
          email={email}
        />

      })
    }
  </tbody>
</table>
    );
  }
}
export default Users;
