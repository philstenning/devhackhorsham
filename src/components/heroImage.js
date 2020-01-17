import React from "react"

import styled from "styled-components"

import img1 from "../images/photos2020/computers.jpg"
import img2 from "../images/Photos2020/HH white large-Recovered.png"

import colors from "../theme/colors"

const StyledHeroImage = styled.div`
  position: relative;
  background: url(${img1}) ${colors.pink};
  width: 100%;
  height: 40vh;
  color: ${colors.background};
  background-size: 200vw;
  background-repeat: no-repeat;
  animation: linear 60s infinite alternate-reverse animate_background;

  @keyframes animate_background {
    from {
      background-position: -20vw -20vh;
    }
    to {
      background-position: -100vw -20vh;
    }
  }

  .overlay {
    box-sizing: border-box;
    min-width: 100%;
    min-height: 100%;
    background: linear-gradient(rgba(200, 44, 96, 1), rgba(200, 44, 96, 0.5));
    display: flex;
    flex-direction: column;
    padding: 2vh 0 0;
    text-align: center;
    color: ${colors.background};
  }
  h1 {
    min-height: 5vh;
    max-height: 8vh;
  }

  .logo {
    height: 10vh;
    padding-top: 1em;
  }
`

const HeroImage = () => (
  <StyledHeroImage>
    <div className="overlay">
      <div>
        <h1 className="text">Building, Making, Learning.</h1>
        <h1 className="handwriting--white">for everyone</h1>
        <img className="logo" src={img2} alt="" />
      </div>
    </div>
  </StyledHeroImage>
)

export default HeroImage
