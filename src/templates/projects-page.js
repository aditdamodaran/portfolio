import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'

export const ProjectsPageTemplate = ({
  work,
  side,
  intro,
  older
}) => (
  <div className="content">
    <section id="projects">
      <div className="project-previews-container">

        <div className="project-preview-title-container">
          <h1 className="projects-title">
            Side Projects
          </h1>
        </div>
    
        <div className="projects">
          <ProjectPreview
            title={side.projects[0].title}
            image={side.projects[0].image}
            text={side.projects[0].text}
            tech={side.projects[0].tech}
            link={side.projects[0].link}
            pageLink={side.projects[0].pageLink}
            github={side.projects[0].github}
          />
        </div>

        <div className="project-preview-title-container">
          <h1 className="projects-title">
            Work Projects
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
      </div>
    </section>
  </div>
)

ProjectsPageTemplate.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectsPageTemplate
        work={frontmatter.work}
        side={frontmatter.side}
        intro={frontmatter.intro}
        older={frontmatter.older}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
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
        subheading
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
        side {
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
