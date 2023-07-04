import { Component, Fragment } from "react";
import NavBar from "./NavBar";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="col-lg-9">
          <h4 className="m-1 p-2 border-bottom">Login</h4>

          {/* Email Starts */}
          <div className="form-group form-row">
            <label className="col-lg-4">Email</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          {/* Email Ends */}

          {/* Password Starts */}
          <div className="form-group form-row">
            <label className="col-lg-4">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
          </div>
          {/* Password Ends */}

          <div className="text-right">
            {this.state.message}
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </Fragment>
    );
  } // end of render method

  // executes when user clicks on button
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      `http://localhost:5050/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);

    if (body.lenght > 0) {
      // success
      this.setState({
        message: <span className="text-success">Successfuly Logged-In</span>,
      });
    } else {
      // error
      this.setState({
        message: <span className="text-danger">Invalid Login Or Password</span>,
      });
    }
  };
}
