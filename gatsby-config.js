module.exports = {
  siteMetadata: {
    title: `Calum Toogood`,
    description: `Web Developer & Photographer Based in Shetland`,
    siteUrl: `https://www.calumtoogood.com`,
    image: `https://res.cloudinary.com/dhat0b0ey/image/upload/v1590519791/portfolio/home.jpg`,
    author: `Calum Toogood`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `webdev`,
        path: `${__dirname}/src/content/webdev`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photography`,
        path: `${__dirname}/src/content/photography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `latestimages`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-grid",
            options: {
              className: "image__grid",
              gridGap: "1rem",
              margin: "20px auto",
            },
          },
          {
            resolve: `gatsby-remark-figure-caption`,
            options: {
              figureClassName: "md__figure",
              captionClassName: "md__figcaption",
              imageClassName: "md__image",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variable: true,
            weights: ['200..500']
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
