import React from "react"

import styled from "styled-components"
import colors from "../theme/colors"

const StyledFooter = styled.footer`
  box-sizing: border-box;
  background-color: ${colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.background};
  width: 100%;
  height: 20vh;
  padding: 2em;
`

function Footer() {
  return <StyledFooter>© {new Date().getFullYear()}, Hack Horsham</StyledFooter>
}

export default Footer
