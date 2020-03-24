import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const List = JSON.stringify(this.state);
    return (
      <div>
        <form>
          <h1>{List}</h1>
          <input
            placeholder="test@test.com"
            value={this.state.email}
            onChange={e => this.change(e)}
            type="email"
            name="email"
          />{" "}
          <br></br>
          <input
            placeholder="password"
            value={this.state.password}
            onChange={e => this.change(e)}
            type="password"
            name="password"
          />{" "}
          <br></br>
          <input
            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.change(e)}
            type="text"
            name="firstName"
          />{" "}
          <br></br>
          <input
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
            type="text"
            name="lastName"
          />{" "}
          <br></br>
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
