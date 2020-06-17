import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import codepen from '../img/codepen-icon.svg'
import linkedin from '../img/linkedin-icon.svg'
import twitter from '../img/twitter-icon.svg'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Work from '../components/Work'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  aboutme,
  description,
  intro,
}) => (
  <div>
    <div
      className="landing-page-container"
    >

    <section className="main-landing">
      {/* MAIN LANDING PAGE COPY */}
      <div className="landing-page-copy-container">
        <h1
          className="landing-page-primary-copy"
        >
          <span className="name">Adit Damodaran</span> is a builder at <span className="heart">♥</span>
        </h1>
        <div className="flex-break"></div>
        <h3
          className="landing-page-subheading-copy"
        >
          {subheading}
        </h3>
      </div>

      {/* MAIN LANDING PAGE SOCIAL ICONS (DESKTOP) */}

      <div 
        className="social-icons-sidebar"
      >
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/adit-damodaran-1a0245108" className="" title="LinkedIn">
              <img className="social-icon" src={linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adit-damodaran-1a0245108" className="" title="GitHub">
              <img className="social-icon" src={github} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adit-damodaran-1a0245108" className="" title="Codepen">
              <img className="social-icon" src={codepen} alt="Codepen" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adit-damodaran-1a0245108" className="" title="Twitter">
            <img className="social-icon" src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
      
    </section>


    <section id="aboutme">
      <div className="about-me-container">

        <div className="two-thirds">
          <div className="about-me-left">
            <h1 className="about-me-title">
              {aboutme.title}
            </h1>
            <h3 className="about-me-description">
              <div className="about-me-description-segment">{aboutme.description1}</div>
              <div className="about-me-description-segment">{aboutme.description2}</div>
              <div className="about-me-description-segment">{aboutme.description3}</div>
              <div className="about-me-description-segment">{aboutme.description4}</div>
            </h3>
            {/*<div className="recent-technologies">Technologies I've been using recently:</div>
            <hr></hr>
            <ul className="recent-technologies padding-0">
              <li>JavaScript</li>
              <li>JavaScript</li>
          </ul>*/}
          </div>
        </div>

        <div className="third">
          <div className="about-me-right about-me-image-container">
            <PreviewCompatibleImage
              imageInfo={{
                image: aboutme.image,
                alt: `Adit Damodaran`,
                className: "about-me-image"
              }}
            />
          </div>
        </div>

      </div>
    </section>

    <section id="work">
      <div className="work-container">
      <Work></Work>
      </div>
    </section>






    </div>








    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{aboutme.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  aboutme: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        aboutme={frontmatter.aboutme}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        subheading
        aboutme {
          title
          description1
          description2
          description3
          description4
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
