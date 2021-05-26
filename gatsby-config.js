module.exports = {
  siteMetadata: {
    title: `Anita Portfolio`,
    description: `I am a web developer focusing on front-end development. I always love learning new skills whether it is language or coding, as well as getting my hands dirty by applying and acquiring knowledge in a practice-first approach.
                  I feel comfortable with HTML, CSS/SASS, Vanilla JavaScritp and React. I am willing to emplement those skills and excited to enhance them as well.
                  I am from Vavatenina on the East Coast of Madagascar and currently live in Mahanoro where Onja is located. I love being around people and I enjoy collaborating and interacting with others.
    `,
    author: `Anita Rasoa`,
    siteUrl: `https://github.com/Betsimisaraka/portfolio-gatsby`,
    social: {
      twitter: ``,
      facebook: ``,
      github: `Betsimisaraka`,
      linkedin: ``,
      email: `anita.ras@onja.org`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
	      withWebp: true,
	      withAvif: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `warn`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // uncomment this and input the trackingId to enable google analytics
    // {
    // resolve: `gatsby-plugin-google-analytics`,
    // options: {
    // trackingId: `ADD YOUR TRACKING ID HERE`,
    // },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
