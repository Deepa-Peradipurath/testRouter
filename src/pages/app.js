import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
//import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Details from "../components/Details"
import Default from "../components/Default"
//import Login from "../components/Login"
//import PrivateRoute from "../components/PrivateRoute"
//import Status from "../components/Status"

const App = () => (
  <div>
    <nav>
        <Link to="/app">
          Home
        </Link>
        <Link to="/app/profile">
          Profile
        </Link>
        <Link to="/app/details">
          Details
        </Link>
      </nav>
    <Router>
      <Details path="/app/details" />
      <Profile path="/app/profile" />
      <Default path="/app" />
    </Router>
    {/* <Router>
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router> */}
  </div>
)

export default App
