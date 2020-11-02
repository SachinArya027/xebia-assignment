import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    if (!this.props.auth) {
      return (
        <li>
          <Link to="/">Login</Link>
        </li>
      );
    }

    return [
      <li key="1">
        <Link to="/search">
          <i className="material-icons">search</i>
        </Link>
      </li>,
      <li key="2">
        <Link to="/" onClick={this.props.logOut}>
          Logout
        </Link>
      </li>,
    ];
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={"/"} className="left brand-logo" style={{ marginLeft: 10 }}>
            StarWars
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default Header;
