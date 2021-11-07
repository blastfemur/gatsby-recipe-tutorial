/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` }),
  (module.exports = {
    /* Your site config here */
    siteMetadata: {
      title: "Simply Recipes",
      description: "Nice and clean recipes site",
      author: "@michaelstrauss",
      person: { name: "michael", age: 51 },
      simpleData: ["item 1", "item 2", "item 3"],
      complexData: [
        { name: "michael", age: 51 },
        { name: "jennifer", age: 45 },
        { name: "makena", age: 13 },
      ],
      // complexData: [
      //   { name: [{ firstname: "michael", lastname: "strauss" }], age: 51 },
      //   { name: [{ firstname: "makena", lastname: "strauss" }], age: 13 },
      //   { name: [{ firstname: "jennifer", lastname: "strauss" }], age: 45 },
      // ],
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      // Needed for dynamic images],
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/images`,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `tx5qe40lg695`,
          // Learn about environment variables: https://gatsby.dev/env-vars
          // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          accessToken: process.env.CONTENTFUL_API_KEY,
        },
      },
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Montserrat",
                variants: ["400"],
              },
              {
                family: "Inconsolata",
                variants: ["400", "500", "600", "700"],
              },
            ],
          },
        },
      },
    ],
  })
