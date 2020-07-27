import React from 'react'
import logo from '../img/logo.svg'

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
