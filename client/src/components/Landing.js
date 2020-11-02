import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  state = { userName: "", password: "" };

  resetData() {
    this.setState({ userName: "", password: "" });
  }

  onSubmit = (e) => {
    const { userName, password } = this.state;
    e.preventDefault();
    this.props.logIn(userName, password);
    this.resetData();
  };

  onReset = (e) => {
    e.preventDefault();
    this.resetData();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  renderWelcomeScreen() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey lighten-5">
            <div className="card-content black-text">
              <span className="card-title">Welcome <b>{this.props.auth.name}</b></span>
              <p>In this app you can search for your favourite planets</p>
            </div>
            <div className="card-action">
              <Link to="search">Search Planet</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderErr() {
    const { err } = this.props;
    return err ? (
      <div className="row">
        <div className="col s12">
          <div className="card red lighten-4">
            <div className="card-content black-text">
              <p>{err}</p>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }

  render() {
    if (this.props.progress) {
      return (
        <div style={{ textAlign: "center" }}>
          <h4>Please Wait:</h4>

          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      );
    }

    if (this.props.auth) {
      return this.renderWelcomeScreen();
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h4>Please Log in:</h4>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="userName"
                type="text"
                className="validate"
                onChange={this.onChange}
                value={this.state.userName}
              />
              <label for="username">User Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="password"
                type="password"
                className="validate"
                onChange={this.onChange}
                value={this.state.password}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button
              className="yellow white-text darken-3 btn-flat left"
              onClick={this.onReset}
            >
              Reset
            </button>

            <button className="green btn-flat white-text right">LogIn</button>
          </div>
          <div>
            <span>UserName: <b>Luke Skywalker</b>  </span>
            <span>Password: <b>19BBY</b></span>
          </div>
        </form>
        {this.renderErr()}
      </div>
    );
  }
}

export default Landing;
