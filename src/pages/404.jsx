import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Layout from '../components/layout'

const NotFoundPage = () => {
  const siteTitle = 'Kaustubh Jaiswal | Page not found'
  const siteDescription = 'Error 404'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main" style={{ marginTop: '-20px' }}>
        <h1>
          PAGE NOT FOUND
          <span role="img" aria-label="sheep">
            🙄
          </span>
        </h1>
        <Link to="/" className="button" style={{ marginBottom: '10px' }}>
          Goto Homepage
        </Link>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}
export default NotFoundPage
