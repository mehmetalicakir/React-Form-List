import React, { Component } from 'react';
class User extends Component{

  render(){

      return(
        <tr>
          <td>1</td>
          <td>a</td>
          <td>a@a.com</td>
          <td><button className="btn btn-danger btn-block">Delete</button></td>
        </tr>
      );
  }
}
export default User;
