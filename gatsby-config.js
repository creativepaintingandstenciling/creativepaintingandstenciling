/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `Creative Painting & Stenciling`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Jeannie Mosier`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // 'src/images/gatsby-icon.png' This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lora\:400,700`, `Satisfy`],
      },
    },
    {
      resolve: `gatsby-source-facebook-graph-api`,
      options: {
        places: [`matsandmutts/photos?fields=images`], // Can be either a numeric ID or the URL ID
        // params: {
        //   fields: 'photos?fields=images', // See Facebooks API to see what you can query for
        // },
        key: 'EAAgooQ9tGVEBAFLrPpUM4gTKqoFZCMTVGOquInMWLNmqXKic4mPWnEacpBZBXeRF0c8GXKMaBKZCZCzjKuz8WZAs37lOS7Q6ydxJAf5EUwaini8RNQsnSrENGuIBbe7RKYZCjnfMeNRL2Encm2dZCSzLZAR47EFnCH5TcMtqRKR2JrBbBBtUExlGYNsrCGgrDph0a8EQLjDE6wZDZD', // You will need to create a Facebook application and go through review in order to get an API token.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
/* eslint-enable */
