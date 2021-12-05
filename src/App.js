import React, { Component } from "react"
import AddUser from "./components/AddUser.js"
import Users from "./components/Users.js"
import logo from "./logo.svg"
import "./App.css"

/*
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}*/

class App extends Component {

  constructor(props){
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    deleteUser(id){
      let updatedUsers = this.state.users;

      updatedUsers = updatedUsers.filter(user => user.id !== id);
      this.setState({
        users: updatedUsers
      });

    }


    this.state = {
      users : [{
        id : 1,
        name: "Mehmet",
        email: "mehmet@mehmetalicakir.com"
      },
      {
        id : 2,
        name: "Ali",
        email: "ali@mehmetalicakir.com"
      },
      {
        id : 3,
        name: "Cakir",
        email: "cakir@mehmetalicakir.com"
      },
    ]
    };


  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h4>Add New User Form</h4>
            <AddUser />
            <hr/>
            <h4>User List</h4>
            <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
        </header>
      </div>
    )
  }
}



export default App
