import React from 'react'
import { Link, graphql } from 'gatsby'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <DefaultLayout>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="content-box clearfix">
          {posts.map(({ node }) => {
            console.log(node)
            return (
              <article className="post" key={node.fields.slug}>
                {node.frontmatter.img &&
                  node.frontmatter.img.childImageSharp &&
                  node.frontmatter.img.childImageSharp.gatsbyImageData && (
                    <Link
                      to={node.fields.slug}
                      className="post-thumbnail"
                      aria-label="Read more about the projects"
                      tabindex="-1"
                      style={{
                        backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
                      }}
                    />
                  )}
                <div className="post-content">
                  <h2 className="post-title">
                    <Link
                      to={node.fields.slug}
                      aria-label="Read more about the projects"
                    >
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{node.excerpt}</p>
                  {node.frontmatter.source && node.frontmatter.demo ? (
                    <ul className="post-lists">
                      <li className="post-resource">
                        <a
                          href={`https://github.com/${node.frontmatter.source}`}
                          aria-label="Find the source code on github here"
                        >
                          <span>Source</span>
                          <span>
                            <i className="fa fa-github" aria-hidden="true" />
                          </span>
                        </a>
                      </li>
                      <li className="post-demo">
                        <a
                          href={`http://${node.frontmatter.demo}`}
                          aria-label="Find the finished website here"
                        >
                          <span>Demo</span>
                          <span>
                            <i
                              className="fa fa-external-link"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="post-lists">
                      <li className="post-resource">
                        <a
                          href={`https://github.com/${node.frontmatter.github}`}
                          target="_blank"
                          aria-label="My github to see all the projects that I have done"
                        >
                          <span>Github</span>
                          <span>
                            <i className="fa fa-github" aria-hidden="true" />
                          </span>
                        </a>
                      </li>
                      <li className="post-demo">
                        <a
                          href={`mailto:${node.frontmatter.email}`}
                          target="_blank"
                          aria-label="Contact me with my email here"
                        >
                          <span>Email</span>
                          <span>
                            <i
                              className="fa fa-envelope-o"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "YYYY, MMM DD")
            demo
            source
            title
            github
            email
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`
