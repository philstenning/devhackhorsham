import React from "react"
import Layout from "../components/layout"
// import HeroImage from "../components/heroImage"
import HeroStatic from "../components/heroStatic"
import colors from "../theme/colors"
const Events = () => {
  return (
    <Layout>
      <HeroStatic title="events" color={colors.pink} />
      <section>
        <div>event here</div>
        <div>event here</div>
        <div>event here</div>
        <div>event here</div>
      </section>
    </Layout>
  )
}
export default Events
