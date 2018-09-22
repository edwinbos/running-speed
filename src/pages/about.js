import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const SecondPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Some more information</p>
    <Link to="/">Back to the calculator</Link>
  </Layout>
)

export default SecondPage
