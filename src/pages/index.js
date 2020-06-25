import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>PUSH NOTIFICATIONS POC</h1>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/app/">App</Link>
  </div>
)

export default IndexPage
