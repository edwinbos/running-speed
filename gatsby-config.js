module.exports = {
  siteMetadata: {
    title: 'Fetch',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fetch',
        short_name: 'Fetch',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333333',
        display: 'standalone',
        icon: 'src/images/fetch.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
