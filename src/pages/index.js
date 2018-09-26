import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Calculate from '../components/calculate/calculate'

import './index.css'

const IndexPage = () => (
  <Layout>
    <div class="page page--index">
      <div class="page__header">
        <h1 class="page__header-title">Fetch</h1>
      </div>
      <div class="page__content">
        <Calculate/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
