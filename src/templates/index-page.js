import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import linkedin from '../img/linkedin-icon.svg'
import heart from '../img/heart.svg'
import twitter from '../img/twitter-icon.svg'
import Layout from '../components/Layout'
import Work from '../components/Work'
import ProjectPreview from '../components/ProjectPreview'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  subheading,
  aboutme,
  work,
  intro,
  older,
  index
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
          <span className="name">Adit Damodaran</span> is a builder at <span className="heart"><img src={heart} alt="heart" /></span>
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
            <a href="https://github.com/aditdamodaran" className="" title="GitHub">
              <img className="social-icon" src={github} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AditDamodaran" className="" title="Twitter">
            <img className="social-icon" src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
      
    </section>

    <section className="filler"></section>

    <section id="aboutme">
      <div className="about-me-container">

        <div className="left-half">
          <div className="about-me-left">
            <h1 className="about-me-title">
              {aboutme.title}
            </h1>
            <h3 className="about-me-description">
              <div className="about-me-description-segment">{aboutme.description1}</div>
              <div className="about-me-description-segment">
                {aboutme.description2}
                <br /><br /><a href="/about">You can read more about me here.</a>
                <br />
              </div>
            </h3>
          </div>
        </div>

        <div className="right-half">
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
      <h1 className="work-experience-title">
        Work Experience
      </h1>
      <Work></Work>
      </div>
    </section>

    <section id="project-previews">

      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Work Related Projects
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={work.projects[0].title}
          image={work.projects[0].image}
          text={work.projects[0].text}
          tech={work.projects[0].tech}
          pageLink={work.projects[0].pageLink}
        />
        <ProjectPreview
          title={work.projects[1].title}
          image={work.projects[1].image}
          text={work.projects[1].text}
          tech={work.projects[1].tech}
          pageLink={work.projects[1].pageLink}
        />
      </div>
      
      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Freelancing
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={intro.blurbs[0].title}
          image={intro.blurbs[0].image}
          text={intro.blurbs[0].text}
          tech={intro.blurbs[0].tech}
          link={intro.blurbs[0].link}
          pageLink={intro.blurbs[0].pageLink}
          github={intro.blurbs[0].github}
        />
        <ProjectPreview
          title={intro.blurbs[1].title}
          image={intro.blurbs[1].image}
          text={intro.blurbs[1].text}
          tech={intro.blurbs[1].tech}
          pageLink={intro.blurbs[1].pageLink}
          link={intro.blurbs[1].link}
        />
        <ProjectPreview
          title={intro.blurbs[2].title}
          image={intro.blurbs[2].image}
          text={intro.blurbs[2].text}
          pageLink={intro.blurbs[2].pageLink}
          tech={intro.blurbs[2].tech}
        />
      </div>

      <div className="project-preview-title-container">
        <h1 className="projects-title">
          Older Projects
        </h1>
      </div>
      
      <div className="projects">
        <ProjectPreview
          title={older.projects[0].title}
          image={older.projects[0].image}
          tech={older.projects[0].tech}
          text={older.projects[0].text}
          github={older.projects[0].github}
          pageLink={older.projects[0].pageLink}
          work={true}
        />
        <ProjectPreview
          title={older.projects[1].title}
          image={older.projects[1].image}
          tech={older.projects[1].tech}
          text={older.projects[1].text}
          github={older.projects[1].github}
          pageLink={older.projects[1].pageLink}
          work={true}
        />
        <ProjectPreview
          title={older.projects[2].title}
          image={older.projects[2].image}
          tech={older.projects[2].tech}
          text={older.projects[2].text}
          github={older.projects[2].github}
          pageLink={older.projects[2].pageLink}
          work={true}
        />
      </div>
      {/*<div className="projects-title-container">
        <h1 className="projects-title">
          Work Related Projects
        </h1>
      </div>*/}
      {/*<div className="projects-container">
        <Project
          title={work.projects[0].title}
          image={work.projects[0].image}
          text={work.projects[0].text}
          tech={work.projects[0].tech}
          pageLink={work.projects[0].pageLink}
          work={true}
        />
        <Project
          title={work.projects[1].title}
          image={work.projects[1].image}
          text={work.projects[1].text}
          tech={work.projects[1].tech}
          pageLink={work.projects[1].pageLink}
          work={true}
        />
      </div>*/}

      {/*<div className="projects-title-container">
        <h1 className="projects-title">
          Side Projects & Freelancing
        </h1>
      </div>*/}
    
      {/*<div className="projects-container">
        <Project
          title={intro.blurbs[0].title}
          image={intro.blurbs[0].image}
          text={intro.blurbs[0].text}
          tech={intro.blurbs[0].tech}
          link={intro.blurbs[0].link}
          pageLink={intro.blurbs[0].pageLink}
          github={intro.blurbs[0].github}
        />
        <Project
          title={intro.blurbs[1].title}
          image={intro.blurbs[1].image}
          text={intro.blurbs[1].text}
          tech={intro.blurbs[1].tech}
          pageLink={intro.blurbs[1].pageLink}
          link={intro.blurbs[1].link}
        />
        <Project
          title={intro.blurbs[2].title}
          image={intro.blurbs[2].image}
          text={intro.blurbs[2].text}
          pageLink={intro.blurbs[2].pageLink}
          tech={intro.blurbs[2].tech}
        />
      </div>*/}

      {/*<div className="projects-title-container">
        <h1 className="projects-title">
          Older Projects (Archived)
        </h1>
      </div>*/}

      {/*<div className="projects-container">
        <Project
          title={older.projects[0].title}
          image={older.projects[0].image}
          text={older.projects[0].text}
          tech={older.projects[0].tech}
          github={older.projects[0].github}
          pageLink={older.projects[0].pageLink}
          work={true}
        />
        <Project
          title={older.projects[1].title}
          image={older.projects[1].image}
          text={older.projects[1].text}
          tech={older.projects[1].tech}
          github={older.projects[1].github}
          pageLink={older.projects[1].pageLink}
          work={true}
        />
        <Project
          title={older.projects[2].title}
          image={older.projects[2].image}
          text={older.projects[2].text}
          tech={older.projects[2].tech}
          github={older.projects[2].github}
          pageLink={older.projects[2].pageLink}
          work={true}
        />
      </div>*/}

    </section>
    
    {/*<section id="blog">
      <div className="blog-title-container">
      <h1 className="blog-title">
        Blog
      </h1>
      </div>
      <div className="blog-post-tiles">
        <BlogRoll index={index}/>     
      </div>
            </section>*/}




    </div>{/* Close LP Container */}
  {/* Root Div */}
  </div>
)

IndexPageTemplate.propTypes = {
  aboutme: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout index={true}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        aboutme={frontmatter.aboutme}
        work={frontmatter.work}
        intro={frontmatter.intro}
        older={frontmatter.older}
        index={true}
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
        work {
          projects {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            pageLink
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            link
            github
            pageLink
          }
        }
        older {
          projects {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            tech
            github
            pageLink
          }
        }
      }
    }
  }
`
