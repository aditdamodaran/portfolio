import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import Testimonials from '../components/Testimonials'
// import Pricing from '../components/Pricing'
import BackgroundImage from 'gatsby-background-image'
import Content, { HTMLContent } from '../components/Content'

export const ProjectPageTemplate = ({
  title,
  image,
  heading,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <section id="projectpage">
        <h1>{title}</h1>
        {image ? <BackgroundImage
          className={`projectpage-image`}
          fluid={image.childImageSharp.fluid}
        > 
        </BackgroundImage>: null}
        <PageContent className="content" content={content} />
      </section>
    </div>
  )
}

ProjectPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
      }
      html
    }
  }
`
