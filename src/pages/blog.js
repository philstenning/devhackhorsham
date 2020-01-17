import React from "react"
import Layout from "../components/layout"
import HeroStatic from "../components/heroStatic"
// import colors from "../theme/colors"
const Blog = () => {
  return (
    <Layout>
      {/* <HeroStatic
        title="blog"
        startColor={colors.pink}
        endColor={colors.pink_transparent}
      /> */}
      <HeroStatic title="blog" />
    </Layout>
  )
}
export default Blog
