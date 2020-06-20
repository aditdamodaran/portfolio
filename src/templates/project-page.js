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
  imageLarge,
  heading,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  console.log(imageLarge)
  return (
    <div>
      <section id="projectpage">
        <h1>{title}</h1>
        {image ? <BackgroundImage
          className={`projectpage-image ${imageLarge ? `projectpage-image-large` : null}`}
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
        imageLarge={frontmatter.imageLarge}
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
        imageLarge
        heading
      }
      html
    }
  }
`
