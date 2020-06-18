import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    let { edges: posts } = data.allMarkdownRemark
    posts = posts.map(({ node: post }) => post)

    // Remove any posts without featured images from the index page
    if (this.props.index){
      posts = posts.filter(post => post.frontmatter.featuredimage)
    }

    return (
      <div>
        <div className="image-gallery is-horizontal">
            {/* Vertical LEFT Half */}
            <div className="is-vertical">


              <Link className="gallery-tile-half" to={posts[0].fields.slug}>
                <BackgroundImage className="gallery-tile-inner"
                  fluid={posts[0].frontmatter.featuredimage.childImageSharp.fluid}>
                  <div className="overlay-title">
                    <h2>{posts[0].frontmatter.title}</h2>
                    <p>Read more...</p>
                  </div>
                  <div className="overlay">
                  </div>
                </BackgroundImage>
              </Link>

              <Link className="gallery-tile-half" to={posts[1].fields.slug}>
                <BackgroundImage className="gallery-tile-inner"
                fluid={posts[1].frontmatter.featuredimage.childImageSharp.fluid}>
                  <div className="overlay-title">
                    <h2>{posts[1].frontmatter.title}</h2>
                    <p>Read more...</p>
                  </div>
                  <div className="overlay">
                  </div>
                </BackgroundImage>
              </Link>

            </div>
            
            
            {/* Vertical RIGHT Half */}
            <Link 
              className="square" to={posts[1].fields.slug}
            >
              <BackgroundImage className="gallery-tile-inner"
              fluid={posts[1].frontmatter.featuredimage.childImageSharp.fluid}>
                <div className="overlay-title">
                  <h2>{posts[1].frontmatter.title}</h2>
                  <p>Read more...</p>
                </div>
                <div className="overlay">
                </div>
              </BackgroundImage>
            </Link>
        </div>
        
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} index={props.index}/>}
  />
)
