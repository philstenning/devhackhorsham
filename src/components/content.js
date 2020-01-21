import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  padding: 0 2em;

  max-width: 600px;
`

function Content({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}

export default Content
