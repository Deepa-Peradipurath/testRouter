import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>PUSH NOTIFICATIONS POC 2</h1>
    <button id="register">Sign up for notifications</button>
    <br/><br/>
    <button id="optout">Opt out of notifications</button>
    <br/><br/>
    <button id="optin_status">Click to see Opt in/Opt out status</button>
    <br/><br/>
    <b>Opt in status: <div id="statusArea"> </div></b>
    <br/><br/>
    <b>Channel Id: <div id="channelId"> </div></b>
    <br/><br/>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/app/">App</Link>
  </div>
)

export default IndexPage
