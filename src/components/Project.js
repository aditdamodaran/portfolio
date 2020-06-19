import React from 'react'
import BackgroundImage from 'gatsby-background-image'

class Project extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="project-container">
        <h3 className="project-title project-spacing">
          {this.props.title}
        </h3>
        <div className="project-links project-spacing">
          {this.props.link ?
            <div className="project-website">
              <a href={`https://www.${this.props.link}`}>
                Website
              </a>
            </div>
          : null }
          {this.props.github ?
            <div className="project-github">
              <a href={`https://github.com/aditdamodaran/${this.props.github}`}>
                Source Code
              </a>
            </div>
          : null }
        </div>
        {this.props.text ?
        <p className="project-description project-spacing">
          {this.props.text}
        </p> : null}
        {this.props.tech ?
        <div className="work-content work-content-tech project-spacing project-tech">
          {this.props.tech ? this.props.tech.map((tech, idx) => (
            <div key={idx} className="technologies"><p>{tech}</p></div>
          )) : null }
        </div> : null}
        <BackgroundImage
          className={`project-tile ${this.props.work ? 'work-related' : null}`}
          fluid={this.props.image.childImageSharp.fluid}
        >
        </BackgroundImage>
      </div>
    )
  }
}

export default Project

