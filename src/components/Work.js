import React from 'react'

const workExperience = [
  {
    company: 'Hopper',
    companyShort: 'Hopper',
    timeframe: 'Mar. 2020 - Apr. 2020',
    role: 'Economist',
    active: true,
    bullets: [
      `Analyzed Covid-19's impact on U.S./Canadian flight operations and airfare, and compiled a report with my findings`,
      `Created data visualizations to help the communications team understand the scope of cancellations across major U.S. airports and carriers`
    ],
    technologies: ['Python (Pandas/Plotly)', 'Google Cloud Platform', 'SQL', ]
  },
  {
    company: 'Digitas (Client: Intel)',
    companyShort: 'Digitas',
    timeframe: 'Jun. 2019 - Aug. 2019',
    role: 'Software Engineering Intern',
    active: false,
    bullets: [
      'Developed front-end in Vue.JS/Nuxt, built subtitle functionality for videos, and added animations to Intel’s Point-of-Sale (IPOS) software, which ships internationally in +20 languages retail PCs with Intel processors',
      'Collaborated with the engineering and QA teams to reduce technical debt, track progress in Jira, and document changes in Storybook — code reviewed by the agency’s national front-end lead and merged into production'
    ],
    technologies: ['Vue', 'Nuxt', 'Git', 'JavaScript', 'JIRA/Jenkins', 'HTML/SCSS', 'Bootstrap', 'NVM/NPM']
  },
  {
    company: 'Chicago Ventures',
    companyShort: 'Chicago Ventures',
    timeframe: 'Jan. 2019 - Jun. 2019',
    role: 'VC Intern',
    active: false,
    bullets: [
      'Developed a desktop application in Python to quickly scrape hundreds of profiles from LinkedIn’s Sales Navigator, helping the firm automate a previously manual and tedious hour-long process to approximately ten minutes',
      'Followed up pitches and diligence sessions with detailed market research on prospective investments, compiled analysis of co-investors across funds using capitalization tables, and updated portfolio database using Carta'
    ],
    technologies: ['Python (lxml + Pandas)', 'Selenium', 'Kivy']
  },
  {
    company: 'UChicago Booth School of Business',
    companyShort: 'Chicago Booth',
    timeframe: 'Sept. 2018 - Dec. 2018',
    role: 'Research Assistant',
    active: false,
    bullets: [
      'Coded a web-scraper to automate the tedious task of acquiring detailed drug information (specifically its chemical generic and treated symptoms) from an online, authentication-protected database.',
      'Analyzed Nielsen big data (user internet browsing histories) with Python (Pandas) to gain insights on FTC lawsuits regarding consumer protection.'
    ],
    technologies: ['Python (Pandas/Numpy)', 'Selenium', 'Bloomberg Law']
  },
  {
    company: 'Polsky Center for Entrepreneurship and Innovation',
    companyShort: 'Polsky Center',
    timeframe: 'Mar. 2017 - Sept. 2017',
    role: 'Marketing & Design Intern',
    active: false,
    bullets: [
      'Designed +50 marketing materials, collaborated with the Polsky team to organize events, compiled the first comprehensive catalog of the New Venture Challenge, and solo-produced a video for the Polsky Fabrication Lab'
    ],
    technologies: ['Adobe InDesign','Adobe Illustrator','Python (BeautifulSoup)']
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

