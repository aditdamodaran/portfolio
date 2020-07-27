/* eslint-disable */
/* ----------------
THANKS TO BRITTANY CHIANG FOR HELPING ME WITH THIS
BY OPEN SOURCING HER NAVBAR CODE
https://github.com/bchiang7/v4/blob/master/src/components/nav.js 
---------------- */
import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { CSSTransition } from 'react-transition-group';
import { throttle } from '../utils/throttle'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      scrollDirection: 'none',
      lastScrollTop: 0,
      menuOpen: false,
      atTop: true
    }
  }

  componentDidMount() {
    this._isMounted = true
      setTimeout(
        () => {
          window.addEventListener('scroll', () => throttle(this.state.isMounted, this.handleScroll()))
        },
      100);
  }

  componentWillUnmount() {
    this._isMounted = false
    window.removeEventListener('scroll', () => this.handleScroll())
  }

  handleScroll = () => {
    const isMounted = this._isMounted
    const { scrollDirection, lastScrollTop, menuOpen, atTop } = this.state
    const fromTop = window.scrollY
    const DELTA = 10
    const navHeight = 3
    const fromTopDelta = 25

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
                {this.props.about ? null :
                  <Link className="navbar-item" to="/#aboutme" onClick={() => this.toggleHamburger()}>
                    About
                  </Link>
                }
                <Link className="navbar-item" to="/#work" onClick={() => this.toggleHamburger()}>
                  Experience
                </Link>
                <Link className="navbar-item" to="/#projects" onClick={() => this.toggleHamburger()}>
                  Projects
                </Link>
                <Link className="navbar-item" to="/blog" onClick={() => this.toggleHamburger()}>
                  Blog
                </Link>
              </div>
          </CSSTransition>
        </div> {/* Close 'container' */}
      </nav>
    )
  }
}

export default Navbar
