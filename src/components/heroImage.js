import React from "react"

import styled from "styled-components"

import fallbackHeroImage from "../images/photos2020/computers.jpg"
import img2 from "../images/Photos2020/HH white large-Recovered.png"

import colors from "../theme/colors"

const HeroImage = ({ heroImage, tagLIneA, tagLIneB, gradientColor }) => {
  const color = gradientColor ? gradientColor : { r: 200, g: 44, b: 97 }
  const colorGradientStart = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`
  const colorGradientEnd = `rgba(${color.r}, ${color.g}, ${color.b}, .5)`

  const image = heroImage ? heroImage : fallbackHeroImage
  return (
    <StyledHeroImage
      heroImage={image}
      colorStart={colorGradientStart}
      colorEnd={colorGradientEnd}
    >
      <div className="overlay">
        <div>
          <h1 className="text">
            {tagLIneA ? tagLIneA : "Building, Making, Learning."}
          </h1>
          <h1 className="handwriting--white">{tagLIneB ? tagLIneB : " "}</h1>
          <img className="logo" src={img2} alt="" />
        </div>
      </div>
    </StyledHeroImage>
  )
}
const StyledHeroImage = styled.div`
  position: relative;

  background: url(${props => props.heroImage}) ${colors.pink};
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
    background: linear-gradient(
      ${props => props.colorStart},
      ${props => props.colorEnd}
    );
    display: flex;
    flex-direction: column;
    padding: 2vh 0 0;
    text-align: center;
    color: ${colors.background};
  }
  h1 {
    min-height: 5vh;
    max-height: 8vh;
    color: ${colors.background};
    font-weight: 300;
  }

  .logo {
    height: 10vh;
    padding-top: 1em;
  }
`
export default HeroImage
