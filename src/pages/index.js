import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Calculate from '../components/calculate'

const IndexPage = () => (
  <Layout>
    <p>Inserts information</p>
    <Calculate/>
    <br/>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
