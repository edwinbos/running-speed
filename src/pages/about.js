import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import './index.css'

const SecondPage = () => (
  <Layout>
    <div class="page">
      <div class="page__header">
        <Link class="page__back" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M80 50.003c-.031-.603-.247-1.077-.531-1.375l-18-19c-.828-.832-2.068-.798-2.828-.078-.761.72-.798 2.067-.078 2.828l14.78 15.625H22a2 2 0 0 0 0 4h51.344L58.563 67.628c-.72.76-.658 2.082.078 2.828.76.771 2.108.683 2.828-.078l18-19c.475-.486.5-.898.531-1.375z"/></svg>
        </Link>
      </div>
      <div class="page__content">
        <h1>Running Speed</h1>
        <p>Why a running speed calculator app? Because I needed one myself.</p>
        <p>Just install it on you phone and you can use it even when you do not have an internet connection. 
          If you are running in the middle of nowhere you can still calulate your running speed.</p>
        <p>Made by <a href="https://www.edwinbos.nl" title="Edwin Bos - Front-end Developer &amp; UI/UX designer">Edwin Bos</a></p>
      </div>
    </div>
    
  </Layout>
)

export default SecondPage
