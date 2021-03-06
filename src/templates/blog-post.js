import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import { GatsbyImage } from 'gatsby-plugin-image'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

import 'katex/dist/katex.min.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <DefaultLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="clearfix post-content-box">
          <article className="article-page">
            <div className="page-content">
              {post.frontmatter.img && (
                <div className="page-cover-image">
                  <figure>
                    <GatsbyImage
                      image={
                        post.frontmatter.img.childImageSharp.gatsbyImageData
                      }
                      className="page-image"
                      key={
                        post.frontmatter.img.childImageSharp.gatsbyImageData.src
                      }
                      alt="My projects in my portfolio"
                      aria-hidden="true"
                      tabindex="-1"
                    />
                  </figure>
                </div>
              )}
              <div className="wrap-content">
                <header className="header-page">
                  <h1 className="page-title">{post.frontmatter.title}</h1>
                  <div className="page-source">
                    {post.frontmatter.source && post.frontmatter.demo ? (
                      <ul>
                        <li>
                          <a
                            href={`https://github.com/${post.frontmatter.source}`}
                            aria-label="Find the source code on github here"
                          >
                            <span>Source</span>
                            <span>
                              <i className="fa fa-github" aria-hidden="true" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`http://${post.frontmatter.demo}`}
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
                      <ul>
                        <li>
                          <a
                            href={`https://github.com/${post.frontmatter.github}`}
                            target="_blank"
                            aria-label="My github to see all the projects that I have done"
                          >
                            <span>Github</span>
                            <span>
                              <i className="fa fa-github" aria-hidden="true" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`mailto:${post.frontmatter.email}`}
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
                </header>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="page-footer">
                  <div className="page-tag">
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag) => (
                        <span key={tag}># {tag}</span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY, MMM DD")
        demo
        source
        github
        email
        tags
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
`
