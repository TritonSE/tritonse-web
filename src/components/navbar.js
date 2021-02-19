import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { initMaterialize } from "../util/init.js";
import "../styles/navbar.css";
import "../styles/colors.css";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

class Navbar extends React.Component {
  componentDidMount() {
    initMaterialize();
    let dropdown = document.querySelectorAll(".dropdown-trigger");
    let options = {
      coverTrigger: false
    };
    /* global M */
    M.Dropdown.init(dropdown, options);
  }

  render() {
    const { data, gradient } = this.props;
    const foreground = gradient ? "white-text" : "navy-text";
    const background = gradient ? "navy" : "white";
    const logo = gradient
      ? data.ylogo.childImageSharp.fluid
      : data.blogo.childImageSharp.fluid;
    return (
      <div>
        <ul
          id="tse-navbar-dropdown"
          className={`dropdown-content ${background}`}
        >
          <li>
            <a href="/students">
              <span className={`tse-navbar-dropdown-item ${foreground}`}>
                Students
              </span>
            </a>
          </li>
          <li>
            <a href="/nonprofits">
              <span className={`tse-navbar-dropdown-item ${foreground}`}>
                Nonprofits
              </span>
            </a>
          </li>
        </ul>
        <nav className={background}>
          <div className="nav-wrapper container">
            <div className="row">
              <div className="col s6">
                <Link to="/">
                  <Img fluid={logo} className="tse-navbar-logo"></Img>
                </Link>
              </div>
              <div className="col s6 show-on-medium-and-down">
                <a
                  href="#!"
                  data-target="tse-mobile-menu"
                  className={`sidenav-trigger right ${foreground}`}
                >
                  <i className="material-icons">menu</i>
                </a>
              </div>
              <div className="col s6 hide-on-med-and-down">
                <ul className="right">
                  <li>
                    <Link to="/">
                      <span className={`tse-navbar-link ${foreground}`}>
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <span className={`tse-navbar-link ${foreground}`}>
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects">
                      <span className={`tse-navbar-link ${foreground}`}>
                        Projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-trigger"
                      href="#!"
                      data-target="tse-navbar-dropdown"
                    >
                      <span className={`tse-navbar-link ${foreground}`}>
                        Connect
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <ul className={`sidenav ${background}`} id="tse-mobile-menu">
          <li>
            <a href="/" className={foreground}>
              <span className="tse-text-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="/about" className={foreground}>
              <span className="tse-text-medium">About</span>
            </a>
          </li>
          <li>
            <a href="/projects" className={foreground}>
              <span className="tse-text-medium">Projects</span>
            </a>
          </li>
          <li>
            <a href="/apply" className={foreground}>
              <span className="tse-text-medium">Connect</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        ylogo: file(relativePath: { eq: "logo-yellow.png" }) {
          ...FluidImage
        }
        blogo: file(relativePath: { eq: "logo-blue.png" }) {
          ...FluidImage
        }
      }
    `}
    render={data => <Navbar data={data} {...props} />}
  />
);
