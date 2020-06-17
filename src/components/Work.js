import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const workExperience = [
  {
    company: 'Hopper',
    companyShort: 'Hopper',
    timeframe: 'Mar. 2020 - Apr. 2020',
    role: 'Economist',
    active: true,
  },
  {
    company: 'Digitas (Client: Intel)',
    companyShort: 'Digitas',
    timeframe: 'Jun. 2019 - Aug. 2019',
    role: 'Software Engineering Intern',
    active: false,
  },
  {
    company: 'Chicago Ventures',
    companyShort: 'Chicago Ventures',
    timeframe: 'Jan. 2019 - Jun. 2019',
    role: 'VC Intern',
    active: false,
  },
  {
    company: 'UChicago Booth School of Business',
    companyShort: 'Chicago Booth',
    timeframe: 'Sept. 2018 - Dec. 2018',
    role: 'Research Assistant',
    active: false,
  },
  {
    company: 'Polsky Center for Entrepreneurship and Innovation',
    companyShort: 'Polsky Center',
    timeframe: 'Mar. 2017 - Sept. 2017',
    role: 'Marketing & Design Intern',
    active: false,
  }
]

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
              className="tabs"
              style={{
                borderLeft: (exp.active ? '3px solid white': '3px solid #222'),
                backgroundColor: (exp.active ? '#111': 'transparent')
              }}
              onClick={() => this.tabsHandler(idx)}
            >
              {exp.companyShort}
            </div>
          ): null}
          </div>
          <div className="work-content-container">
              <h3>{workExperience ? `${workExperience[this.state.activeTabIndex].role} at ${workExperience[this.state.activeTabIndex].company}` : null}</h3>
              <p>{workExperience ? workExperience[this.state.activeTabIndex].timeframe : null}</p>
              
          </div>


        </div>
      </div>
    )
  }
}

export default Work

