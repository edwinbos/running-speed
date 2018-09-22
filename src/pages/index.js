import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Calculate from '../components/calculate/calculate'

const IndexPage = () => (
  <Layout>
    <Calculate/>
    <br/>
    {/* <Link to="/about/">About</Link> */}
  </Layout>
)

export default IndexPage
