import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>
        </React.Fragment>
    );
  }
}

export default Navbar;
