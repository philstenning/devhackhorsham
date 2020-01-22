import React from "react"
import styled from "styled-components"

import SvgIconElectrical from "../components/icons/svgIcon_electrical"
import SvgIconCrafting from "../components/icons/svgIcon_crafting"

const Section = styled.section`
  width: 100vw;
  display: flex;
  align-content: center;
  background-color: lightgoldenrodyellow;
  div.foo {
    max-width: 1200px;
    box-sizing: border-box;
    /* min-width: 100vw; */

    padding: 1em 4em;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    /* border: solid hotpink 1px; */
    align-items: start;
    @media (max-width: 40em) {
      grid-template-columns: 1fr;
      padding: 2em 1em;
    }
    @media (min-width: 41em) and (max-width: 60em) {
      grid-template-columns: 1fr 1fr;
      padding: 2em 2em;
    }
  }
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12em 5em auto;
  align-items: center;
  justify-items: center;
  padding: 1em;
  svg {
    padding: 0;
    margin: 0;
  }
  h3 {
    text-transform: capitalize;
    padding: 0;
    margin: 0;
  }
`

function ProjectTypes() {
  return (
    <Section>
      <div className="foo">
        <Item>
          <SvgIconElectrical size="10em" />
          <h3>electronics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas
            autem possimus alias cumque laudantium aliquam ex et omnis,
            dignissimos consequatur vita incidunt. Iste, fuga hic.
          </p>
        </Item>

        <Item>
          <SvgIconCrafting size="8em" />
          <h3>electronics 3</h3>
          <p>
            Three ipsum dolor sit amet consectetur adipisicing elit. Error quas
            autem possimus alias cumqlectus incidunt. Iste, fuga hic.
          </p>
        </Item>

        <Item>
          <SvgIconElectrical size="10em" />
          <h3>electronics 3</h3>
          <p>
            Three ipsum dolor sit amet consectetur adipisicing elit. Error quas
            autem possimus alias cumque ladelectus incidunt. Iste, fuga hic.
          </p>
        </Item>
        <Item>
          <SvgIconElectrical size="10em" />
          <h3>electronics 3</h3>
          <p>
            Three ipsum dolor sit amet consectetur adipisicing elit. Error quas
            autem possimus alias cumque laudantium aliquam ex et omnis,
            dignissimos consequatur vitae, nde beatae repudiandae! Expedita,
            voluptate tempora? Optio aspernatur delectus incidunt. Iste, fuga
            hic.
          </p>
        </Item>
        <Item>
          <SvgIconElectrical size="10em" />
          <h3>electronics 3</h3>
          <p>
            Three ipsum dolor sit amet consectetur adipisicing elit. Error quas
            autem possimus alias cumque laudantium aliquam ex et omnis,
            dignissimos consequatur vitae, nde beatae repudiandae! Expedita,
            voluptate tempora? Optio aspernatur delectus incidunt. Iste, fuga
            hic.
          </p>
        </Item>
        <Item>
          <SvgIconElectrical size="10em" />
          <h3>electronics 3</h3>
          <p>
            Three ipsum dolor sit amet consectetur adipisicing elit. Error quas
            autem possimus alias cumque laudantium aliquam ex et omnis,
            dignissimos consequatur vitae, nde beatae repudiandae! Expedita,
            voluptate tempora? Optio aspernatur delectus incidunt. Iste, fuga
            hic.
          </p>
        </Item>
      </div>
    </Section>
  )
}

export default ProjectTypes
