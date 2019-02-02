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
        background_color: '#4169e1',
        theme_color: '#4169e1',
        display: 'standalone',
        icon: 'src/images/fetch-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
