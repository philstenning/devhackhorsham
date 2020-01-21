import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import mainImage from "../images/Photos2020/Hack Horsham large white words.png"
import backgroundImage from "../images/background.png"
import colors from "../theme/colors"

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  box-sizing: border-box;
  background: url(${backgroundImage});
  background-size: 50%;
`

const Ul = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  list-style: none;
  li {
    display: block;
    padding: 0.5em;
  }
  a {
    display: block;
    text-decoration: none;

    padding: 0.2em;
    color: ${colors.background};
    text-transform: uppercase;
    font-weight: 500;
    transition: all 500ms;
    border: 2px solid transparent;

    &:hover.nav_item {
      background-color: ${colors.background};
      color: ${colors.text};
      border: 2px ${colors.pink} solid;
    }
  }
  img {
    max-width: 40vw;
  }

  @media (max-width: 40em) {
    li {
      display: block;
      padding: 0.2em;
    }
    img {
      max-width: 60vw;
    }
    a.nav_item {
      /* display: none; */
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <nav>
      <Ul>
        <li>
          <Link className="nav_item" to="/">
            home
          </Link>
        </li>
        <li>
          <Link className="nav_item" to="/events">
            events
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={mainImage} alt="Hack Horsham Logo" />
          </Link>
        </li>
        <li>
          <Link className="nav_item" to="/blog">
            blog
          </Link>
        </li>
        <li>
          <Link className="nav_item" to="/more">
            more
          </Link>
        </li>
      </Ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
