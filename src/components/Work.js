import React from 'react'
import workExperience from '../fixtures/workExperience'

class Work extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeTabIndex: 0
    }
    this.tabsHandler = this.tabsHandler.bind(this)
  }

  tabsHandler(idx) {
    if (idx === this.state.activeTabIndex) {
      return;
    }
    // Unset the Previously Selected Tab
    workExperience[this.state.activeTabIndex].active = !workExperience[this.state.activeTabIndex].active
    // Set the Selected One
    workExperience[idx].active = true
    this.setState({activeTabIndex: idx})
  }

  render() {
    return (
      <div>
        <div className="work-timeline" style={{color: 'white'}}>
          <div className="tabs-container">
          {workExperience ? workExperience.map((exp, idx) => 
            <div
              key={idx}
              className={`tabs ${exp.active ? 'active' : 'inactive'}`}
              onClick={() => this.tabsHandler(idx)}
            >
              {exp.companyShort}
            </div>
          ): null}
          </div>
          <div className="work-content-container">
              <div 
                className="work-content work-content-title">
                {workExperience ? 
                  `${workExperience[this.state.activeTabIndex].role} @ ${workExperience[this.state.activeTabIndex].company}` 
                : null}
              </div>
              <p className="work-content work-content-date">{workExperience ? workExperience[this.state.activeTabIndex].timeframe : null}</p>
              <ul className="work-content work-content-description">{workExperience[this.state.activeTabIndex].bullets ? workExperience[this.state.activeTabIndex].bullets.map((bullet,idx) => (
                <li key={idx} className="work-content-bullet">{bullet}</li>
              )) : null}</ul>
              <div className="work-content work-content-tech">{workExperience ? workExperience[this.state.activeTabIndex].technologies.map((tech, idx) => (
                <div key={idx} className="technologies"><p>{tech}</p></div>
              )) : null}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work

