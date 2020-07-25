import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div key={post.node.fields.slug} className="blog-post-tab">
        <Link to={post.node.fields.slug}>
          <div className="date">
            <p>{post.node.frontmatter.date}</p>
          </div>
          <header className="title-container">
            <h2 className="title">{post.node.frontmatter.title}</h2>
          </header>
        </Link>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    // const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `Tag: ${tag[0].toUpperCase()}${tag.substr(1)}`

    return (
      <Layout>
        <section className="tag">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="tag-content"
              >
                <h3 className="tag-title">{tagHeader}</h3>
                <div className="taglist">{postLinks}</div>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
