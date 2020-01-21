import React from "react"
import styled from "styled-components"
import colors from "../theme/colors"

const Button = styled.button`
  border: solid 1px ${colors.pink};
  background-color: ${colors.background};
  font-weight: 500;
  padding: 0.4em;
  margin: 0;
  text-transform: uppercase;
  &:hover {
    background-color: ${colors.pinkHighlight};
  }
`

const ButtonPrimary = styled(Button)`
  border: solid 1px ${colors.pink};
  background-color: ${colors.pink};
  color: ${colors.background};
  &:hover {
    background-color: ${colors.pinkHighlight};
  }
`

export { Button, ButtonPrimary }
