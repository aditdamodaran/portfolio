import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

class BlogRoll extends React.Component {
  mapTag(tag) {
    switch(tag) {
      case 'javascript': 
        return '#fff082'
      case 'vue':
        return '#54af82'
      case 'life':
        return '#7ec1ea'
      case 'college':
        return '#d38b9e'
      default:
        return '#eea0ef'
    }
  }

  render() {
    const { data } = this.props
    let { edges: posts } = data.allMarkdownRemark

    // Remove any posts without featured images from the index page
    // if (this.props.index){
    //   posts = posts.filter(post => post.frontmatter.featuredimage)
    // }

    return (
      <div className="blog-roll">
      {posts &&
        posts.map(({ node: post }) => (
          <Link
            to={post.fields.slug}
            key={post.id}
          >
          <div className="blog-post-tab">
            <article>
              <div className="date">
                <p>{post.frontmatter.date}</p>
              </div>
              <header className="title-container">
                <h2 className="title">{post.frontmatter.title}</h2>
                <div className="tags">
                  {post.frontmatter.tags && 
                  post.frontmatter.tags.map((tag, idx) => 
                    <span 
                      key={idx} 
                      class="tag"
                      style={{
                        backgroundColor : this.mapTag(tag)
                      }}
                    >
                      <span class="tag-text">{tag}</span>
                    </span>
                  )}
                </div>
              </header>
            </article>
          </div>
          </Link>
        ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} index={props.index}/>}
  />
)
