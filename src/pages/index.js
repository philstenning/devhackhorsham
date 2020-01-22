import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage"
import Content from "../components/content"

import heroImage from "../images/laptops.jpg"

import SvgIconElectrical from "../components/icons/svgIcon_electrical"
import SvgIconCrafting from "../components/icons/svgIcon_crafting"

import ProjectTypes from "../components/projectTypes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage
      heroImage={heroImage}
      gradientColor={{ r: 500, g: 55, b: 20 }}
      tagLIneB="for everyone"
    />
    <Content>
      <h2>This is h2</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas
        autem possimus alias cumque laudantium aliquam ex et omnis, dignissimos
        consequatur vitae, quasi rem incidunt pariatur animi nam, id rerum
        fugiat non tempora praesentium deleniti. Debitis deleniti modi suscipit
        alias dolores ipsum unde beatae repudiandae! Expedita, voluptate
        tempora? Optio aspernatur delectus necessitatibus eveniet assumenda
        cumque, quisquam eaque dolor explicabo quia quibusdam ipsum sapiente
        porro quae itaque sunt iste nemo eligendi error corporis quis ut
        adipisci. Sint maiores quis placeat quibusdam. Doloribus reprehenderit
        sit, deserunt voluptates, error ipsum ipsam perferendis blanditiis
        recusandae excepturi vel asperiores saepe earum incidunt. Iste, fuga
        hic.
      </p>
    </Content>
    <ProjectTypes />
    {/* <ProjectTypes /> */}
  </Layout>
)

export default IndexPage
