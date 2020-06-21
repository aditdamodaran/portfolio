/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { CSSTransition } from 'react-transition-group';
import { transform } from 'lodash';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: !this.props.index,
      active: false,
      navBarActiveClass: '',
      scrollDirection: 'none',
      lastScrollTop: 0,
      menuOpen: false,
      atTop: true
    }
    // this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    // console.log(`DidMount() isMounted: ${this.state.isMounted} Index: ${this.props.index}`)
      setTimeout(
        () =>
          this.setState({ isMounted: true }, () => {
            const throttle = (func, wait = 250) => {
              let timer = null;
              return function(...args) {
                if (timer === null) {
                  timer = setTimeout(() => {
                    func.apply(this, args);
                    timer = null;
                  }, wait);
                }
              }
            }
            window.addEventListener('scroll', () => throttle(this.handleScroll()))
          }),
        250,
      );
  }

  componentWillUnmount() {
    // console.log(`WillUnmount() isMounted: ${this.state.isMounted} Index: ${this.props.index}`)
    // console.log(this.state.isMounted)
    window.removeEventListener('scroll', () => this.handleScroll())
  }

  handleScroll = () => {
    // console.log('handleScroll')
    const { isMounted, scrollDirection, lastScrollTop, menuOpen, atTop } = this.state
    const fromTop = window.scrollY
    const DELTA = 10
    const navHeight = 3
    const fromTopDelta = 25
    // console.log(isMounted, scrollDirection, lastScrollTop, fromTop)

    // Make sure they scroll more than DELTA (to reveal Navbar)
    // Make sure the menu isn't open
    // Make sure they aren't near the top (to hide Navbar) 
    if (!isMounted){
      return;
    }


    if (fromTop < fromTopDelta){
      this.setState({ atTop: true });
    }
    
    if (!isMounted 
      || Math.abs(lastScrollTop - fromTop) <= DELTA 
      || menuOpen
      || fromTop < fromTopDelta) {
      return;
    }

    if (fromTop > fromTopDelta){
      this.setState({ atTop: false });
    }

    // Determine Scroll Direction
    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  }

  toggleHamburger = () => {
    // console.log('toggleHam')
    // toggle the active boolean in the state
    this.setState(
      {
        menuOpen: !this.state.menuOpen,
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  
  render() {
    // console.log(`render() isMounted: ${this.state.isMounted} Index: ${this.props.index}`)
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={{
          transition: 'transform 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out',
          backgroundColor: (this.state.scrollDirection === 'down' || this.state.atTop ? `transparent` : `white`),
          boxShadow : (this.state.atTop ? `none` : `0 1px 30px -10px #333`),
          transform : (this.state.scrollDirection === 'down' && !this.state.atTop ? `translateY(-3rem)` : `translateY(0rem)`),
        }}
      >
        <div className="container">
          <CSSTransition
          in={this.state.active}
          timeout={400}
          >
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
          </CSSTransition>

          <div className="navbar-brand">
            {/* LOGO */}
            {!this.props.index ? 
            <Link to="/" className={`navbar-logo ${this.props.index ? null : `display-logo`}`} title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            : null}
          </div>

          {/* NAVLINKS */}
            <CSSTransition
              in={this.state.active}
              timeout={400}
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start">
                <Link className="navbar-item" to="/about" onClick={() => this.toggleHamburger()}>
                  About
                </Link>
                <Link className="navbar-item" to="/#work" onClick={() => this.toggleHamburger()}>
                  Experience
                </Link>
                <Link className="navbar-item" to="/projects" onClick={() => this.toggleHamburger()}>
                  Projects
                </Link>
                {/*<Link className="navbar-item" to="/blog">
                  Blog
                </Link>*/}
                {/*<Link className="navbar-item" to="/contact">
                  Contact
                </Link>*/}
              </div>
              {/*<div className="navbar-end">
                <a
                  className="navbar-item"
                  href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={github} alt="Github" />
                  </span>
                </a>
              </div>*/}
          </CSSTransition>



        </div> {/* Close 'container' */}
      </nav>
    )
  }
}

export default Navbar
