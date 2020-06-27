import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="four-oh-four">
      <h1>404 - Page Not Found<br /></h1>
      <p className="link"><Link to="/">This ain't it chief. Let's go home.</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
