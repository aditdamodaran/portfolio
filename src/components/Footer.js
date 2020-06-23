import React from 'react'
// import { Link } from 'gatsby'

import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className="footer-content-container">
            <div className="footer-content-text">Open-sourced and built with Gatsby and React.</div>
            <div className="footer-content-text">
              <a href="https://github.com/aditdamodaran/portfolio">Find the repository here.</a>
            </div>
            <img
            className="logo"
            src={logo}
            alt="logo"
            />
          </div>
      </footer>
    )
  }
}

export default Footer
