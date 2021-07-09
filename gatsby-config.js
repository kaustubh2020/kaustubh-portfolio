module.exports = {
  siteMetadata: {
    title: 'Kaustubh Jaiswal | Portfolio',
    author: 'Kaustubh Jaiswal',
    description: 'Software Engineer & Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kaustubh Jaiswal | Portfolio',
        short_name: 'Kaustubh Jaiswal',
        start_url: '/',
        background_color: '#FDC307',
        theme_color: '#FDC307',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
