import React from "react"

import styled from "styled-components"
// import logo from "../images/hh_logo_small.png"

import colors from "../theme/colors"

const StaticHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    ${props => props.startColor},
    ${props => props.endColor}
  );

  padding: 1.6em;
  h1 {
    color: ${colors.background};
    font-weight: 300;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
  img {
    height: 10vh;
    padding: 0;
    margin: 0;
  }
`

const HeroStatic = ({ title, startColor, endColor }) => {
  startColor = startColor ? startColor : colors.orange
  endColor = endColor ? endColor : colors.orange_transparent

  return (
    <StaticHero startColor={startColor} endColor={endColor}>
      <h1> {title}</h1>
      {/* <img src={logo} alt="Hack Horsham compact logo" /> */}
    </StaticHero>
  )
}

export default HeroStatic
