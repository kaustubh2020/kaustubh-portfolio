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
        name: 'kaustubh-jaiswal-portfolio',
        short_name: 'Kaustubh Jaiswal',
        start_url: '/',
        background_color: '#FFFF00',
        theme_color: '#FFFF00',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
