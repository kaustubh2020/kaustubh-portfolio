import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import error from '../assets/images/error.webp'

const NotFoundPage = () => {
  const siteTitle = 'Kaustubh Jaiswal | Page not found'
  const siteDescription = 'Error 404'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main" style={{ marginTop: "-20px" }}>
        <h1>
          PAGE NOT FOUND
          <span role="img" aria-label="sheep">
            🙄
          </span>
        </h1>
        <a href="/" className="button" style={{ marginBottom: "10px" }}>Goto Homepage</a>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <img
          src={error}
          width="40%"
          height="50%"
          alt="error"
        />
      </div>
    </Layout>
  )
}
export default NotFoundPage
